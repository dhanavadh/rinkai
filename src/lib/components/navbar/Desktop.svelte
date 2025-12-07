<script lang="ts">
	import { menuConfig } from '$lib/config/menu';
	import { logoSrc, textColorClass } from './store';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Mail from 'lucide-svelte/icons/mail';

	interface Props {
		onMenuHover: (menu: string | null) => void;
	}

	let { onMenuHover }: Props = $props();
</script>

<div class="flex w-full flex-col">
	<!-- Top Bar: Logo + Social -->
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4">
		<a href="/">
			<img src={$logoSrc} alt="Rinkai Logo" width="200" height="38" class="h-8 w-fit" />
		</a>

		<div class="flex items-center gap-4 {$textColorClass}">
			<a href="/status" class="link-underline" aria-label="Instagram">
				<Instagram />
			</a>
			<a href="/about" class="link-underline" aria-label="Contact">
				<Mail />
			</a>
		</div>
	</div>

	<!-- Main Nav -->
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4 font-medium">
		<div class="flex items-center gap-8 {$textColorClass}">
			{#each menuConfig.mainNav as item}
				<a
					href={item.href}
					class="link-underline flex items-center gap-1"
					onmouseover={() => onMenuHover(item.megaMenu ?? null)}
					onfocus={() => onMenuHover(item.megaMenu ?? null)}
				>
					{item.title}
					{#if item.megaMenu}
						<ChevronDown class="h-4 w-4" />
					{/if}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-4 {$textColorClass}">
			<a href="/services" class="link-underline">Console</a>
			<a href="/status" class="link-underline">Status</a>
		</div>
	</div>
</div>
