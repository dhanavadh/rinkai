export interface MegaMenuLink {
	id: string;
	title: string;
	description: string;
	href: string;
	icon: string;
}

export interface MegaMenuColumn {
	title: string;
	links: MegaMenuLink[];
}

export interface BannerConfig {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	href: string;
}

export type MegaMenu = {
	columns: MegaMenuColumn[];
	banner: BannerConfig[];
};

export type NavItem = {
	title: string;
	href: string;
	megaMenu?: string;
};

export type MenuConfig = {
	mainNav: NavItem[];
	megaMenus: {
		[key: string]: MegaMenu;
	};
};

export interface SliderItem {
	id: string | number;
	title: string;
	description: string;
	imageUrl: string;
	linkUrl: string;
}

export type ArticleType = 'research' | 'review' | 'book-chapter' | 'conference';

export interface Article {
	id: string | number;
	title: string;
	journal: string;
	date: string;
	authors: string[];
	type: ArticleType;
	hasFullAccess?: boolean;
	abstract?: string;
	href: string;
}

export interface BannerSlide {
	id: string | number;
	title: string;
	description: string;
	imageSrc: string;
	href: string;
	buttonText: string;
}
