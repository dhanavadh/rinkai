<script lang="ts">
	import { AlertTriangle } from 'lucide-svelte';
</script>

<div class="mx-auto flex min-h-screen w-full max-w-4xl flex-col p-6 font-ibm">
	<section
		class="sticky top-0 z-10 flex flex-col items-start border-b border-neutral-200 bg-neutral-50 py-4 text-center"
	>
		<h1 class="text-3xl font-semibold">Service Status</h1>
		<p>สถานะบริการทั้งหมดจาก rinkai industries</p>
	</section>
	<section class="flex w-full py-6">
		<div
			class="flex w-full flex-col gap-2 border-2 border-orange-600 bg-orange-50 p-4 text-orange-600"
		>
			<span class="flex flex-col">
				<AlertTriangle />
				<h1 class="mt-2 text-lg font-semibold">Critical - This is a critical issue sample</h1>
				<p class="font-mono text-sm">12 November 2023 22:41(GMT BKK +7)</p>
			</span>
			<p class="">บริการ web service จากทาง rinkai ไม่สามารถให้บริการได้เนื่องจาก</p>
		</div>
	</section>
	<section class="flex flex-col py-6">
		<h2 class="text-xl font-semibold">Recent Updates</h2>
		<ul class="list-inside list-disc">
			<li>Resolved an issue with email delivery.</li>
			<li>Improved performance of the search feature.</li>
		</ul>
	</section>
</div>
<div class="mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center">
	<p>Hellp</p>
</div>
