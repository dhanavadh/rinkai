<script lang="ts">
	import AnimatedIcon from '$lib/components/ui/AnimatedIcon.svelte';
	import Banner from '$lib/components/layout/Banner.svelte';
	import PromoBanner from '$lib/components/ui/PromoBanner.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import Slider from '$lib/components/ui/Slider.svelte';
	import type { SliderItem } from '$lib/types';
	import {
		ArrowBigDown,
		ChartSpline,
		PanelsTopLeftIcon,
		PanelTopIcon,
		Repeat
	} from 'lucide-svelte';

	const promoLearnMoreItems = [
		{
			title: 'ดูเพิ่มเติมเกี่ยวกับบริการของเรา',
			content: 'เรามีบริการครบวงจรตั้งแต่การออกแบบ พัฒนา และดูแลระบบให้กับธุรกิจของคุณ',
			href: '/services'
		},
		{
			title: 'กรณีศึกษาและผลงาน',
			content: 'ดูผลงานและกรณีศึกษาจากลูกค้าที่ไว้วางใจให้เราดูแลธุรกิจของพวกเขา',
			href: '/cases'
		},
		{
			title: 'ติดต่อเรา',
			content: 'พร้อมให้คำปรึกษาฟรี ติดต่อเราได้ทุกช่องทาง',
			href: '/contact'
		}
	];

	const successStories: SliderItem[] = [
		{
			id: 1,
			title: 'Ads Analytics in Ecommerce Platform',
			description: 'Ads Analytics',
			imageUrl: '/brands/iconv-1.webp',
			linkUrl: '/'
		},
		{
			id: 2,
			title: 'Business Intelligence Dashboard',
			description: 'Data Visualization',
			imageUrl: '/brands/iconv-3.webp',
			linkUrl: '/'
		},
		{
			id: 3,
			title: 'Supply Chain Optimization',
			description: 'Logistics Solutions',
			imageUrl: '/brands/iconv-4.webp',
			linkUrl: '/'
		},
		{
			id: 4,
			title: 'Supply Chain Optimization',
			description: 'Logistics Solutions',
			imageUrl: '/brands/iconv-2.webp',
			linkUrl: '/'
		}
	];
</script>

