<script lang="ts">
	import type { BannerSlide } from '$lib/types';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, Pagination } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';

	interface Props {
		// Single slide mode (backward compatible)
		title?: string;
		description?: string;
		imageSrc?: string;
		href?: string;
		buttonText?: string;
		// Multi-slide mode
		slides?: BannerSlide[];
		// Options
		autoPlay?: boolean;
		interval?: number;
	}

	let {
		title,
		description,
		imageSrc,
		href,
		buttonText,
		slides = [],
		autoPlay = false,
		interval = 5000
	}: Props = $props();

	// Convert single slide props to slides array if no slides provided
	const allSlides = $derived.by<BannerSlide[]>(() => {
		if (slides.length > 0) return slides;
		if (title && description && imageSrc && href && buttonText) {
			return [{ id: 1, title, description, imageSrc, href, buttonText }];
		}
		return [];
	});

	let swiperContainer: HTMLElement;
	let swiper: Swiper | null = null;

	onMount(() => {
		swiper = new Swiper(swiperContainer, {
			modules: [Autoplay, Pagination],
			loop: allSlides.length > 1,
			autoplay: autoPlay
				? {
						delay: interval,
						disableOnInteraction: false
					}
				: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		});

		return () => {
			if (swiper) {
				swiper.destroy();
			}
		};
	});
</script>

<div bind:this={swiperContainer} class="swiper relative h-[500px] w-full overflow-hidden font-ibm">
	<div class="swiper-wrapper">
		{#each allSlides as slide (slide.id)}
			<div class="swiper-slide relative">
				<!-- Background Image -->
				<img
					width="1200"
					height="900"
					loading="lazy"
					decoding="async"
					fetchpriority={slide.id === allSlides[0]?.id ? 'high' : 'low'}
					src={slide.imageSrc}
					alt={slide.title}
					class="absolute inset-0 h-full w-full object-cover brightness-50"
				/>

				<!-- Content -->
				<div class="relative z-10 flex h-full flex-col justify-end">
					<div class="mx-auto w-full max-w-7xl p-6 pb-6">
						<div class="max-w-3xl">
							<h1 class="mb-2 text-3xl font-medium text-white md:text-5xl">{slide.title}</h1>
							<p class="mb-4 line-clamp-2 text-white/80">{slide.description}</p>
							<a
								href={slide.href}
								class="flex w-fit items-center rounded-full bg-white px-4 py-2 font-medium text-stone-800"
							>
								{slide.buttonText}
							</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Pagination -->
	{#if allSlides.length > 1}
		<div class="swiper-pagination"></div>
	{/if}
</div>

<style>
	.swiper-pagination {
		position: absolute;
		bottom: 1.5rem;
		right: 1.5rem;
		left: auto;
		width: auto;
		display: flex;
		align-items: center;
		gap: 0.375rem;
		z-index: 20;
	}

	.swiper-pagination :global(.swiper-pagination-bullet) {
		width: 1.5rem;
		height: 0.125rem;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.3);
		opacity: 1;
		margin: 0 !important;
	}

	.swiper-pagination :global(.swiper-pagination-bullet-active) {
		background: white;
	}
</style>
