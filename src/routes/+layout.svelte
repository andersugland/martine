<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let dark = true;

	console.log(dark);

	const handleClick = () => dark = !dark
</script>

<Header />
<button on:click={handleClick} class="bg-dark text-offwhite p-2 text-sm fixed">dark</button>
<main class={`${dark === true && 'dark'}`}>
	<slot />
</main>
<Footer />

