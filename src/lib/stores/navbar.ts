import { writable, derived } from 'svelte/store';
import { page } from '$app/stores';

// Configuration
const TRANSPARENT_PATHS = ['/articles', '/articles/*', '/services'];

// Base stores
export const isMenuHovered = writable(false);
export const isMobileMenuOpen = writable(false);
export const isScrollingDown = writable(false);
export const lastScrollY = writable(0);
export const isAtTop = writable(true);
export const isErrorPage = writable(false);

// Helper function to match paths with wildcards
function matchPath(pathname: string, pattern: string): boolean {
	if (pattern.endsWith('/*')) {
		const base = pattern.slice(0, -2);
		return pathname === base || pathname.startsWith(base + '/');
	}
	return pathname === pattern;
}

// Derived stores
export const isTransparentPath = derived(page, ($page) =>
	TRANSPARENT_PATHS.some((pattern) => matchPath($page.url.pathname, pattern))
);

// Helper: determines if navbar should use dark theme (light text on transparent)
const shouldUseDarkTheme = derived(
	[isTransparentPath, isMobileMenuOpen, isMenuHovered, isAtTop, isErrorPage],
	([$isTransparentPath, $isMobileMenuOpen, $isMenuHovered, $isAtTop, $isErrorPage]) => {
		// Use dark theme (transparent bg) only when:
		// - On a transparent path OR error page
		// - Menu is not open
		// - Not hovering mega menu
		// - At top of page
		if ($isMobileMenuOpen || $isMenuHovered) return false;
		if (!$isTransparentPath && !$isErrorPage) return false;
		return $isAtTop;
	}
);

export const backgroundClass = derived(shouldUseDarkTheme, ($dark) =>
	$dark ? 'bg-linear-to-b from-neutral-900 to-transparent' : 'bg-stone-50'
);

export const logoSrc = derived(shouldUseDarkTheme, ($dark) =>
	$dark ? '/images/logo-w.svg' : '/images/logo-b.svg'
);

export const textColorClass = derived(shouldUseDarkTheme, ($dark) =>
	$dark ? 'text-neutral-50' : 'text-neutral-800'
);

export const stickyClass = derived(
	[isTransparentPath, isErrorPage],
	([$isTransparentPath, $isErrorPage]) => ($isTransparentPath || $isErrorPage ? 'fixed' : 'sticky')
);

// Actions
export function toggleMobileMenu() {
	isMobileMenuOpen.update((open) => !open);
}

export function closeMobileMenu() {
	isMobileMenuOpen.set(false);
}

export function setMenuHovered(hovered: boolean) {
	isMenuHovered.set(hovered);
}
