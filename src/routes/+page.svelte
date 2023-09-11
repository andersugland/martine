<script>
	import Hero from '$lib/components/Hero.svelte';
	import FullWidthImage from '$lib/components/FullWidthImage.svelte';
	import Projects from '$lib/components/Projects.svelte';

	export let data;

	$: ({ frontPage } = data);

	console.log(data);
</script>

<Hero title={frontPage?.title} excerpt={frontPage?.excerpt} />
<FullWidthImage width={2560} image={frontPage?.image} styling={''} />
{#if frontPage?.projectShowcase.length}
	<Projects projects={frontPage?.projectShowcase} />
{/if}
