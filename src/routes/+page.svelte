<script lang="ts">
	import AnimatedIcon from '$lib/components/ui/AnimatedIcon.svelte';
	import HalfBanner from '$lib/components/layout/HalfBanner.svelte';
	import PromoBanner from '$lib/components/ui/PromoBanner.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import Slider from '$lib/components/ui/Slider.svelte';
	import type { SliderItem, BannerSlide } from '$lib/types';
	import {
		ArrowBigDown,
		ChartSpline,
		PanelsTopLeftIcon,
		PanelTopIcon,
		Repeat
	} from 'lucide-svelte';

	const siteUrl = 'https://rinkai.co';
	const pageTitle = 'Rinkai Industries – Make life easier';
	const pageDescription =
		'Rinkai Industries is dedicated to providing innovative solutions for your business needs. Digital solutions, business intelligence, and supply chain optimization.';
	const ogImage = `${siteUrl}/og-img.webp`;

	const bannerSlides: BannerSlide[] = [
		{
			id: 1,
			title: 'Digital Solutions for Business',
			description: 'สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น',
			imageSrc: '/brands/iconv-1.webp',
			href: '/services',
			buttonText: 'ดูเพิ่มเติม'
		},
		{
			id: 2,
			title: 'Business Intelligence Dashboard',
			description: 'วิเคราะห์ข้อมูลธุรกิจอย่างมีประสิทธิภาพด้วย Dashboard ที่ออกแบบมาเพื่อคุณ',
			imageSrc: '/brands/iconv-2.webp',
			href: '/services',
			buttonText: 'ดูเพิ่มเติม'
		},
		{
			id: 3,
			title: 'Supply Chain Optimization',
			description: 'เพิ่มประสิทธิภาพการจัดการ Supply Chain ด้วยเทคโนโลยีที่ทันสมัย',
			imageSrc: '/brands/iconv-3.webp',
			href: '/services',
			buttonText: 'ดูเพิ่มเติม'
		}
	];

	const promoLearnMoreItems = [
		{
			title: 'ดูเพิ่มเติมเกี่ยวกับบริการของเรา',
			content: 'เรามีบริการครบวงจรตั้งแต่การออกแบบ พัฒนา และดูแลระบบให้กับธุรกิจของคุณ',
			href: '/services'
		},
		{
			title: 'กรณีศึกษาและผลงาน',
			content: 'ดูผลงานและกรณีศึกษาจากลูกค้าที่ไว้วางใจให้เราดูแลธุรกิจของพวกเขา',
			href: '/articles'
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

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={siteUrl} />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Rinkai Industries" />

	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex w-full flex-col font-ibm">
	<!-- Hero Banner -->
	<HalfBanner slides={bannerSlides} autoPlay />

	<div class="mb-12 flex flex-col gap-6">
		<Section>
			<div class="col-span-12 mt-4 mb-4">
				<h1 class="text-section-title">Success Stories</h1>
				<p class="text-section-subtitle">find out more about our business solutions</p>
			</div>

			<div class="col-span-8">
				<img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					width="800"
					height="600"
					loading="lazy"
					decoding="async"
					class="h-card-image-lg w-full rounded-md object-cover md:h-full"
				/>
			</div>

			<div class="col-span-4 flex flex-col justify-start gap-4">
				<div>
					<h2 class="text-card-title">Ads Analytics in Ecommerce Platform</h2>
					<p class="text-card-desc">Ads Analytics</p>
				</div>
				<a href="/" class="btn-sm">ดูเพิ่มเติม</a>
			</div>
		</Section>

		<Section>
			<div class="col-span-12 mt-4 mb-4">
				<h1 class="text-section-title">Services</h1>
				<p class="text-section-subtitle">find out more about our business solutions</p>
			</div>

			<div class="col-span-12 md:col-span-6">
				<img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					width="800"
					height="600"
					loading="lazy"
					decoding="async"
					class="mb-4 h-card-image-lg w-full rounded-md object-cover"
				/>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-card-title">Ads Analytics in Ecommerce Platform</h2>
						<p class="text-card-desc">Ads Analytics</p>
					</div>
					<a href="/" class="btn-primary">ดูเพิ่มเติม</a>
				</div>
			</div>

			<div class="col-span-12 md:col-span-6">
				<img
					src="/usecase/iconv.webp"
					alt="Business Solutions"
					width="800"
					height="600"
					loading="lazy"
					decoding="async"
					class="mb-4 h-card-image-lg w-full rounded-md object-cover"
				/>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-card-title">Ads Analytics in Ecommerce Platform</h2>
						<p class="text-card-desc">Ads Analytics</p>
					</div>
					<a href="/" class="btn-primary">ดูเพิ่มเติม</a>
				</div>
			</div>
		</Section>

		<Section>
			<div class="col-span-12 mt-4 mb-4">
				<h1 class="text-section-title">Services</h1>
				<p class="text-section-subtitle">find out more about our business solutions</p>
			</div>

			<div class="col-span-12 rounded-md p-4 md:col-span-4">
				<div
					class="mb-4 flex h-card-image-lg w-full items-center justify-center rounded-md bg-amber-50"
				>
					<ChartSpline class="h-icon-container w-full text-amber-400/50" strokeWidth={1} />
				</div>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-card-title">Ads Analytics in Ecommerce Platform</h2>
						<p class="text-card-desc">Ads Analytics</p>
					</div>
					<a href="/" class="btn-primary">ดูเพิ่มเติม</a>
				</div>
			</div>

			<div class="col-span-12 rounded-lg p-4 md:col-span-4">
				<div
					class="mb-4 flex h-card-image-lg w-full items-center justify-center rounded-md bg-stone-100"
				>
					<PanelsTopLeftIcon class="h-icon-container w-full text-stone-400/50" strokeWidth={1} />
				</div>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-card-title">Ads Analytics in Ecommerce Platform</h2>
						<p class="text-card-desc">Ads Analytics</p>
					</div>
					<a href="/" class="btn-primary">ดูเพิ่มเติม</a>
				</div>
			</div>

			<div class="col-span-12 rounded-md p-4 md:col-span-4">
				<div
					class="mb-4 flex h-card-image-lg w-full items-center justify-center rounded-md bg-indigo-50"
				>
					<Repeat class="h-icon-container w-full text-indigo-700/50" strokeWidth={1} />
				</div>
				<div class="flex flex-col gap-4">
					<div>
						<h2 class="text-card-title">Ads Analytics in Ecommerce Platform</h2>
						<p class="text-card-desc">Ads Analytics</p>
					</div>
					<a href="/" class="btn-primary">ดูเพิ่มเติม</a>
				</div>
			</div>
		</Section>

		<Section>
			<div class="col-span-12 mt-4 mb-4 rounded-2xl bg-stone-200/50 p-8 py-16 text-center md:p-32">
				<AnimatedIcon class="mb-12" />
				<h1 class="text-section-title mb-2">เพิ่มประสิทธิภาพให้ธุรกิจของคุณ</h1>
				<p class="text-section-subtitle">find out more about our business solutions</p>
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
