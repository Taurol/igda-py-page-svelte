<script>
	import FooterContent from "$lib/components/footer/footerContent.svelte";
import HeaderContent from "$lib/components/header/headerContent.svelte";
import VanishingHeader from "$lib/components/header/vanishingHeader.svelte";
    import "../app.css";
  </script>
  
  <VanishingHeader>
    <HeaderContent></HeaderContent>
  </VanishingHeader>
  <section class="mt-32">
    <slot />
  </section>
  <FooterContent></FooterContent>