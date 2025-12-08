<script>
	import HalfBanner from '$lib/components/layout/HalfBanner.svelte';

	const siteUrl = 'https://rinkai.co';
	const pageTitle = 'Services – Rinkai Industries';
	const pageDescription =
		'Explore our comprehensive business solutions including digital transformation, business intelligence dashboards, and supply chain optimization.';
	const ogImage = `${siteUrl}/og-img.webp`;
	const pageUrl = `${siteUrl}/services`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Rinkai Industries Services" />

	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<HalfBanner
	title="Solutions for Business"
	description="สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น"
	imageSrc="/images/img_7557.webp"
	href="/"
	buttonText="ดูเพิ่มเติม"
/>
