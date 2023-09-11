<script>
	import Image from '$lib/components/Image.svelte';
	export let image, width, styling;
</script>

<section class="grid h-[450px] md:h-[650px] xl:h-[900px] mt-48">
	<Image {width} {image} {styling} />
</section>
