import { getAllArticles } from '$lib/content/articles';
import type { RequestHandler } from './$types';

// Static pages with their priorities and change frequencies
const staticPages = [
	{ path: '', priority: '1.0', changefreq: 'weekly' },
	{ path: '/services', priority: '0.9', changefreq: 'monthly' },
	{ path: '/articles', priority: '0.8', changefreq: 'weekly' },
	{ path: '/status', priority: '0.5', changefreq: 'daily' }
];

export const GET: RequestHandler = async ({ url }) => {
	const site = url.origin;
	const articles = getAllArticles();

	const staticUrls = staticPages
		.map(
			(page) => `  <url>
    <loc>${site}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
		)
		.join('\n');

	const articleUrls = articles
		.map(
			(article) => `  <url>
    <loc>${site}/articles/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
		)
		.join('\n');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${articleUrls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
