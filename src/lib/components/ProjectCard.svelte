<script>
	import Image from './Image.svelte';

	export let title, excerpt, image, date, index;

	console.log('date', date);
</script>

<div class={`md:flex md:gap-20 items-center ${index % 2 === 0 && 'flex-row-reverse'}`}>
	<div class="flex-1">
		<h3 class="text-lg md:text-xl !leading-none">{title}</h3>
		{#if date}
			<div class="flex text-md font-thin !leading-none pt-2 pb-4 max-w-max border-b border-dark">
				{#if date.startDate && date.endDate}
					<p>{date.startDate} — {date.endDate}</p>
				{:else}
					<p>{date.startDate} — Nåværende</p>
				{/if}
			</div>
		{/if}
		<p class="mt-8">{excerpt}</p>
	</div>
	<div class="flex-1 w-[600px] h-[600px] bg-dark rounded-lg">
		<Image {image} />
	</div>
</div>
