<script>
	export let nombre = '';
	export let descripcion = '';
	export let imagenSrc = '';
	export let link = ';';
</script>

<div class="flex sm:flex-row flex-col justify-center items-center sm:items-start gap-10 p-6">
	<div class="shadow-lg">
		<a href={link} target="_blank">
			<img src={imagenSrc} alt="Logo Empresa" class="w-64 sm:w-full rounded-xl " />
		</a>
	</div>
	<div class="max-w-2xl w-64 sm:w-3/4 text-center sm:text-start">
		<h4 class="font-bold text-2xl mb-4">{nombre}</h4>
		<p class=" font-normal text-lg"><small>{descripcion}</small></p>
	</div>
</div>
