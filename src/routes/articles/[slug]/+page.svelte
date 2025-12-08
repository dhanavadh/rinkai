<script lang="ts">
	import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';
	import type { ArticleType } from '$lib/types';
	import Section from '$lib/components/layout/Section.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { article, Content, relatedArticles } = data;

	const siteUrl = 'https://rinkai.co';
	const pageTitle = `${article.title} – Rinkai Industries`;
	const pageDescription = article.abstract;
	const ogImage = article.heroImage.startsWith('http')
		? article.heroImage
		: `${siteUrl}${article.heroImage}`;
	const pageUrl = `${siteUrl}/articles/${article.slug}`;

	function getTypeLabel(type: ArticleType): string {
		const labels: Record<ArticleType, string> = {
			research: 'Research',
			usecase: 'Use Case',
			other: 'Other'
		};
		return labels[type];
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={article.title} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={article.date} />
	<meta property="article:author" content={article.authors.join(', ')} />

	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex w-full flex-col font-ibm">
	<!-- Banner Image -->
	<div class="h-48 w-full overflow-hidden md:h-64">
		<img
			src={article.heroImage}
			alt={article.title}
			class="h-full w-full object-cover"
		/>
	</div>

	<!-- Article Section -->
	<Section gap={false}>
		<div class="col-span-12 lg:col-span-8 lg:col-start-3">
			<!-- Breadcrumb -->
			<nav class="mb-6 flex shrink-0 items-center gap-2 text-sm">
				<a href="/articles" class="shrink-0 text-stone-600 transition-colors hover:text-stone-900">All Articles</a>
				<span class="shrink-0 text-stone-400">›</span>
				<span class="shrink-0 font-medium text-stone-600">{getTypeLabel(article.type)}</span>
			</nav>

			<!-- Title -->
			<h1 class="mb-2 text-3xl font-bold text-stone-900 md:text-4xl">
				{article.title}
			</h1>

			<!-- Updated date -->
			<p class="mb-6 text-sm text-stone-400">{article.date}</p>

			<!-- Abstract/Description -->
			<p class="mb-6 font-ibm-looped text-base leading-relaxed text-stone-600">
				{article.abstract}
			</p>

			<!-- Article Body from MDX -->
			<article class="prose-article">
				<Content />
			</article>
		</div>
	</Section>

	<!-- Related Articles -->
	{#if relatedArticles.length > 0}
		<Section>
			<div class="col-span-12">
				<h2 class="mb-6 text-2xl font-medium text-stone-800">Related Articles</h2>
				<div class="grid gap-4 md:grid-cols-3">
					{#each relatedArticles as related}
						<a
							href="/articles/{related.slug}"
							class="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-sm"
						>
							<!-- Type Badge -->
							<div class="mb-4 flex items-center gap-2">
								<span
									class="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
								>
									{getTypeLabel(related.type)}
								</span>
								{#if related.hasFullAccess}
									<span
										class="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
									>
										Full Access
									</span>
								{/if}
							</div>

							<!-- Title -->
							<h3
								class="mb-3 line-clamp-2 text-lg font-medium text-stone-800 group-hover:text-stone-600"
							>
								{related.title}
							</h3>

							<!-- Journal -->
							<p class="mb-2 text-sm text-stone-500">
								{related.journal}
							</p>

							<!-- Meta -->
							<div class="mt-auto flex items-end justify-between pt-4">
								<div>
									<p class="text-xs text-stone-400">{related.date}</p>
									<p class="mt-1 line-clamp-1 text-xs text-stone-500">
										{related.authors.slice(0, 2).join(', ')}{related.authors.length > 2
											? ' ...'
											: ''}
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
	{/if}

	<!-- Spacer -->
	<div class="h-24"></div>
</div>

<style>
	.prose-article :global(p) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
		font-size: 1.125rem;
		line-height: 1.8;
		color: #44403c;
		margin-bottom: 1.5rem;
	}

	.prose-article :global(h2) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
		color: #1c1917;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	.prose-article :global(h3) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
		font-size: 1.25rem;
		font-weight: 500;
		color: #1c1917;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	.prose-article :global(ul),
	.prose-article :global(ol) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
		font-size: 1.125rem;
		line-height: 1.8;
		color: #44403c;
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}

	.prose-article :global(li) {
		margin-bottom: 0.5rem;
	}

	.prose-article :global(blockquote) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
		border-left: 3px solid #d6d3d1;
		padding-left: 1.5rem;
		margin: 2rem 0;
		font-style: italic;
		color: #57534e;
	}

	.prose-article :global(a) {
		color: #1c1917;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.prose-article :global(a:hover) {
		color: #57534e;
	}

	.prose-article :global(strong) {
		font-weight: 600;
		color: #1c1917;
	}

	.prose-article :global(code) {
		background-color: #f5f5f4;
		padding: 0.125rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	.prose-article :global(pre) {
		background-color: #1c1917;
		color: #f5f5f4;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	.prose-article :global(pre code) {
		background-color: transparent;
		padding: 0;
	}
</style>
