<script>
	/**
	 * @type {number}
	 */
	let scrollY = 0;
	let lastScroll = 0;
	let isHeaderVisible = true;
	let offset = 200;
	export let tolerance = 10;
	/**
	 * @param {number} y
	 * @return {boolean}
	 */
	function IsHeaderVisible(y) {
		const dy = lastScroll - y;
		lastScroll = y;
        console.log(dy);
		if (y < offset) {
			return true;
		}

		if (Math.abs(dy) <= tolerance) {
			return isHeaderVisible;
		}

		if (dy < 0) {
			return false;
		}

		return true;
	}

	$: isHeaderVisible = IsHeaderVisible(scrollY);
</script>

<svelte:window bind:scrollY />

<section class=" z-50 fixed top-0 min-w-full bg-white {isHeaderVisible ? 'translate-y-0' : '-translate-y-full' } duration-300">
	<slot />
</section>
