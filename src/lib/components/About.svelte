<script>
	export let title, excerpt;
</script>

<section class="mt-md dark:mt-0 dark:-mb-md dark:py-md dark:bg-dark dark:text-offwhite">
	<div class="container px-4 grid md:grid-cols-12 items-center">
		<div class="col-span-full md:col-start-4 md:col-span-9 lg:col-start-6 lg:col-span-7">
			<h2 class="text-2xl-clamp leading-[1.15em]">{title}</h2>
			<p class="text-md font-thin mt-sm">{excerpt}</p>
		</div>
	</div>
</section>