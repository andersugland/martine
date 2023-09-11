<script>
	import Hero from '$lib/components/Hero.svelte';
	import FullWidthImage from '$lib/components/FullWidthImage.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import About from '../lib/components/About.svelte';
	import Contact from '../lib/components/Contact.svelte';

	export let data;

	$: ({ frontPage } = data);

	console.log(data);
</script>

<Hero title={frontPage?.title} excerpt={frontPage?.excerpt} />
<FullWidthImage width={2560} image={frontPage?.image} styling={''} />
<About title={frontPage?.about?.title} excerpt={frontPage?.about?.excerpt} />
{#if frontPage?.projectShowcase.projects.length}
	<Projects title={frontPage?.projectShowcase?.title} projects={frontPage?.projectShowcase.projects} />
{/if}
<Contact title={frontPage?.contact?.title} ctaText={frontPage?.contact?.ctaText} />