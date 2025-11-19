<script lang="ts">
	import { menuConfig } from '$lib/config/menu';
	import { createEventDispatcher } from 'svelte';
	import type { NavItem } from '$lib/types';
	import { getIcon } from '$lib/icons';

	export let item: NavItem;
	export let id: string;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('toggleMobileMenu');
	}
</script>

{#if item.megaMenu}
	<div {id} class="flex flex-col gap-4 pt-4 pl-4">
		{#each menuConfig.megaMenus[item.megaMenu].columns as column}
			<div>
				<h3 class="mb-2 font-medium">{column.title}</h3>
				<ul class="space-y-2">
					{#each column.links as link}
						<li>
							<a
								href={link.href}
								class="link-underline flex items-start gap-2 text-base"
								on:click={handleClick}
							>
								<svelte:component this={getIcon(link.icon)} class="h-5 w-5 text-neutral-500" />
								<span>{link.title}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
{/if}
