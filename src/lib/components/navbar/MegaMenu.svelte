<script lang="ts">
	import { chunk } from '$lib/utils/chunk';
	import { getIcon } from '$lib/utils/icons';
	import type { MegaMenu as MegaMenuType } from '$lib/types';

	interface Props {
		menu: MegaMenuType | null;
	}

	let { menu }: Props = $props();

	const isOpen = $derived(!!menu);
</script>

{#if isOpen && menu}
	<div
		class="absolute top-full left-0 flex w-full rounded-b-lg bg-stone-50 p-8 text-neutral-800 shadow-sm transition-opacity duration-300 ease-in-out {isOpen
			? 'opacity-100'
			: 'pointer-events-none opacity-0'}"
	>
		<div class="mx-auto flex w-full max-w-7xl items-start justify-between gap-2 px-6">
			<!-- Links Grid -->
			<div class="grid w-1/2 grid-cols-2 gap-4">
				{#each menu.columns as column}
					<div>
						<h3 class="mb-4 text-lg font-bold">{column.title}</h3>
						<div class="flex gap-6">
							{#each chunk(column.links, 5) as linkChunk}
								<ul class="space-y-4">
									{#each linkChunk as link}
										<li>
											<a href={link.href} class="flex items-start gap-4">
												<svelte:component
													this={getIcon(link.icon)}
													class="h-6 w-6 text-neutral-500"
												/>
												<div>
													<p class="link-underline font-semibold">{link.title}</p>
													<p class="text-sm text-neutral-500">{link.description}</p>
												</div>
											</a>
										</li>
									{/each}
								</ul>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<!-- Banner -->
			<div class="h-full w-1/2">
				{#each menu.banner as bannerItem}
					<div class="group relative block h-full w-full overflow-hidden rounded-lg">
						<div class="relative flex h-full min-h-[300px]">
							<div class="mx-auto flex w-full max-w-7xl items-end">
								<section class="z-10 flex flex-col gap-4 p-6">
									<div>
										<p class="mb-2 text-xl text-white">{bannerItem.title}</p>
										<p class="text-lg text-white">{bannerItem.description}</p>
									</div>
									<a
										href={bannerItem.href}
										class="flex w-fit items-center rounded-full bg-white px-4 py-2 font-medium"
									>
										ดูเพิ่มเติม
									</a>
								</section>
							</div>
							<img
								src={bannerItem.imageSrc}
								alt={bannerItem.title}
								class="absolute h-full w-full object-cover brightness-70"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
