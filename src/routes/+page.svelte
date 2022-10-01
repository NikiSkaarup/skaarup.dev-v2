<script lang="ts">
	import GithubList from '../components/github/List.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center">
	<h1 class="uppercase">Welcome to your new SvelteKit app</h1>
	<GithubList />
</section>
