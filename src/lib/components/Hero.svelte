<script>
	export let title, excerpt;
</script>

<section class="container px-4 grid grid-cols-12">
	<h1 class="text-3xl col-span-full">{title}</h1>
	<div class="col-start-2 col-span-8 text-md font-thin border-l-4 border-dark pl-10">
		<p>{excerpt}</p>
	</div>
</section>
