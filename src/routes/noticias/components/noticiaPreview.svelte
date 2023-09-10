<script>
	export let previewTitle = '';
	export let previewDescription = '';
	const maxDescriptionLenght = 240;
	if (previewDescription.length > maxDescriptionLenght) {
		previewDescription = previewDescription.substring(0, maxDescriptionLenght) + '...';
	}
</script>

<article class="flex flex-col gap-4 items-center max-w-md w-full h-[31rem] p-4 rounded-lg border-2 shadow-lg">
	<img src="https://picsum.photos/200" alt="Banner de Noticia" class=" object-cover h-64 w-full rounded-lg" />
	<div class="px-6 w-full">
		<a href="/"><h2 class="text-2xl text-center sm:text-left font-bold w-full mb-2 hover:underline">{previewTitle}</h2></a>
		<p class=" text-slate-500">{previewDescription}</p>
	</div>
</article>
