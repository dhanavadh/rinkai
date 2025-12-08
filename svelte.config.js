import adapterNode from '@sveltejs/adapter-node';
import adapterAuto from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Use adapter-auto for Vercel (auto-detects), adapter-node for Azure
const adapter = process.env.VERCEL ? adapterAuto() : adapterNode();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter
	}
};

export default config;
