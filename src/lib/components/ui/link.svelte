<script>
	/** @type {string}*/
	export let href;

	/** @type {string | null | undefined}*/
	let myClass =
		'underline decoration-indigo-500 underline-offset-4 transition-all hover:decoration-2';

	/** @type {string | null | undefined}*/
	let target = undefined;
	/** @type {string | null | undefined}*/
	let rel = undefined;

	if (!href.startsWith('/')) {
		target = '_blank';
		rel = 'noopener noreferrer';
	}

	export { myClass as class };
</script>

<a {href} {target} {rel} class={myClass}>
	<slot />
</a>
