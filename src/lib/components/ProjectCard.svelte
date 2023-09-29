<script>
	import Image from './Image.svelte';

	export let title, excerpt, image, date, index;

	function formatDate(date) {
		return new Date(date).toLocaleDateString('no-NO', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
	}

</script>

<li class={`${index % 2 === 0 ? 'xl:col-start-1' : 'xl:col-start-2'} lg:col-span-full xl:col-span-11 grid`}>
	<div class={`flex flex-col-reverse lg:flex-row gap-sm lg:gap-md lg:items-center ${index % 2 !== 0 && 'lg:flex-row-reverse'}`}>
		<div class="lg:flex-1">
			<h3 class="text-lg md:text-xl !leading-none max-w-[12ch]">{title}</h3>
			{#if date.startDate}
				<div class="flex text-base md:text-md md:font-thin !leading-none pt-2 pb-1 max-w-max border-b border-dark">
					{#if date.startDate && date.endDate}
						<p>{formatDate(date.startDate)} — {formatDate(date.endDate)}</p>
					{:else}
						<p>{formatDate(date.startDate)} — Nåværende</p>
					{/if}
				</div>
			{/if}
			<p class="mt-4 lg:md-8">{excerpt}</p>
		</div>
		<div class="lg:flex-1 aspect-square">
			<Image maxWidth={1024} maxHeight={1024} {image} quality={100} styling="w-full h-full object-cover rounded-lg" />
		</div>
	</div>
</li>
