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
				<h2 class="text-section-title">
					{sectionTitle}
				</h2>
				<p class="text-section-subtitle mt-1">{sectionSubtitle}</p>
			</div>
			<a href="/" class="link">ดูทั้งหมด</a>
		</span>

		<div class="relative w-full">
			<button
				onclick={() => scroll('left')}
				disabled={!canScrollLeft}
				class="absolute top-32 left-2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 shadow-xl transition-all hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-0 md:top-48 md:flex md:h-12 md:w-12"
				aria-label="Previous item"
			>
				<ArrowLeft class="h-5 w-5" />
			</button>

			<section
				bind:this={scrollContainerRef}
				class="no-scrollbar flex w-full items-start gap-4 overflow-x-auto md:gap-6"
			>
				{#each items as item (item.id)}
					<div class="w-52 shrink-0 md:w-76" id="product-{item.id}">
						<div class="relative mb-4 h-64 w-52 overflow-hidden rounded-sm md:h-96 md:w-76">
							<img
								src={item.imageUrl}
								alt={item.title}
								width="800"
								height="600"
								loading="lazy"
								decoding="async"
								class="h-full w-full object-cover"
							/>
						</div>
						<p class="text-card-title">{item.title}</p>
						<p class="text-card-desc mb-2">
							{item.description}
						</p>
						<a href={item.linkUrl} class="link-arrow">
							ดูรายละเอียด
							<ArrowUpRight class="h-4 w-4" />
						</a>
					</div>
				{/each}
			</section>

			<button
				onclick={() => scroll('right')}
				disabled={!canScrollRight}
				class="absolute top-32 right-2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 shadow-xl transition-all hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-0 md:top-48 md:flex md:h-12 md:w-12"
				aria-label="Next item"
			>
				<ArrowRight class="h-5 w-5" />
			</button>
		</div>
	</div>
</div>
