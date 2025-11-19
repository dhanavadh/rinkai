<script lang="ts">
	import '../app.css';
	import DevNavbar from '$lib/components/common/DevNavbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rinkai Studio – Empowering your business with Rinkai</title>
	<meta
		name="description"
		content="Rinkai Studio is dedicated to providing innovative solutions for your business needs."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://beta.rinkai.co" />

	<!-- OpenGraph -->
	<meta property="og:title" content="Rinkai Studio – Empowering your business with Rinkai" />
	<meta
		property="og:description"
		content="Rinkai Studio is dedicated to providing innovative solutions for your business needs."
	/>
	<meta property="og:url" content="https://beta.rinkai.co" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://beta.rinkai.co/og-img.webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Rinkai Studio" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Rinkai Studio – Empowering your business with Rinkai" />
	<meta
		name="twitter:description"
		content="Rinkai Studio is dedicated to providing innovative solutions for your business needs."
	/>
	<meta name="twitter:image" content="https://beta.rinkai.co/og-img.webp" />

	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<DevNavbar />

<main>
	{@render children()}
</main>

<Footer />
