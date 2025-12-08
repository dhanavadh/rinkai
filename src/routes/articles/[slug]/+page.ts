import { error } from '@sveltejs/kit';
import { getArticleBySlug, getRelatedArticles } from '$lib/content/articles';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const article = getArticleBySlug(params.slug);

	if (!article) {
		throw error(404, 'Article not found');
	}

	const relatedArticles = getRelatedArticles(params.slug, 3);

	return {
		article: article.metadata,
		Content: article.default,
		relatedArticles
	};
};
