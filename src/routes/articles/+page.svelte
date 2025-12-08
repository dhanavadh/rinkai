<script lang="ts">
	import { Search, ArrowUpRight } from 'lucide-svelte';
	import type { Article, ArticleType, BannerSlide } from '$lib/types';
	import Section from '$lib/components/layout/Section.svelte';
	import HalfBanner from '$lib/components/layout/HalfBanner.svelte';

	let searchQuery = $state('');
	let selectedType = $state<ArticleType | 'all'>('all');

	const bannerSlides: BannerSlide[] = [
		{
			id: 1,
			title: 'Articles',
			description: 'Explore our collection of articles, research papers, and insights',
			imageSrc: '/brands/iconv-1.webp',
			href: '/articles',
			buttonText: 'Browse All'
		},
		{
			id: 2,
			title: 'Research Papers',
			description: 'Deep dive into our latest research and case studies',
			imageSrc: '/brands/iconv-2.webp',
			href: '/articles?type=research',
			buttonText: 'View Research'
		},
		{
			id: 3,
			title: 'Industry Insights',
			description: 'Stay updated with the latest trends and best practices',
			imageSrc: '/brands/iconv-3.webp',
			href: '/articles?type=review',
			buttonText: 'Read More'
		},
		{
			id: 4,
			title: 'Industry Insights',
			description: 'Stay updated with the latest trends and best practices',
			imageSrc: '/brands/iconv-4.webp',
			href: '/articles?type=review',
			buttonText: 'Read More'
		}
	];

	const articles: Article[] = [
		{
			id: 1,
			title: 'Lean production, Toyota Production System and Kaizen philosophy',
			journal: 'The TQM Journal',
			date: '10 April 2018',
			authors: ['Andrea Chiarini', 'Claudio Baccarani', 'Vittorio Mascherpa'],
			type: 'research',
			hasFullAccess: false,
			href: '/articles/1'
		},
		{
			id: 2,
			title: 'Report of 43rd Annual Meeting of the Pacific Association of Pediatric Surgeons',
			journal: 'Journal of Pediatric Surgery',
			date: 'December 2010',
			authors: ['Donald B. Shaul'],
			type: 'review',
			hasFullAccess: true,
			href: '/articles/2'
		},
		{
			id: 3,
			title: 'Life events, philosophy, spirituality and gastronomy experience',
			journal: 'International Journal of Gastronomy and Hospitality Management',
			date: '31 July 2022',
			authors: ['Maria Santos', 'John Williams'],
			type: 'research',
			hasFullAccess: false,
			href: '/articles/3'
		},
		{
			id: 4,
			title: 'Digital Transformation in Modern Business: A Comprehensive Study',
			journal: 'Business Technology Review',
			date: '15 March 2023',
			authors: ['Sarah Johnson', 'Michael Chen', 'Emma Watson'],
			type: 'book-chapter',
			hasFullAccess: true,
			href: '/articles/4'
		},
		{
			id: 5,
			title: 'Advances in Machine Learning for Healthcare Applications',
			journal: 'AI in Medicine Conference',
			date: '8 September 2022',
			authors: ['Dr. James Lee', 'Prof. Anna Kim'],
			type: 'conference',
			hasFullAccess: false,
			href: '/articles/5'
		},
		{
			id: 6,
			title: 'Sustainable Supply Chain Management: Best Practices',
			journal: 'Operations Management Quarterly',
			date: '22 November 2021',
			authors: ['Robert Brown', 'Lisa Garcia'],
			type: 'review',
			hasFullAccess: true,
			href: '/articles/6'
		}
	];

	const categories: { value: ArticleType | 'all'; label: string }[] = [
		{ value: 'all', label: 'All' },
		{ value: 'research', label: 'Research' },
		{ value: 'review', label: 'Review' },
		{ value: 'book-chapter', label: 'Book' },
		{ value: 'conference', label: 'Conference' }
	];

	function getTypeLabel(type: ArticleType): string {
		const labels: Record<ArticleType, string> = {
			research: 'Research',
			review: 'Review',
			'book-chapter': 'Book',
			conference: 'Conference'
		};
		return labels[type];
	}

	const filteredArticles = $derived.by(() => {
		let result = articles;

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
						href={article.href}
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
