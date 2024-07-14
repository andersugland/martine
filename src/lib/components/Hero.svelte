<script>
	import { onMount } from 'svelte';
	export let title, excerpt;

	let titleVisible = false;
	let excerptVisible = false;

	onMount(() => {
		setTimeout(() => {
			titleVisible = true;
		}, 300);
		setTimeout(() => {
			excerptVisible = true;
		}, 600);
	});
</script>

<section class="container px-4 min-h-screen grid items-center">
	<div class="grid md:grid-cols-12 items-center">
		<h1 class="text-3xl-clamp leading-[1.15em] col-span-full fade {titleVisible ? 'fade-in' : 'fade-out'}">{title}</h1>
		<div class="md:col-start-2 md:col-span-10 text-[1.25rem] md:text-md font-thin mt-sm md:mt-md ml-4 md:ml-0 fade {excerptVisible ? 'fade-in' : 'fade-out'}">
			<p class="border-l-2 border-dark pl-4 md:pl-10">{excerpt}</p>
		</div>
	</div>
</section>
