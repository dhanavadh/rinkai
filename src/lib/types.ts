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
