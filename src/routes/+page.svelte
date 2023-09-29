<script>
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Image from '$lib/components/Image.svelte';

	export let data;

	$: ({ frontPage, settings } = data);

</script>

<Hero title={frontPage?.title} excerpt={frontPage?.excerpt} />

<!-- <div class="grid">
	
</div> -->
<About title={frontPage?.about?.title} excerpt={frontPage?.about?.excerpt} image={frontPage?.image} />
{#if frontPage?.projectShowcase.projects.length}
	<Projects title={frontPage?.projectShowcase?.title} projects={frontPage?.projectShowcase.projects} />
{/if}
<Contact title={frontPage?.contact?.title} ctaText={frontPage?.contact?.ctaText} email={settings?.email} />
