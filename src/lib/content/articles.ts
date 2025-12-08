import type { ArticleType } from '$lib/types';
import type { Component } from 'svelte';

export interface ArticleMeta {
	title: string;
	slug: string;
	journal: string;
	date: string;
	authors: string[];
	type: ArticleType;
	hasFullAccess: boolean;
	heroImage: string;
	abstract: string;
}

export interface ArticleModule {
	default: Component;
	metadata: ArticleMeta;
}

// Import all MDX files from the articles directory
const articleModules = import.meta.glob<ArticleModule>('/src/content/articles/*.mdx', {
	eager: true
});

// Get all articles metadata
export function getAllArticles(): ArticleMeta[] {
	const articles: ArticleMeta[] = [];

	for (const path in articleModules) {
		const module = articleModules[path];
		if (module.metadata) {
			articles.push(module.metadata);
		}
	}

	return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single article by slug
export function getArticleBySlug(slug: string): ArticleModule | undefined {
	for (const path in articleModules) {
		const module = articleModules[path];
		if (module.metadata?.slug === slug) {
			return module;
		}
	}
	return undefined;
}

// Get related articles (excluding current)
export function getRelatedArticles(currentSlug: string, limit: number = 3): ArticleMeta[] {
	return getAllArticles()
		.filter((article) => article.slug !== currentSlug)
		.slice(0, limit);
}
