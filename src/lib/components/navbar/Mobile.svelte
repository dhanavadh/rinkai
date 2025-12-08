<script lang="ts">
	import { menuConfig } from '$lib/config/menu';
	import { logoSrc, textColorClass, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } from '$lib/stores/navbar';
	import SubMenu from './SubMenu.svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Mail from 'lucide-svelte/icons/mail';
	import Globe from 'lucide-svelte/icons/globe';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	let openSubMenu: string | null = $state(null);

	function handleSubMenuToggle(subMenu: string) {
		openSubMenu = openSubMenu === subMenu ? null : subMenu;
	}

	function handleLinkClick() {
		closeMobileMenu();
	}
</script>

<!-- Mobile Header -->
<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 p-6">
	<a href="/">
		<img src={$logoSrc} alt="Rinkai Logo" width="835" height="128" class="h-8 w-full" />
	</a>
	<button onclick={toggleMobileMenu} class={$textColorClass} aria-label="Open menu">
		<Menu />
	</button>
</div>

<!-- Mobile Menu Overlay -->
<div
	class="fixed inset-0 z-40 h-full w-full transform bg-neutral-50 text-neutral-800 transition-transform duration-300 ease-in-out {$isMobileMenuOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex h-full flex-col">
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-neutral-200 p-6">
			<img src="/images/logo-b.svg" alt="Rinkai Logo" class="h-8 w-fit" />
			<button onclick={toggleMobileMenu} aria-label="Close menu">
				<X />
			</button>
		</div>

		<!-- Navigation Links -->
		<nav class="flex flex-col gap-4 p-6 text-lg">
			{#each menuConfig.mainNav as item}
				<div>
					{#if item.megaMenu}
						<button
							class="link-underline flex w-full items-center justify-between text-left"
							onclick={() => handleSubMenuToggle(item.megaMenu ?? '')}
							aria-expanded={openSubMenu === item.megaMenu}
						>
							<span>{item.title}</span>
							<ChevronDown
								class="h-5 w-5 transition-transform {openSubMenu === item.megaMenu
									? 'rotate-180'
									: ''}"
							/>
						</button>
						{#if openSubMenu === item.megaMenu}
							<SubMenu {item} onLinkClick={handleLinkClick} />
						{/if}
					{:else}
						<a href={item.href} class="link-underline" onclick={handleLinkClick}>
							{item.title}
						</a>
					{/if}
				</div>
			{/each}
		</nav>

		<!-- Footer -->
		<div class="mt-auto border-t border-neutral-200 p-6">
			<div class="mb-6 flex items-center justify-center gap-8">
				<a href="/status" class="link-underline" onclick={handleLinkClick} aria-label="Instagram">
					<Instagram />
				</a>
				<a href="/about" class="link-underline" onclick={handleLinkClick} aria-label="Contact">
					<Mail />
				</a>
			</div>
			<div class="flex items-center justify-center gap-2 text-sm text-neutral-500">
				<Globe size={16} />
				<span>English</span>
			</div>
		</div>
	</div>
</div>
