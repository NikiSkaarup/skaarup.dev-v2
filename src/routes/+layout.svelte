<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="container mx-auto grow">
	<slot />
</main>

<footer class="py-10 flex flex-col justify-center items-center">
	<a href="/#">a</a>
</footer>
