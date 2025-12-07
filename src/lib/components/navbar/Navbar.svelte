<script lang="ts">
	import { onMount } from 'svelte';
	import { menuConfig } from '$lib/config/menu';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';
	import MegaMenu from './MegaMenu.svelte';
	import {
		isScrollingDown,
		backgroundClass,
		stickyClass,
		isMobileMenuOpen,
		isAtTop,
		lastScrollY,
		setMenuHovered
	} from './store';

	let hoveredMenu: string | null = null;

	function handleMenuHover(menu: string | null) {
		hoveredMenu = menu;
		setMenuHovered(!!menu);
	}

	onMount(() => {
		function handleScroll() {
			const currentScrollY = window.scrollY;
			isAtTop.set(currentScrollY === 0);
			isScrollingDown.set(currentScrollY > $lastScrollY && currentScrollY > 50);
			lastScrollY.set(currentScrollY);
		}

		function handleResize() {
			if (window.innerWidth > 768) {
				isMobileMenuOpen.set(false);
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleResize);

		const unsubscribe = isMobileMenuOpen.subscribe((isOpen) => {
			document.body.style.overflow = isOpen ? 'hidden' : 'unset';
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
			unsubscribe();
		};
	});
</script>

<header class="w-full {$stickyClass} top-0 z-50">
	<!-- Desktop Navigation -->
	<nav
		class="relative hidden w-full items-center justify-between font-ibm transition-transform duration-300 ease-in-out md:flex {$backgroundClass} {$isScrollingDown
			? '-translate-y-full'
			: 'translate-y-0'}"
		onmouseleave={() => handleMenuHover(null)}
	>
		<Desktop onMenuHover={handleMenuHover} />
		<MegaMenu menu={hoveredMenu ? menuConfig.megaMenus[hoveredMenu] : null} />
	</nav>

	<!-- Mobile Navigation -->
	<nav class="relative w-full items-center justify-between font-ibm md:hidden {$backgroundClass}">
		<Mobile />
	</nav>
</header>
