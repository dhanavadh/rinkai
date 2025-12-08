import { getAllArticles } from '$lib/content/articles';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const articles = getAllArticles();

	return {
		articles
	};
};
