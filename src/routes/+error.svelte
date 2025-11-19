<script lang="ts">
	import { page } from '$app/stores';
	import { navbarStore } from '$lib/stores/navbar';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		navbarStore.isErrorPage.set(true);
	});

	onDestroy(() => {
		navbarStore.isErrorPage.set(false);
	});
</script>

<div class="relative flex h-screen w-full font-ibm">
	<div class="mx-auto flex w-full max-w-7xl items-center">
		<section class="z-10 mt-16 flex flex-col gap-4 p-6">
			<span>
				<h1 class="mb-2 text-5xl text-white">{$page.status}</h1>
				<p class="font-mono text-lg text-white">
					The page you are looking for is {$page.error?.message}.
				</p>
			</span>
			<a href="/" class="flex w-fit items-center rounded-full bg-white px-4 py-2 font-medium">
				Go Back
			</a>
		</section>
	</div>
	<img
		width="1920"
		height="1080"
		sizes="100vw"
		src="/images/blog-1.svg"
		alt="error page"
		class="absolute h-full w-full object-cover brightness-70"
		fetchpriority="high"
	/>
</div>
