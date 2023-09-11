<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let projects;
</script>

<section class="container px-4 md:px-8 mt-48">
	<ul class="grid grid-cols-12 gap-20">
		{#each projects as project, i}
			<li class={`${i % 2 === 0 ? 'col-start-2' : 'col-start-1'} col-span-11 grid gap-x-[30px]`}>
				<ProjectCard title={project?.title} excerpt={project?.excerpt} image={project?.image} date={project?.date} index={i} />
			</li>
		{/each}
	</ul>
</section>
