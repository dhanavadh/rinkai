<script lang="ts">
	import '../app.css';
	import DevNavbar from '$lib/components/common/DevNavbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<DevNavbar />

{@render children()}

<Footer />
