import { writable, derived } from 'svelte/store';
import { page } from '$app/stores';

export const navbarConfig = {
	transparentPaths: ['/', '/careers']
};

const createNavbarStore = () => {
	const isMenuHovered = writable(false);
	const isMobileMenuOpen = writable(false);
	const isScrollingDown = writable(false);
	const lastScrollY = writable(0);
	const isAtTop = writable(true);
	const isErrorPage = writable(false);

	const isTransparentPath = derived(page, ($page) => {
		return navbarConfig.transparentPaths.includes($page.url.pathname);
	});

	const backgroundClass = derived(
		[isTransparentPath, isMobileMenuOpen, isMenuHovered, isAtTop, isErrorPage],
		([$isTransparentPath, $isMobileMenuOpen, $isMenuHovered, $isAtTop, $isErrorPage]) => {
			if (
				(!$isTransparentPath && !$isErrorPage) ||
				$isMobileMenuOpen ||
				$isMenuHovered ||
				!$isAtTop
			) {
				return 'bg-neutral-50';
			}
			return 'bg-linear-to-b from-neutral-900 to-transparent';
		}
	);

	const largeLogoSrc = derived(
		[isMobileMenuOpen, isMenuHovered, isTransparentPath, isAtTop, isErrorPage],
		([$isMobileMenuOpen, $isMenuHovered, $isTransparentPath, $isAtTop, $isErrorPage]) => {
			if ($isMobileMenuOpen || $isMenuHovered || (!$isTransparentPath && !$isErrorPage)) {
				return '/images/logo-b.svg';
			}
			return $isAtTop ? '/images/logo-w.svg' : '/images/logo-b.svg';
		}
	);

	const smallLogoSrc = derived(
		[isMobileMenuOpen, isMenuHovered, isTransparentPath, isAtTop, isErrorPage],
		([$isMobileMenuOpen, $isMenuHovered, $isTransparentPath, $isAtTop, $isErrorPage]) => {
			if ($isMobileMenuOpen || $isMenuHovered || (!$isTransparentPath && !$isErrorPage)) {
				return '/images/logo-b.svg';
			}
			return $isAtTop ? '/images/logo-w.svg' : '/images/logo-b.svg';
		}
	);

	const textColorClass = derived(
		[isMobileMenuOpen, isMenuHovered, isTransparentPath, isAtTop, isErrorPage],
		([$isMobileMenuOpen, $isMenuHovered, $isTransparentPath, $isAtTop, $isErrorPage]) => {
			if ($isMobileMenuOpen || $isMenuHovered || (!$isTransparentPath && !$isErrorPage)) {
				return 'text-neutral-800';
			}
			return $isAtTop ? 'text-neutral-50' : 'text-neutral-800';
		}
	);

	const stickyClass = derived(
		[isTransparentPath, isErrorPage],
		([$isTransparentPath, $isErrorPage]) => {
			return $isTransparentPath || $isErrorPage ? 'fixed' : 'sticky';
		}
	);

	return {
		isMenuHovered,
		isMobileMenuOpen,
		isScrollingDown,
		lastScrollY,
		isAtTop,
		isErrorPage,
		isTransparentPath,
		backgroundClass,
		largeLogoSrc,
		smallLogoSrc,
		textColorClass,
		stickyClass
	};
};

export const navbarStore = createNavbarStore();
