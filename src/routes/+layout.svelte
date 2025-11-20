<script lang="ts">
	import '../app.css';
	import DevNavbar from '$lib/components/common/DevNavbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rinkai Industries – Make life easier</title>
	<meta
		name="description"
		content="Rinkai Industries is dedicated to providing innovative solutions for your business needs."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://rinkai.co" />

	<!-- OpenGraph -->
	<meta property="og:title" content="Rinkai Industries – Rinkai Industries – Make life easier" />
	<meta
		property="og:description"
		content="Rinkai Industries is dedicated to providing innovative solutions for your business needs."
	/>
	<meta property="og:url" content="https://rinkai.co" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://rinkai.co/og-img.webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Rinkai Studio" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Rinkai Industries – Rinkai Industries – Make life easier" />
	<meta
		name="twitter:description"
		content="Rinkai Industries is dedicated to providing innovative solutions for your business needs."
	/>
	<meta name="twitter:image" content="https://beta.rinkai.co/og-img.webp" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
		rel="stylesheet"
	/>

	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<DevNavbar />

<main>
	{@render children()}
</main>

<Footer />
