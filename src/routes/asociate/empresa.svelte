<script>
    export let nombre = "";
    export let descripcion = "";
    export let imagenSrc = "";
    export let link = ";"
</script>
<div class=" flex flex-col p-6">
    <div class="flex md:flex-row flex-col justify-center gap-10">
        <div class="flex-initial w-96 rounded-xl shadow-lg">
            <a href={link} target="_blank">
            <img src={imagenSrc} alt="Logo Empresa"/>
        </a>
        </div>
        <div class=" max-w-2xl">
            <h4 class="font-bold text-2xl mb-4">{nombre}</h4>
            <p class=" font-normal text-lg"><small>{descripcion}</small></p>
        </div>
    </div>
    <br>
</div>