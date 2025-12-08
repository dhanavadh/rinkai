<script lang="ts">
	import { Search, ArrowUpRight } from 'lucide-svelte';
	import type { ArticleType, BannerSlide } from '$lib/types';
	import Section from '$lib/components/layout/Section.svelte';
	import HalfBanner from '$lib/components/layout/HalfBanner.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const siteUrl = 'https://rinkai.co';
	const pageTitle = 'Articles – Rinkai Industries';
	const pageDescription =
		'Research, use cases, and insights on digital transformation, business intelligence, and industry best practices from Rinkai Industries.';
	const ogImage = `${siteUrl}/og-img.webp`;
	const pageUrl = `${siteUrl}/articles`;

	let searchQuery = $state('');
	let selectedType = $state<ArticleType | 'all'>('all');

	// Convert latest articles to banner slides
	const bannerSlides: BannerSlide[] = data.articles.slice(0, 5).map((article) => ({
		id: article.slug,
		title: article.title,
		description: article.abstract,
		imageSrc: article.heroImage,
		href: `/articles/${article.slug}`,
		buttonText: 'Read More'
	}));

	const categories: { value: ArticleType | 'all'; label: string }[] = [
		{ value: 'all', label: 'All' },
		{ value: 'research', label: 'Research' },
		{ value: 'usecase', label: 'Use Case' },
		{ value: 'other', label: 'Other' }
	];

	function getTypeLabel(type: ArticleType): string {
		const labels: Record<ArticleType, string> = {
			research: 'Research',
			usecase: 'Use Case',
			other: 'Other'
		};
		return labels[type];
	}

	const filteredArticles = $derived.by(() => {
		let result = data.articles;

		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(article) =>
					article.title.toLowerCase().includes(query) ||
					article.authors.some((author) => author.toLowerCase().includes(query)) ||
					article.journal.toLowerCase().includes(query)
			);
		}

		if (selectedType !== 'all') {
			result = result.filter((article) => article.type === selectedType);
		}

		return result;
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Rinkai Industries Articles" />

	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex w-full flex-col font-ibm">
	<!-- Hero Section -->
	<HalfBanner slides={bannerSlides} autoPlay />

	<!-- Search & Filter -->
	<Section>
		<div class="col-span-12">
			<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<!-- Search -->
				<div class="relative w-full max-w-md">
					<Search class="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-stone-400" />
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search articles..."
						class="w-full rounded-full border border-stone-200 bg-white py-3 pr-4 pl-11 text-sm text-stone-800 placeholder-stone-400 transition-colors focus:border-stone-400 focus:outline-none"
					/>
				</div>

				<!-- Category Pills -->
				<div class="flex flex-wrap gap-2">
					{#each categories as category}
						<button
							onclick={() => (selectedType = category.value)}
							class="rounded-full px-4 py-2 text-sm transition-colors {selectedType ===
							category.value
								? 'bg-stone-800 text-white'
								: 'bg-stone-100 text-stone-600 hover:bg-stone-200'}"
						>
							{category.label}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</Section>

	<!-- Results Count -->
	<Section gap={false}>
		<div class="col-span-12 mb-2">
			<p class="text-sm text-stone-500">{filteredArticles.length} articles</p>
		</div>
	</Section>

	<!-- Articles Grid -->
	<Section>
		<div class="col-span-12">
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredArticles as article}
					<a
						href="/articles/{article.slug}"
						class="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-sm"
					>
						<!-- Type Badge -->
						<div class="mb-4 flex items-center gap-2">
							<span class="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
								{getTypeLabel(article.type)}
							</span>
							{#if article.hasFullAccess}
								<span class="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
									Full Access
								</span>
							{/if}
						</div>

						<!-- Title -->
						<h3
							class="mb-3 line-clamp-2 text-lg font-medium text-stone-800 group-hover:text-stone-600"
						>
							{article.title}
						</h3>

						<!-- Journal -->
						<p class="mb-2 text-sm text-stone-500">
							{article.journal}
						</p>

						<!-- Meta -->
						<div class="mt-auto flex items-end justify-between pt-4">
							<div>
								<p class="text-xs text-stone-400">{article.date}</p>
								<p class="mt-1 line-clamp-1 text-xs text-stone-500">
									{article.authors.slice(0, 2).join(', ')}{article.authors.length > 2 ? ' ...' : ''}
								</p>
							</div>
							<ArrowUpRight
								class="h-5 w-5 text-stone-300 transition-colors group-hover:text-stone-600"
							/>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</Section>

	<!-- Empty State -->
	{#if filteredArticles.length === 0}
		<Section>
			<div class="col-span-12 py-16 text-center">
				<p class="text-lg text-stone-500">No articles found</p>
				<button
					onclick={() => {
						searchQuery = '';
						selectedType = 'all';
					}}
					class="mt-4 rounded-full bg-stone-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700"
				>
					Clear filters
				</button>
			</div>
		</Section>
	{/if}

	<!-- Spacer -->
	<div class="h-24"></div>
</div>
