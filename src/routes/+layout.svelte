<script lang="ts">
	import '../app.css';
	import { Navbar } from '$lib/components/navbar';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Default meta tags (can be overridden by child pages) -->
	<meta name="robots" content="index, follow" />
	<meta property="og:site_name" content="Rinkai Industries" />
	<meta property="og:type" content="website" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<!-- Favicon -->
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<Navbar />

<main class="overflow-x-hidden">
	{@render children()}
</main>

<Footer />
