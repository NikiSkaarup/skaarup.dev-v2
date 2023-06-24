<script lang="ts">
	import '../app.postcss';
	import MyCursorEffect from '$lib/components/ui/mine/my-cursor-effect.svelte';
	import MyHeader from '$lib/components/ui/mine/my-header.svelte';
</script>

<svelte:head>
	<title>Niki Wix Skaarup</title>
</svelte:head>

<MyHeader />

<main class="py-4">
	<slot />
</main>

<MyCursorEffect />
