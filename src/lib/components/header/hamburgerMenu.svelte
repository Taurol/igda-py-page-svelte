<script>
	import { clickOutside } from '$lib/clickOutsideElement.js';

    let isMenuToggled = false;
	/**
	 * @param {any} event
	 */
	function handleClickOutside(event) {
        console.log("Click outside");
        if(isMenuToggled) isMenuToggled = false;
	}
    /**
	 * @param {any} event
	 */
    function handleClickInside(event) {
        console.log("Click inside");
        isMenuToggled = false;
	}

	function toggleMenu() {
		isMenuToggled = !isMenuToggled;
	}
</script>
<section use:clickOutside on:click_outside={handleClickOutside}>

    <nav class="bg-white dark:bg-gray-800 dark:border-gray-700 h-32 lg:hidden">
        <div class="max-w-screen-xl flex flex-row items-center justify-between h-full px-5">
            <a href="/">
                <img src="assets/logo.png" alt="Logo IGDA Py" class="inline-block" />
            </a>
            <button
                on:click={toggleMenu}
                type="button"
                class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-hamburger"
                aria-expanded="false"
            >
                <span class="sr-only">Abrir menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
    </nav>
    
    <div use:clickOutside on:click_inside={handleClickInside}
        class="{isMenuToggled ? '' : 'hidden'} w-full flex flex-col items-end text-center mb-4"
        id="navbar-hamburger"
    >
        <ul
            class="w-full flex flex-col gap-4 font-medium mt-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        >
            <li>
                <a
                    href="/"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    aria-current="page">INICIO</a
                >
            </li>
            <li>
                <a
                    href="/about"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >NOSOTROS</a
                >
            </li>
            <li>
                <a
                    href="/contacto"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >CONTACTO</a
                >
            </li>
            <li>
                <a
                    href="/beneficios"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >BENEFICIOS</a
                >
            </li>
            <li>
                <a
                    href="/eventos"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >EVENTOS</a
                >
            </li>
            <li>
                <a
                    href="/asociate"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >MIEMBROS</a
                >
            </li>
        </ul>
    </div>
    
</section>