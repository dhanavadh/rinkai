<script lang="ts">
	import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';
	import type { ArticleType } from '$lib/types';
	import Section from '$lib/components/layout/Section.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { article, Content, relatedArticles } = data;

	function getTypeLabel(type: ArticleType): string {
		const labels: Record<ArticleType, string> = {
			research: 'Research',
			review: 'Review',
			'book-chapter': 'Book Chapter',
			conference: 'Conference'
		};
		return labels[type];
	}
</script>

<div class="flex w-full flex-col font-ibm">
	<!-- Hero Section -->
	<div class="relative h-[400px] w-full overflow-hidden md:h-[500px]">
		<img
			src={article.heroImage}
			alt={article.title}
			class="absolute inset-0 h-full w-full object-cover brightness-50"
		/>
		<div class="relative z-10 flex h-full flex-col justify-end">
			<div class="mx-auto w-full max-w-7xl p-6">
				<div class="max-w-3xl">
					<!-- Category Badge -->
					<span
						class="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
					>
						{getTypeLabel(article.type)}
					</span>

					<!-- Title -->
					<h1 class="mb-4 text-3xl font-medium text-white md:text-5xl">
						{article.title}
					</h1>

					<!-- Meta -->
					<div class="flex flex-wrap items-center gap-4 text-white/80">
						<span>{article.date}</span>
						<span class="hidden md:inline">•</span>
						<span class="hidden md:inline">{article.journal}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Back Link -->
	<Section>
		<div class="col-span-12 lg:col-span-8 lg:col-start-3">
			<a
				href="/articles"
				class="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-800"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to Articles
			</a>
		</div>
	</Section>

	<!-- Article Content -->
	<Section gap={false}>
		<div class="col-span-12 lg:col-span-8 lg:col-start-3">
			<!-- Abstract -->
			<div class="mb-12 border-b border-stone-200 pb-12">
				<h2 class="mb-4 text-lg font-medium text-stone-800">Abstract</h2>
				<p class="font-ibm-looped text-lg leading-relaxed text-stone-600">
					{article.abstract}
				</p>
			</div>

			<!-- Article Body from MDX -->
			<article class="prose-article">
				<Content />
			</article>

			<!-- Tags / Access -->
			<div class="mt-12 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-8">
				<span class="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">
					{getTypeLabel(article.type)}
				</span>
				{#if article.hasFullAccess}
					<span class="rounded-full bg-green-50 px-3 py-1 text-sm text-green-700">
						Full Access
					</span>
				{:else}
					<span class="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-700">
						Limited Access
					</span>
				{/if}
			</div>

			<!-- Authors -->
			<div class="mt-8 border-t border-stone-200 pt-8">
				<p class="mb-2 text-sm font-medium text-stone-500">Authors</p>
				<p class="text-stone-800">{article.authors.join(', ')}</p>
			</div>
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
