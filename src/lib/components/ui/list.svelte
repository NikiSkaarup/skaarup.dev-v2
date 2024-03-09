<script>
	/** @type {string | null | undefined}*/
	let myClass = 'list-inside list-disc flex flex-col gap-2';

	export { myClass as class };
</script>

<ul class={myClass}>
	<slot />
</ul>
