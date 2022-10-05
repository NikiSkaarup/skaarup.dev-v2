<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Card from '$lib/Card.svelte';
	import GithubList from '$lib/github/List.svelte';
	import EmploymentList from '$lib/employment/List.svelte';
	import ProjectList from '$lib/projects/List.svelte';
	import LinkList from '$lib/links/List.svelte';
</script>

<svelte:head>
	<title>Niki Wix Skaarup</title>
	<meta name="description" content="" />
</svelte:head>

<section class="flex flex-col justify-center items-center gap-4">
	<div
		class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full p-2"
	>
		<Card>
			<h2 class="font-semibold" slot="title">Github Repos</h2>
			<GithubList respositories={data.repositories} />
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Employement</h2>
			<EmploymentList />
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Projects</h2>
			<ProjectList />
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Links</h2>
			<LinkList />
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
	</div>
</section>
