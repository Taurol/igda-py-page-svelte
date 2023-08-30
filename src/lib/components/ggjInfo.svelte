<script>
    let isBannerVisible = true;

    function HideBanner()
    {
        isBannerVisible = false;
    }
</script>
<section class="{isBannerVisible ? 'block' : 'hidden'}">
	<div class=" align-middle w-full bg-blue-950 p-4 sm:p-10 rounded-lg">
		<button on:click={HideBanner} class=" bg-red-200 p-1 rounded-full shadow-lg absolute right-0 top-0 translate-x-1/3 -translate-y-1/3"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		<h1 class="font-bold text-xl sm:text-3xl text-slate-50 mb-4 sm:mb-6 text-center">
			GLOBAL GAME JAM 2021
		</h1>
		<h2 class="font-normal text-sm sm:text-lg text-slate-50 mb-4 sm:mb-6 text-center">
			¿Estás preparado para crear un videojuego en 48h?
		</h2>
		<div
			class=" w-40 rounded-md h-10 bg-blue-500 m-auto object-center flex items-center justify-center"
		>
			<a href="/eventos/ggj2021" class="font-semibold text-sm text-white">MÁS INFORMACIÓN</a>
		</div>
	</div>
</section>
