<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Niki Wix Skaarup</title>
</svelte:head>

<Header />

<main class="container mx-auto grow">
	<slot />
</main>

<!-- <footer class="flex flex-col items-center justify-center py-10">
	<a href="/#">a</a>
</footer> -->
