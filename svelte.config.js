import adapterNode from '@sveltejs/adapter-node';
import adapterAuto from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

// Use adapter-auto for Vercel (auto-detects), adapter-node for Azure
const adapter = process.env.VERCEL ? adapterAuto() : adapterNode();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.mdx'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.mdx']
		})
	],

	kit: {
		adapter
	}
};

export default config;
