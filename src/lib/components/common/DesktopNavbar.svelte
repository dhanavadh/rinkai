<script lang="ts">
	import { navbarStore } from '$lib/stores/navbar';
	import { menuConfig } from '$lib/config/menu';
	import { createEventDispatcher } from 'svelte';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Mail from 'lucide-svelte/icons/mail';

	const dispatch = createEventDispatcher();

	const { largeLogoSrc, textColorClass } = navbarStore;

	function handleMouseOver(megaMenu: string | undefined) {
		if (megaMenu) {
			dispatch('menuHover', megaMenu);
		} else {
			dispatch('menuHover', null);
		}
	}
</script>

<div class="flex w-full flex-col">
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4">
		<a href="/" class="flex items-center gap-4">
			<img src={$largeLogoSrc} alt="Rinkai Logo" width="200" height="38" class="h-8 w-fit" />
		</a>

		<div class={`flex items-center gap-4 ${$textColorClass}`}>
			<a href="/status" class="link-underline" aria-label="Instagram profile">
				<Instagram />
			</a>

			<a href="/about" class="link-underline" aria-label="Contact us via email">
				<Mail />
			</a>
		</div>
	</div>

	<div
		class="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4 font-medium"
	>
		<div class={`flex items-center gap-8 ${$textColorClass}`}>
			{#each menuConfig.mainNav as item}
				<a
					href={item.href}
					class="link-underline flex items-center gap-1"
					on:mouseover={() => handleMouseOver(item.megaMenu)}
					on:focus={() => handleMouseOver(item.megaMenu)}
				>
					{item.title}
					{#if item.megaMenu}
						<ChevronDown class="h-4 w-4" />
					{/if}
				</a>
			{/each}
		</div>

		<div class={`flex items-center gap-4 ${$textColorClass}`}>
			<a href="/services" class="link-underline"> Services </a>

			<a href="/status" class="link-underline"> Status </a>

			<a href="/about" class="link-underline"> About Us </a>
		</div>
	</div>
</div>
