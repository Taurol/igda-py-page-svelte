<script>
	import MarkdownContent from '$lib/components/markdownContent.svelte';
	import eventos_markdown from '/src/pages/eventos.md?raw';
</script>

<MarkdownContent markdownData={eventos_markdown} />