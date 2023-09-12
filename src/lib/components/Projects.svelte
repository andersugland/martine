<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let title, projects;
</script>

<section class="container px-4 md:px-8 mt-md md:mt-lg">
	<div class="grid lg:grid-cols-12">
		<div class="lg:col-start-2 lg:col-span-10 text-md font-thin mt-sm md:mt-md">
			<h2 class="text-2xl-clamp leading-[1.15em] max-w-[12ch]">{title}</h2>
		</div>
	</div>
	<ul class="grid lg:grid-cols-2 xl:grid-cols-12 gap-md lg:gap-y-lg mt-md lg:mt-[150px] xl:mt-[200px]">
		{#each projects as project, i}
			<ProjectCard title={project?.title} excerpt={project?.excerpt} image={project?.image} date={project?.date} index={i} />
		{/each}
	</ul>
</section>
