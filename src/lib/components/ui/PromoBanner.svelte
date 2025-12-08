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

<div class="rounded-2xl bg-stone-200/50 p-6 md:p-12">
	<div class="grid grid-cols-12 gap-6 md:gap-8">
		<!-- Left Side -->
		<div class="col-span-12 flex flex-col justify-between md:col-span-5">
			<div class="mb-6 md:mb-8">
				<h2 class="text-section-title mb-2 md:mb-4">{title}</h2>
				<p class="text-body max-w-md">{description}</p>
			</div>
			<div>
				<a href={buttonUrl} class="btn-primary">
					{buttonText}
				</a>
			</div>
		</div>

		<!-- Right Side - FAQ Accordion -->
		<div class="col-span-12 md:col-span-7">
			<h3 class="text-caption mb-4 font-medium md:mb-6">Learn more</h3>
			<div class="flex flex-col">
				{#each learnMoreItems as item, i}
					<div class="border-t border-stone-300 {i === learnMoreItems.length - 1 ? 'border-b' : ''}">
						<button
							onclick={() => toggle(i)}
							class="flex w-full cursor-pointer items-center justify-between py-3 text-left transition-colors hover:text-stone-600 md:py-4"
						>
							<h4 class="text-card-title">{item.title}</h4>
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
								<p class="text-body">{item.content}</p>
								{#if item.href}
									<a href={item.href} class="link-arrow mt-2">
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
