<script>
	export let portableText;

	$: ({ value } = portableText);
</script>

<span class="text-blue-500">
	<slot />
</span>
