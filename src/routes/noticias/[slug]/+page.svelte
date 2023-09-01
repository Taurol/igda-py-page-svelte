<script>
	import { page } from '$app/stores';
	import NoticiaContent from '../components/noticiaContent.svelte';
	import RelatedLinks from '$lib/components/relatedLinks.svelte';
	const sectionUri = "/noticias/";
	const noticiaUri = $page.url.pathname.slice(sectionUri.length);
</script>

<section
	aria-label="Noticia"
	class="w-full flex justify-center bg-slate-100"
>
	<div class="flex flex-col-reverse sm:flex-row items-center sm:items-start p-6 my-6 gap-10 max-w-6xl w-full">
        <RelatedLinks />
		<NoticiaContent noticiaUri={noticiaUri}/>
	</div>
</section>