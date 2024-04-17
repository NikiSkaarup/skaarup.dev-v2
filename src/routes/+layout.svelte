<script>
	import '$lib/../app.css';
	import CursorEffect from '$lib/components/ui/cursor-effect.svelte';
	import Head from '$lib/components/ui/head.svelte';
	import Header from '$lib/components/ui/header.svelte';

	/** @type {{children?: import('svelte').Snippet;}} */
	let { children } = $props();
</script>

<Head />

<Header />

<main id="main-content">
	{#if children}
		{@render children()}
	{/if}
</main>

<CursorEffect />
