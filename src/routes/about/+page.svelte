<script>
	import MarkdownContent from '$lib/components/markdownContent.svelte';
	import about_markdown from '/src/pages/about.md?raw';
</script>

<MarkdownContent markdownData={about_markdown} />
