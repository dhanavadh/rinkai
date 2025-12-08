<script lang="ts">
	import { menuConfig } from '$lib/config/menu';
	import { getIcon } from '$lib/utils/icons';
	import type { NavItem } from '$lib/types';

	interface Props {
		item: NavItem;
		onLinkClick: () => void;
	}

	let { item, onLinkClick }: Props = $props();
</script>

{#if item.megaMenu}
	<div class="flex flex-col gap-4 pt-4 pl-4">
		{#each menuConfig.megaMenus[item.megaMenu].columns as column}
			<div>
				<h3 class="mb-2 font-medium">{column.title}</h3>
				<ul class="space-y-2">
					{#each column.links as link}
						<li>
							<a
								href={link.href}
								class="link-underline flex items-start gap-2 text-base"
								onclick={onLinkClick}
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
