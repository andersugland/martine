<script>
	import Image from '$lib/components/Image.svelte';
	export let image, width, styling;
</script>

<section class="grid h-[450px] md:h-[600px] xl:h-[750px]">
	<Image {width} {image} {styling} />
</section>
