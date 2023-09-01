<script>
	import SvelteMarkdown from 'svelte-markdown';
    /**
	 * @type {any}
	 */
     export let markdownData;
</script>

<section class=" bg-slate-100 flex justify-center">
	<div class=" max-w-6xl w-full py-5 px-6">
		<div class=" w-full my-10">
			<div class="prose prose-xl max-w-none">
				<SvelteMarkdown source={markdownData}/>
			</div>
		</div>
		
	</div>
</section>




