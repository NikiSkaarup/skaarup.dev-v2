<script lang="ts">
	import GithubList from '../components/github/List.svelte';
	import EmploymentList from '../components/employment/List.svelte';
	import Card from '../components/Card.svelte';
	import portrait from '../images/portrait-greyscale.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center gap-4">
	<div class="flex flex-col-reverse md:flex-row flex-nowrap items-center gap-4">
		<h1 class="uppercase">Niki Wix Skaarup</h1>
		<img class="rounded-full w-48 h-48 md:w-24 md:h-24" src={portrait} alt="Portrait" />
	</div>

	<div
		class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full"
	>
		<Card>
			<h2 class="font-semibold" slot="title">Employement</h2>
			<EmploymentList />
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Github Repos</h2>
			<GithubList />
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
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
		<Card>
			<h2 class="font-semibold" slot="title">Placeholder</h2>
		</Card>
	</div>
</section>
