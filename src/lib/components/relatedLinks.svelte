<script>
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';
	const pb = new PocketBase('https://igda-py.pockethost.io');
    /**
	 * @type {import("pocketbase").RecordModel[]}
	 */
    let relatedLinks;
	async function loadRelatedLinks() {
		const records = await pb.collection('related_links').getFullList({
			sort: '-created'
		});
		return records;
	}
    onMount( async () => {
		relatedLinks = await loadRelatedLinks();
	});
</script>

<section
	class="flex flex-col items-start border-2 border-slate-200 shadow-md p-6 max-w-xs w-full h-96"
>
	<h3 class="text-center font-extrabold text-lg text-gray-900 w-full">ENLACES RELACIONADOS</h3>
	<div class="divide-y divide-y-reverse flex flex-col gap-4">
		<div class="mb-1" />
        {#if relatedLinks === undefined}
            <p>Cargando...</p>
        {:else} 
        {#each relatedLinks as relatedLink}
        <a href={relatedLink["url"]} class=" text-left text-gray-600 font-medium">{relatedLink["display_text"]}</a>
    	{/each}
		{/if}
	</div>
</section>
