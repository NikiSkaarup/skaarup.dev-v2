<script>
	/** @type {string | null | undefined}*/
	let myClass = 'list-inside list-disc space-y-2';

	export { myClass as class };
</script>

<ul class={myClass}>
	<slot />
</ul>
