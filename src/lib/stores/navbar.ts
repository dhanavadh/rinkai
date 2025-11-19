
import { writable, derived } from 'svelte/store';
import { page } from '$app/stores';

export const navbarConfig = {
  transparentPaths: ['/', '/careers'],
};

const createNavbarStore = () => {
  const isMenuHovered = writable(false);
  const isMobileMenuOpen = writable(false);
  const isScrollingDown = writable(false);
  const lastScrollY = writable(0);
  const isAtTop = writable(true);

  const isTransparentPath = derived(page, ($page) => {
    return navbarConfig.transparentPaths.includes($page.url.pathname);
  });

  const backgroundClass = derived(
    [isTransparentPath, isMobileMenuOpen, isMenuHovered, isAtTop],
    ([$isTransparentPath, $isMobileMenuOpen, $isMenuHovered, $isAtTop]) => {
      if (!$isTransparentPath || $isMobileMenuOpen || $isMenuHovered || !$isAtTop) {
        return 'bg-neutral-50';
      }
      return 'bg-linear-to-b from-neutral-900 to-transparent';
    }
  );

  const largeLogoSrc = derived(
    [isMobileMenuOpen, isMenuHovered, isTransparentPath, isAtTop],
    ([$isMobileMenuOpen, $isMenuHovered, $isTransparentPath, $isAtTop]) => {
      if ($isMobileMenuOpen || $isMenuHovered || !$isTransparentPath) {
        return '/images/logo-fish-neutral.svg';
      }
      return $isAtTop
        ? '/images/logo-fish-white.svg'
        : '/images/logo-fish-neutral.svg';
    }
  );

  const smallLogoSrc = derived(
    [isMobileMenuOpen, isMenuHovered, isTransparentPath, isAtTop],
    ([$isMobileMenuOpen, $isMenuHovered, $isTransparentPath, $isAtTop]) => {
      if ($isMobileMenuOpen || $isMenuHovered || !$isTransparentPath) {
        return '/images/logo-fish-only-black.svg';
      }
      return $isAtTop
        ? '/images/logo-fish-only.svg'
        : '/images/logo-fish-only-black.svg';
    }
  );

  const textColorClass = derived(
    [isMobileMenuOpen, isMenuHovered, isTransparentPath, isAtTop],
    ([$isMobileMenuOpen, $isMenuHovered, $isTransparentPath, $isAtTop]) => {
      if ($isMobileMenuOpen || $isMenuHovered || !$isTransparentPath) {
        return 'text-neutral-800';
      }
      return $isAtTop ? 'text-neutral-50' : 'text-neutral-800';
    }
  );

  const stickyClass = derived(isTransparentPath, ($isTransparentPath) => {
    return $isTransparentPath ? 'fixed' : 'sticky';
  });

  return {
    isMenuHovered,
    isMobileMenuOpen,
    isScrollingDown,
    lastScrollY,
    isAtTop,
    isTransparentPath,
    backgroundClass,
    largeLogoSrc,
    smallLogoSrc,
    textColorClass,
    stickyClass,
  };
};

export const navbarStore = createNavbarStore();
