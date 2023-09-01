<script>
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let noticiaUri = '';
	const pb = new PocketBase('https://igda-py.pockethost.io');
	/**
	 * @type {import("pocketbase").RecordModel}
	 */
	let record;
	let title = '';
	let featuredImageSrc = '';
	let featuredImageAltText = '';
	let markdownData = '';

	onMount(async () => {
		console.log(noticiaUri);
		record = await pb.collection('noticias').getFirstListItem(`uri="${noticiaUri}"`);
		title = record['title'];
		featuredImageSrc = `https://igda-py.pockethost.io/api/files/noticias/${record['id']}/${record['featured_image']}`;
		featuredImageAltText = record['alt_text_featured_image'];
		markdownData = record['content'];
	});
</script>

<section class="w-full">
	{#if record === undefined}
		<p>Cargando...</p>
	{:else}
		<h2 class=" text-4xl font-black w-full mb-6">{title}</h2>
		<img
			src={featuredImageSrc}
			alt={featuredImageAltText}
			class=" object-cover w-full max-h-128 h-min mb-6"
		/>
		<div class="prose prose-xl max-w-none">
			<SvelteMarkdown source={markdownData} />
		</div>
	{/if}
</section>
