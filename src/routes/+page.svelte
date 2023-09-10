<script>
	import GgjInfo from '$lib/components/ggjInfo.svelte';
	import RelatedLinks from '$lib/components/relatedLinks.svelte';
	import NoticiaGrid from './noticias/components/noticiaGrid.svelte';
</script>

<section class="w-full max-h-128 min-h-min relative">
	<img
		class="object-cover w-full max-h-128 h-full"
		src="assets/images/eventos/ggj21/banner.jpg"
		alt="main-banner"
	/>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 sm:w-full sm:max-w-lg"
	>
		<GgjInfo />
	</div>
</section>
<section class="w-full min-h-min flex justify-center bg-slate-100">
	<div
		class="my-6 max-w-7xl w-full p-6 flex flex-col-reverse sm:flex-row items-center sm:items-start gap-6"
	>
		<RelatedLinks />

		<NoticiaGrid />
	</div>
</section>
