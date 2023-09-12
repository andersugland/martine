<script>
	import Image from '$lib/components/Image.svelte';
	export let image, width, styling;
</script>

<section class="grid">
	<Image {width} {image} {styling} />
</section>
