<script lang="ts">
  import { navbarStore, navbarConfig } from "$lib/stores/navbar";
  import DesktopNavbar from "./DesktopNavbar.svelte";
  import MobileNavbar from "./MobileNavbar.svelte";
  import MegaMenu from "./MegaMenu.svelte";
  import { menuConfig } from "$lib/config/menu";
  import { onMount } from "svelte";

  const { 
    isScrollingDown, 
    backgroundClass, 
    largeLogoSrc, 
    smallLogoSrc, 
    textColorClass, 
    stickyClass, 
    isMenuHovered, 
    isMobileMenuOpen,
    isAtTop,
    lastScrollY
  } = navbarStore;

  let hoveredMenu: string | null = null;

  function handleMenuHover(event: CustomEvent<string | null>) {
    hoveredMenu = event.detail;
    isMenuHovered.set(!!event.detail);
  }

  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      isAtTop.set(currentScrollY === 0);

      if (currentScrollY > $lastScrollY && currentScrollY > 50) {
        isScrollingDown.set(true);
      } else {
        isScrollingDown.set(false);
      }

      lastScrollY.set(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        isMobileMenuOpen.set(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const unsubscribe = isMobileMenuOpen.subscribe(isOpen => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  });
</script>

<header class={`w-full ${$stickyClass} top-0 z-50`}>
  <nav
    class={`hidden md:flex font-ibm w-full items-center justify-between relative transition-transform duration-300 ease-in-out ${$backgroundClass} ${$isScrollingDown ? "-translate-y-full" : "translate-y-0"}`}
    on:mouseleave={() => handleMenuHover({ detail: null } as CustomEvent<string | null>)}
  >
    <DesktopNavbar on:menuHover={handleMenuHover} />
    <MegaMenu menu={hoveredMenu ? menuConfig.megaMenus[hoveredMenu] : null} />
  </nav>
  <nav class={`md:hidden font-ibm w-full items-center justify-between relative ${$backgroundClass}`}>
    <MobileNavbar />
  </nav>
</header>
