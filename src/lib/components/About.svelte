<script>
	import Image from '$lib/components/Image.svelte';


	export let title, excerpt, image;
</script>

<section class="flex flex-col mt-0 bg-dark text-offwhite selection:bg-offwhite selection:text-dark">
	<Image maxWidth={2560} maxHeight={1440} image={image} quality={100} styling="w-full h-full aspect-square md:aspect-auto max-h-[550px] md:max-h-[750px] object-cover" />
	
	<div class="container px-4 pt-md pb-md md:pb-[150px] grid md:grid-cols-12 items-center">
		<div class="col-span-full md:col-start-4 md:col-span-9 lg:col-start-6 lg:col-span-7 ">
			<h2 class="text-2xl-clamp leading-[1.15em]">{title}</h2>
			<p class="text-base md:text-md font-thin mt-sm">{excerpt}</p>
		</div>
	</div>
</section>