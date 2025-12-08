<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	interface LearnMoreItem {
		title: string;
		content: string;
		href?: string;
	}

	interface Props {
		title: string;
		description: string;
		buttonText: string;
		buttonUrl: string;
		learnMoreItems: LearnMoreItem[];
	}

	let { title, description, buttonText, buttonUrl, learnMoreItems }: Props = $props();

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="rounded-2xl bg-stone-200/50 p-8 md:p-12">
	<div class="grid grid-cols-12 gap-8">
		<!-- Left Side -->
		<div class="col-span-12 flex flex-col justify-between md:col-span-5">
			<div class="mb-8">
				<h2 class="mb-4 text-3xl font-medium md:text-4xl">{title}</h2>
				<p class="max-w-md text-stone-600">{description}</p>
			</div>
			<div>
				<a
					href={buttonUrl}
					class="inline-flex items-center rounded-full bg-stone-800 px-6 py-3 font-medium text-white transition-colors hover:bg-stone-700"
				>
					{buttonText}
				</a>
			</div>
		</div>

		<!-- Right Side - FAQ Accordion -->
		<div class="col-span-12 md:col-span-7">
			<h3 class="mb-6 text-sm font-medium">Learn more</h3>
			<div class="flex flex-col">
				{#each learnMoreItems as item, i}
					<div class="border-t border-stone-300 {i === learnMoreItems.length - 1 ? 'border-b' : ''}">
						<button
							onclick={() => toggle(i)}
							class="flex w-full cursor-pointer items-center justify-between py-4 text-left transition-colors hover:text-stone-600"
						>
							<h4 class="text-lg font-medium md:text-xl">{item.title}</h4>
							<ChevronDown
								class="h-5 w-5 shrink-0 transition-transform duration-200 {openIndex === i
									? 'rotate-180'
									: ''}"
							/>
						</button>
						<div
							class="grid transition-all duration-200 {openIndex === i
								? 'grid-rows-[1fr] pb-4'
								: 'grid-rows-[0fr]'}"
						>
							<div class="overflow-hidden">
								<p class="text-stone-600">{item.content}</p>
								{#if item.href}
									<a
										href={item.href}
										class="mt-2 inline-flex items-center text-sm font-medium text-stone-800 hover:underline"
									>
										ดูเพิ่มเติม →
									</a>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