<div class="flex w-full flex-col font-ibm">
	<!-- <Banner
		title="Solutions for Business"
		description="สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น"
		imageSrc="/images/_.webp"
		href="/"
		buttonText="ดูเพิ่มเติม"
	/> -->

	<div class="relative flex h-screen w-full font-ibm md:h-[500px]">
		<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-6">
			<section class="z-10 mt-16 flex flex-col gap-4">
				<span class="text-stone-800">
					<h1 class="mb-2 text-5xl">Digital Solutions for Business</h1>
					<p class="text-lg">สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น</p>
				</span>
				<a
					href="/"
					class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
				>
					ดูเพิ่มเติม
				</a>
			</section>
			<section class="flex w-fit items-center justify-center">
				<AnimatedIcon size={128} />
			</section>
		</div>
		<div class="absolute h-full w-full object-cover brightness-90"></div>
	</div>

	<div class="mb-12 flex flex-col gap-6">
		<Section>
			<div class="col-span-12 mt-4 mb-4">
				<h1 class="text-4xl">Success Stories</h1>
				<p>find out more about our business solutions</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				<img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					class="h-full w-full rounded-md object-cover"
				/>
			</div>

			<div class="col-span-12 flex flex-col justify-start gap-4 md:col-span-4">
				<div>
					<h2 class="text-2xl font-medium">Ads Analytics in Ecommerce Platform</h2>
					<p>Ads Analytics</p>
				</div>
				<a
					href="/"
					class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
				>
					ดูเพิ่มเติม
				</a>
			</div>
		</Section>

		<Section>
			<div class="col-span-12 mt-4 mb-4">
				<h1 class="text-4xl">Services</h1>
				<p>find out more about our business solutions</p>
			</div>

			<div class="col-span-12 md:col-span-6">
				<img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					class="mb-4 h-64 w-full rounded-md object-cover"
				/>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-2xl font-medium">Ads Analytics in Ecommerce Platform</h2>
						<p>Ads Analytics</p>
					</div>
					<a
						href="/"
						class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
					>
						ดูเพิ่มเติม
					</a>
				</div>
			</div>

			<div class="col-span-12 md:col-span-6">
				<img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					class="mb-4 h-64 w-full rounded-md object-cover"
				/>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-2xl font-medium">Ads Analytics in Ecommerce Platform</h2>
						<p>Ads Analytics</p>
					</div>
					<a
						href="/"
						class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
					>
						ดูเพิ่มเติม
					</a>
				</div>
			</div>
		</Section>
		<Section>
			<div class="col-span-12 mt-4 mb-4">
				<h1 class="text-4xl">Services</h1>
				<p>find out more about our business solutions</p>
			</div>

			<div class="col-span-12 rounded-md p-4 md:col-span-4">
				<!-- <img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					class="mb-4 h-64 w-full rounded-md object-cover"
				/> -->
				<div
					class="mb-4 flex h-64 w-full items-center justify-center rounded-md bg-amber-50 object-cover"
				>
					<ChartSpline class="h-48 w-full text-amber-400/50" strokeWidth={1} />
				</div>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-2xl font-medium">Ads Analytics in Ecommerce Platform</h2>
						<p>Ads Analytics</p>
					</div>
					<a
						href="/"
						class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
					>
						ดูเพิ่มเติม
					</a>
				</div>
			</div>

			<div class="col-span-12 rounded-lg p-4 md:col-span-4">
				<div
					class="mb-4 flex h-64 w-full items-center justify-center rounded-md bg-stone-100 object-cover"
				>
					<PanelsTopLeftIcon class="h-48 w-full text-stone-400/50" strokeWidth={1} />
				</div>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-2xl font-medium">Ads Analytics in Ecommerce Platform</h2>
						<p>Ads Analytics</p>
					</div>
					<a
						href="/"
						class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
					>
						ดูเพิ่มเติม
					</a>
				</div>
			</div>

			<div class="col-span-12 rounded-md p-4 md:col-span-4">
				<div
					class="mb-4 flex h-64 w-full items-center justify-center rounded-md bg-indigo-50 object-cover"
				>
					<Repeat class="h-48 w-full text-indigo-700/50" strokeWidth={1} />
				</div>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-2xl font-medium">Ads Analytics in Ecommerce Platform</h2>
						<p>Ads Analytics</p>
					</div>
					<a
						href="/"
						class="flex w-fit items-center rounded-full bg-stone-800 px-4 py-2 font-medium text-white"
					>
						ดูเพิ่มเติม
					</a>
				</div>
			</div>
		</Section>

		<Section>
			<div class="col-span-12 mt-4 mb-4 rounded-2xl bg-stone-200/50 p-32 text-center">
				<AnimatedIcon class="mb-12" />
				<h1 class="mb-2 text-4xl">เพิ่มประสิทธิภาพให้ธุรกิจของคุณ</h1>
				<p>find out more about our business solutions</p>
			</div>
		</Section>

		<Section gap={false}>
			<div class="col-span-12">
				<Slider
					sectionTitle="Success Stories"
					sectionSubtitle="find out more about our business solutions"
					items={successStories}
				/>
			</div>
		</Section>

		<Section gap={false}>
			<div class="col-span-12">
				<PromoBanner
					title="ปรึกษาฟรี"
					description="สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น ด้วยโซลูชันที่ครบครันจาก Rinkai"
					buttonText="ดูบริการทั้งหมด"
					buttonUrl="/services"
					learnMoreItems={promoLearnMoreItems}
				/>
			</div>
		</Section>
	</div>
</div>
