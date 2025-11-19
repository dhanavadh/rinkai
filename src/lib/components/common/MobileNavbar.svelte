<script lang="ts">
	import { navbarStore } from '$lib/stores/navbar';
	import { menuConfig } from '$lib/config/menu';
	import SubMenu from './SubMenu.svelte';
	import { createEventDispatcher } from 'svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Mail from 'lucide-svelte/icons/mail';
	import Globe from 'lucide-svelte/icons/globe';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	const dispatch = createEventDispatcher();

	const { smallLogoSrc, textColorClass, isMobileMenuOpen } = navbarStore;

	let openSubMenu: string | null = null;

	function handleSubMenuToggle(subMenu: string) {
		openSubMenu = openSubMenu === subMenu ? null : subMenu;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen.update((n) => !n);
	}
</script>

<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 p-6">
	<a href="/" class="flex items-center gap-4">
		<img src={$smallLogoSrc} alt="Rinkai Logo" width="835" height="128" class="h-8 w-full" />
	</a>
	<button on:click={toggleMobileMenu} class={`${$textColorClass}`} aria-label="Open mobile menu">
		<Menu />
	</button>
</div>

<div
	class={`fixed top-0 left-0 z-40 h-full w-full transform bg-neutral-50 text-neutral-800 transition-transform duration-300 ease-in-out ${$isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
	<div class="flex h-full flex-col">
		<div class="flex items-center justify-between border-b border-neutral-200 p-6">
			<img src={$smallLogoSrc} alt="Rinkai Logo" width="835" height="128" class="h-8 w-fit" />
			<button on:click={toggleMobileMenu} aria-label="Close mobile menu">
				<X />
			</button>
		</div>

		<div class="flex flex-col gap-4 p-6 text-lg">
			{#each menuConfig.mainNav as item}
				<div>
					{#if item.megaMenu}
						<button
							class="link-underline flex w-full items-center justify-between text-left"
							on:click={() => handleSubMenuToggle(item.megaMenu ?? '')}
							aria-expanded={openSubMenu === item.megaMenu}
							aria-controls={item.megaMenu ? `submenu-${item.megaMenu}` : undefined}
							aria-label={item.megaMenu ? `Toggle ${item.title} submenu` : undefined}
						>
							<span>{item.title}</span>
							<ChevronDown
								class={`h-5 w-5 transition-transform ${openSubMenu === item.megaMenu ? 'rotate-180' : ''}`}
							/>
						</button>
					{:else}
						<a href={item.href} class="link-underline" on:click={toggleMobileMenu}>
							{item.title}
						</a>
					{/if}
					{#if item.megaMenu && openSubMenu === item.megaMenu}
						<SubMenu
							{item}
							on:toggleMobileMenu={toggleMobileMenu}
							id={`submenu-${item.megaMenu}`}
						/>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-auto border-t border-neutral-200 p-6">
			<div class="mb-6 flex items-center justify-center gap-8">
				<a
					href="/status"
					class="link-underline"
					on:click={toggleMobileMenu}
					aria-label="Instagram profile"
				>
					<Instagram />
				</a>
				<a
					href="/about"
					class="link-underline"
					on:click={toggleMobileMenu}
					aria-label="Contact us via email"
				>
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
