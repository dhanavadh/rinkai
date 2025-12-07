<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		size?: number;
		duration?: number;
		class?: string;
	}

	let { size = 64, duration = 3000, class: className = '' }: Props = $props();

	// F1 -> F7 -> F1 (ping-pong)
	const frames = [
		'/icon-load/F1.svg',
		'/icon-load/F2.svg',
		'/icon-load/F3.svg',
		'/icon-load/F4.svg',
		'/icon-load/F5.svg',
		'/icon-load/F6.svg',
		'/icon-load/F7.svg',
		'/icon-load/F6.svg',
		'/icon-load/F5.svg',
		'/icon-load/F4.svg',
		'/icon-load/F3.svg',
		'/icon-load/F2.svg'
	];

	let currentFrame = $state(0);

	onMount(() => {
		// Preload all images
		frames.forEach((src) => {
			const img = new Image();
			img.src = src;
		});

		const frameDelay = duration / frames.length;
		const interval = setInterval(() => {
			currentFrame = (currentFrame + 1) % frames.length;
		}, frameDelay);

		return () => clearInterval(interval);
	});
</script>

<div
	class="inline-flex items-center justify-center {className}"
	style="width: {size}px; height: {size}px;"
>
	{#key currentFrame}
		<img src={frames[currentFrame]} alt="" class="h-full w-full object-contain" />
	{/key}
</div>
