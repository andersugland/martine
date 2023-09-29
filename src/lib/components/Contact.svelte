<script>
	export let title, ctaText, email;
</script>

<section class="grid place-items-center mt-md md:mt-lg bg-dark text-offwhite selection:bg-offwhite selection:text-dark py-md md:py-lg">
	<div class="container px-4 grid md:grid-cols-12 items-center">
		<div class="col-span-full md:col-start-4 md:col-span-8">
			<h2 class="text-2xl-clamp leading-[1.15em]">{title}</h2>
			<a href={`mailto:${email}`} class="text-md font-thin border-b border-offwhite mt-sm block max-w-max">{ctaText}</a>
		</div>
	</div>
</section>
