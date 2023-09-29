<script>
	import { urlFor } from '$lib/utils/image';
	import Image from '$lib/components/Image.svelte';
	export let image, width, height, quality, styling;
</script>

<section class="grid">
	<Image {width} {height} {image} {styling} {quality} />
</section>
