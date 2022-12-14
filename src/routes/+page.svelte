<script lang="ts">
	import Card from '$lib/Card.svelte';
	import GithubList from '$lib/github/List.svelte';
	import EmploymentList from '$lib/employment/List.svelte';
	import LinkList from '$lib/links/List.svelte';

	const cards = [
		{
			title: 'Github Repos',
			component: GithubList
		},
		{
			title: 'Links',
			component: LinkList
		},
		{
			title: 'Employment',
			component: EmploymentList
		}
	];
</script>

<svelte:head>
	<title>Niki Wix Skaarup</title>
</svelte:head>

<section class="flex flex-col items-center justify-center gap-4">
	<div class="grid w-full grid-flow-row grid-cols-1 gap-4 p-2 lg:grid-cols-2 xl:grid-cols-3">
		{#each cards as card}
			<Card>
				<h2 class="font-semibold" slot="title">{card.title}</h2>
				<svelte:component this={card.component} />
			</Card>
		{/each}
	</div>
</section>
