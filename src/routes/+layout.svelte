<script>
	import FooterContent from "$lib/components/footer/footerContent.svelte";
	import HamburgerMenu from "$lib/components/header/hamburgerMenu.svelte";
import HeaderContent from "$lib/components/header/headerContent.svelte";
import VanishingHeader from "$lib/components/header/vanishingHeader.svelte";
    import "../app.css";
  </script>
  
  <VanishingHeader>
    <div class="bg-white">
      <HeaderContent></HeaderContent>
      <HamburgerMenu></HamburgerMenu>
    </div>
    
  </VanishingHeader>
  <section class="mt-32">
    <slot />
  </section>
  <FooterContent></FooterContent>