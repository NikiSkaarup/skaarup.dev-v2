<script>
	/** @type {string}*/
	export let href;

	/** @type {string | null | undefined}*/
	let myClass =
		'underline decoration-indigo-500 underline-offset-4 transition-all hover:decoration-2';

	export { myClass as class };
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={myClass}>
	<slot />
</a>
