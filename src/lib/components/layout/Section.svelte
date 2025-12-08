<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		gap?: boolean;
	}

	let { children, gap = true }: Props = $props();
</script>

<section class="mx-auto w-full max-w-7xl p-6">
	<div class="grid grid-cols-12 {gap ? 'gap-6' : ''}">
		{@render children()}
	</div>
</section>
