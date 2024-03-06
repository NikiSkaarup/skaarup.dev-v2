<script>
	import '$lib/../app.css';
	import CursorEffect from '$lib/components/ui/cursor-effect.svelte';
	import Header from '$lib/components/ui/header.svelte';
	import Head from '$lib/components/ui/head.svelte';
</script>

<Head />

<Header />

<main>
	<slot />
</main>

<CursorEffect />
