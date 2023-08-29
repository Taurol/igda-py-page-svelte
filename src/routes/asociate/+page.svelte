<script>
	import Empresa from './empresa.svelte';
	const logoCreadoresSrc = 'assets/images/miembros/creadores.jpg';
	const linkCreadores = 'http://www.creadores.com.py/';
	const descripcionCreadores =
		'CREADORES fue fundada en el año 2010, como el primer estudio de videojuegos del Paraguay, para luego expandir su cartera de servicios a otras unidades de negocio. Se especializa en desarrollo de advergames. Su misión es crear relaciones largas y duraderas entre organizaciones, empresas, marcas y sus consumidores.  Ve al entorno digital como el motor de la innovación.';

	const logoPosibilianSrc = 'assets/images/miembros/posibillian.png';
	const linkPosibilian = 'http://www.posibillian.tech/';
	const descripcionPosibilian =
		"Posibillian Tech es una desarrolladora de videojuegos y apps móviles especializada en geolocalización y multijugador. Además de desarrollar juegos propios como 'Fhacktions' (450.000 mil descargas y múltiples premios internacionales), realiza trabajos de desarrollo tercerizado para clientes en el extranjero. Posee vasta experiencia en desarrollo en UNITY, JAVA, OSM, Google Maps e integraciones con diversas plataformas.";

	const logoRootSrc = 'assets/images/miembros/rootstudio.png';
	const linkRoot = 'https://rootstudio.net/';
	const descripcionRoot =
		"Root Studio, fundado en 2018, es un estudio independiente de videojuegos formado por Ingrid Peñailillo y Jesús González, profesionales de la industria de videojuegos. Luego de varios años participando en la comunidad internacional de game jams, comenzaron a trabajar en su primer proyecto comercial, 'The Tribe', un juego city building sobre antiguas civilizaciones latinoamericanas. El juego se encuentra en etapa de desarrollo, con miras a exportación y publicación en tiendas.";

	const logoRoshkaSrc = 'assets/images/miembros/roshkastudios.png';
	const linkRoshka = 'https://roshkastudios.com/';
	const descripcionRoshka =
		"Roshka Studios es la división de videojuegos de 'Roshka', una reconocida empresa local que desarrolla sistemas y aplicaciones para varios clientes del sector financiero. Lleva publicado varios juegos en el APPLE STORE y PLAY STORE, algunos de ellos siendo destacados en las tiendas, además trabajó con PUBLISHERS como APPSOLUTE GAMES y SPIL GAMES. Actualmente realiza proyectos propios enfocados para todo público, así como también proyectos y trabajos por encargo.";

	const logoWaraniSrc = 'assets/images/miembros/warani.png';
	const linkWarani = 'https://www.waranistudios.com';
	const descripcionWarani =
		'Waraní Studios es una empresa paraguaya de Desarrollo de videojuegos orientada a juegos de alta calidad para PC y Consolas. Es la primera empresa paraguaya en tener el sello de distribución y desarrollo de Sony Entertainment para sus consolas. Creadores de juegos como Guerra del Chaco, Malavision: El Origen, SuperChicos, Legion Z, etc. ';
</script>

<section class=" bg-slate-100 py-6 flex justify-center">
    <div class=" max-w-6xl w-full py-5 px-6">
        <h1 class="text-2xl font-bold mb-4 text-center sm:text-left">Miembros</h1>
        <h2 class="text-4xl font-bold text-indigo-600 mb-4 h-16 text-center sm:text-left">Empresas miembros</h2>
        <Empresa
            nombre="Creadores"
            descripcion={descripcionCreadores}
            imagenSrc={logoCreadoresSrc}
            link={linkCreadores}
        />
        <Empresa
            nombre="Posibilian Tech"
            descripcion={descripcionPosibilian}
            imagenSrc={logoPosibilianSrc}
            link={linkPosibilian}
        />
        <Empresa
            nombre="Root Studio"
            descripcion={descripcionRoot}
            imagenSrc={logoRootSrc}
            link={linkRoot}
        />
        <Empresa
            nombre="Roshka Studios"
            descripcion={descripcionRoshka}
            imagenSrc={logoRoshkaSrc}
            link={linkRoshka}
        />
        <Empresa
            nombre="Warani Studios"
            descripcion={descripcionWarani}
            imagenSrc={logoWaraniSrc}
            link={linkWarani}
        />
    
        <h2 class=" text-4xl font-bold text-indigo-700 my-4 text-center sm:text-left">¡Asociate!</h2>
    
        <div class="text-lg text-center sm:text-left">
            <p class="text-slate-900 font-bold mb-4">
                ¡Sé parte de la comunidad de desarrolladores de videojuegos de Paraguay y aprovechá los
                BENEFICIOS exlusivos!
            </p>
            <p>
                Acceso a becas, descuentos en cursos, espacios en distintos eventos, charlas con
                desarrolladores destacados de afuera, viajes a eventos, oportunidades de networking con
                PUBLISHERS y mucho más!
            </p>
            <p>Costo: <b>300.000gs anual</b></p>
            <p>Una vez completado el formulario, un miembro se pondrá en contacto con usted.</p>
        </div>
    
        <form action="https://formspree.io/f/xknlrlbp" method="POST">
            <div class=" flex flex-col gap-4 my-6">
                <input
                class="border-solid border rounded-md h-10 w-full max-w-lg p-2"
                type="text"
                name="name"
                placeholder="Nombre"
            />
            <input
                class="border-solid border rounded-md h-10 w-full max-w-lg p-2"
                type="text"
                name="apellido"
                placeholder="Apellido"
            />
    
            <input
                class="border-solid border rounded-md h-10 w-full max-w-lg p-2"
                type="email"
                name="_replyto"
                placeholder="Correo electronico"
            />
    
            <input
                class="border-solid border rounded-md h-10 w-full max-w-lg p-2"
                type="number"
                name="telefono"
                placeholder="Teléfono"
            />
    
            <textarea rows="8" class="p-2 w-full mb-6" name="message" placeholder="Mensaje" />
                <div class="w-full flex justify-center">
                    <input
                        class=" w-full max-w-xs bg-emerald-500 text-white rounded-md h-8 font-semibold text-md"
                        type="submit"
                        value="Enviar"
                    />
                </div>
            </div>
            
        </form>
    </div>
	
</section>
