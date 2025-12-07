<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageSrc: string;
	export let href: string;
	export let buttonText: string;
</script>

<div class="relative flex h-full w-full font-ibm">
	<div class="mx-auto mt-32 flex w-full max-w-7xl items-center">
		<section class="z-10 mt-16 flex flex-col gap-4 p-6">
			<span>
				<h1 class="mb-2 text-5xl text-white">{title}</h1>
				<p class="text-lg text-white">{description}</p>
			</span>
			<a {href} class="flex w-fit items-center rounded-full bg-white px-4 py-2 font-medium">
				{buttonText}
			</a>
		</section>
	</div>
	<img
		width="1920"
		height="1080"
		sizes="100vw"
		src={imageSrc}
		alt={title}
		class="absolute h-full w-full object-cover brightness-70"
		fetchpriority="high"
	/>
</div>
