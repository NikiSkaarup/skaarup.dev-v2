<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="container mx-auto grow">
	<slot />
</main>

<!-- <footer class="flex flex-col items-center justify-center py-10">
	<a href="/#">a</a>
</footer> -->
