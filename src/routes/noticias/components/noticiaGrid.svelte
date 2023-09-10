<section class=" max-w-5xl w-full flex flex-col items-center lg:items-start gap-6">
    <h2 class="text-4xl font-bold ">Noticias</h2>
    <div class=" grid grid-cols-1 xl:grid-cols-2 gap-6">
        {#each noticias as noticia}
        <NoticiaPreview previewTitle={noticia["title"]} previewDescription={noticia["description"]}></NoticiaPreview> 
        {/each}
    </div>
</section>

<script>
	import NoticiaPreview from "./noticiaPreview.svelte";

    let noticias = [{"title":"Titulo","description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nihil asperiores rerum aut et consectetur quas nam quaerat quo mollitia."}
    ,{"title":"Titulo","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur doloribus mollitia blanditiis dolores iste veritatis quasi, necessitatibus ullam consequuntur reprehenderit minus? Commodi officiis, unde magni aliquam, voluptatibus provident rem soluta a molestias culpa assumenda et? Voluptate qui labore odio odit id magnam repellendus distinctio laudantium quisquam, illo voluptatem consequuntur!"},
    {"title":"Titulo","description":"Descripcion"},
    {"title":"Titulo","description":"Descripcion"},
    {"title":"Titulo","description":"Descripcion"}];

</script>