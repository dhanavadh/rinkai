import type { MenuConfig } from '$lib/types';

export const menuConfig: MenuConfig = {
	mainNav: [
		{
			title: 'Services',
			href: '/services',
			megaMenu: 'services'
		},
		{
			title: 'Articles',
			href: '/articles'
		}
	],
	megaMenus: {
		services: {
			columns: [
				{
					title: 'APIs',
					links: [
						{
							id: '1',
							title: 'Document Processing',
							description: 'Fast and Reliable SDK for business',
							href: '/services/ocean-freight',
							icon: 'Code2'
						},
						{
							id: '2',
							title: 'Government Documents Processing',
							description: 'Small-volume ocean shipments + inland options',
							href: '/services/lcl',
							icon: 'FileText'
						},
						{
							id: '10',
							title: 'ML Translation',
							description: 'Finetuned for Government Documents',
							href: '/services/lcl',
							icon: 'Bot'
						}
					]
				},
				{
					title: 'Web Developement',
					links: [
						{
							id: 'website-development',
							title: 'เว็บไซต์ขายของ',
							description: 'Reliable and flexible trucking services',
							href: '/services/trucking',
							icon: 'Truck'
						},
						{
							id: 'backend-server-development-1',
							title: 'Backend Server Development',
							description: 'Cost-effective and sustainable rail transport',
							href: '/services/rail',
							icon: 'Train'
						},
						{
							id: 'backend-server-development-2',
							title: 'Backend Server Development',
							description: 'Cost-effective and sustainable rail transport',
							href: '/services/rail',
							icon: 'Train'
						}
					]
				},
				{
					title: 'Security',
					links: [
						{
							id: '1',
							title: 'Passkey for Workspace',
							description: 'Fast and reliable air freight services',
							href: '/services/air-freight',
							icon: 'IdCardLanyard'
						}
					]
				}
			],
			banner: [
				{
					id: '3',
					title: 'Read Our Articles',
					description: 'Explore our research and use cases.',
					imageSrc: '/images/blog-1.svg',
					href: '/articles'
				}
			]
		}
	}
};
