<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	export let data;

	$: ({ settings } = data);
</script>

<svelte:head>
	<title>{settings?.siteTitle}</title>
</svelte:head>

<Header email={settings?.email} />
<main class="overflow-x-hidden">
	<slot />
</main>
<Footer />
