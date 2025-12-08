<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-svelte';
	import type { SliderItem } from '$lib/types';

	const {
		sectionTitle,
		sectionSubtitle,
		items = []
	} = $props<{
		sectionTitle: string;
		sectionSubtitle: string;
		items?: SliderItem[];
	}>();

	let scrollContainerRef: HTMLElement | null = $state(null);
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	const checkScroll = () => {
		if (scrollContainerRef) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef;
			canScrollLeft = scrollLeft > 0;
			canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
		}
	};

	onMount(() => {
		checkScroll();
		if (scrollContainerRef) {
			scrollContainerRef.addEventListener('scroll', checkScroll);
			return () => scrollContainerRef?.removeEventListener('scroll', checkScroll);
		}
	});

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef) {
			const scrollAmount = 320;
			scrollContainerRef.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth'
			});
		}
	};
</script>

<div class="mx-auto w-full max-w-7xl">
	<div class="flex flex-col items-center justify-center gap-6">
		<span class="flex w-full items-start justify-between" id="product">
			<div>
				<p class="text-neutral-600">{sectionSubtitle}</p>
				<h2 class="mt-1 mb-2 text-4xl leading-tight text-neutral-900">
					{sectionTitle}
				</h2>
			</div>
			<a href="/" class="text-start text-base text-neutral-500">ดูทั้งหมด</a>
		</span>

		<div class="relative w-full">
			<button
				onclick={() => scroll('left')}
				disabled={!canScrollLeft}
				class="absolute top-48 -left-6 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 shadow-xl transition-all hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-0"
				aria-label="Previous item"
			>
				<ArrowLeft class="h-5 w-5" />
			</button>

			<section
				bind:this={scrollContainerRef}
				class="no-scrollbar flex w-full items-start gap-6 overflow-x-auto"
			>
				{#each items as item (item.id)}
					<div class="w-76 shrink-0" id="product-{item.id}">
						<div class="relative mb-4 h-96 w-76 overflow-hidden rounded-sm">
							<img src={item.imageUrl} alt={item.title} class="h-full w-full object-cover" />
						</div>
						<p class="font-semibold text-neutral-700">{item.title}</p>
						<p class="mb-2 text-sm text-neutral-400">
							{item.description}
						</p>
						<a href={item.linkUrl} class="text-sm font-medium text-neutral-600">
							ดูรายละเอียด
							<ArrowUpRight class="ml-1 inline-block h-4 w-4" />
						</a>
					</div>
				{/each}
			</section>

			<button
				onclick={() => scroll('right')}
				disabled={!canScrollRight}
				class="absolute top-48 -right-6 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 shadow-xl transition-all hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-0"
				aria-label="Next item"
			>
				<ArrowRight class="h-5 w-5" />
			</button>
		</div>
	</div>
</div>
