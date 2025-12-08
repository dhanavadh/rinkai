<script lang="ts">
	import type { BannerSlide } from '$lib/types';

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

	let currentIndex = $state(0);
	let intervalId: ReturnType<typeof setInterval> | null = null;
	let progressId: ReturnType<typeof setInterval> | null = null;
	let progress = $state(0);
	let startX = $state(0);
	let endX = $state(0);
	let isDragging = $state(false);

	const isMultiSlide = $derived(allSlides.length > 1);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % allSlides.length;
		progress = 0;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
		progress = 0;
	}

	function goToSlide(index: number) {
		currentIndex = index;
		progress = 0;
	}

	function handleStart(x: number) {
		startX = x;
		isDragging = true;
	}

	function handleMove(x: number) {
		if (isDragging) {
			endX = x;
		}
	}

	function handleEnd() {
		if (!isDragging) return;
		isDragging = false;

		const diff = startX - endX;
		const threshold = 50;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}
	}

	function handleTouchStart(e: TouchEvent) {
		handleStart(e.touches[0].clientX);
	}

	function handleTouchMove(e: TouchEvent) {
		handleMove(e.touches[0].clientX);
	}

	function handleMouseDown(e: MouseEvent) {
		handleStart(e.clientX);
	}

	function handleMouseMove(e: MouseEvent) {
		handleMove(e.clientX);
	}

	$effect(() => {
		if (autoPlay && isMultiSlide) {
			const progressStep = 100 / (interval / 50);
			progressId = setInterval(() => {
				progress += progressStep;
				if (progress >= 100) {
					progress = 0;
				}
			}, 50);

			intervalId = setInterval(nextSlide, interval);

			return () => {
				if (intervalId) clearInterval(intervalId);
				if (progressId) clearInterval(progressId);
			};
		}
	});
</script>

<div
	class="relative h-[500px] w-full cursor-grab overflow-hidden font-ibm active:cursor-grabbing"
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleEnd}
	onmousedown={handleMouseDown}
	onmousemove={handleMouseMove}
	onmouseup={handleEnd}
	onmouseleave={handleEnd}
	role="region"
	aria-label="Image slider"
>
	<!-- Slides -->
	{#each allSlides as slide, index (slide.id)}
		<a
			href={slide.href}
			class="absolute inset-0 {index === currentIndex ? 'z-10' : 'z-0 hidden'}"
		>
			<!-- Background Image -->
			<img
				width="1920"
				height="1080"
				sizes="100vw"
				src={slide.imageSrc}
				alt={slide.title}
				class="absolute inset-0 h-full w-full object-cover brightness-50"
				fetchpriority={index === 0 ? 'high' : 'low'}
			/>

			<!-- Content -->
			<div class="relative z-10 flex h-full flex-col justify-end">
				<div class="mx-auto w-full max-w-7xl p-6">
					<section class="flex w-full flex-col gap-4">
						<span class="text-white">
							<h1 class="mb-2 text-5xl">{slide.title}</h1>
							<p class="text-lg">{slide.description}</p>
						</span>
					</section>
				</div>
			</div>
		</a>
	{/each}

	<!-- Progress Bar -->
	{#if isMultiSlide}
		<div class="absolute bottom-6 right-6 z-20 flex items-center gap-1.5">
			{#each allSlides as _, i}
				<button
					onclick={() => goToSlide(i)}
					class="relative h-0.5 w-6 overflow-hidden rounded-full bg-white/30"
					aria-label="Go to slide {i + 1}"
				>
					{#if i === currentIndex && autoPlay}
						<div
							class="absolute left-0 top-0 h-full bg-white"
							style="width: {progress}%"
						></div>
					{:else if i < currentIndex}
						<div class="absolute left-0 top-0 h-full w-full bg-white"></div>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
