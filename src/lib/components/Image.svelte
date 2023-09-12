<script>
	import { urlFor } from '$lib/utils/image';

	export let image, width, styling;
</script>

{#if width}
	<img src={urlFor(image).width(width).url()} alt="" class={`w-full h-full object-cover ${styling}`} />
{:else}
	<img src={urlFor(image).url()} alt="" class={`w-full h-full max-h-full object-cover ${styling}`} />
{/if}
