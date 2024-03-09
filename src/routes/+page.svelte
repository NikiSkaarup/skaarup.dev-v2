<script>
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import TitledSection from '$lib/components/ui/titled-section.svelte';

	const pages = [
		{ name: 'About', href: '/about' },
		{ name: 'Ideas', href: '/ideas' },
		{ name: 'Now', href: '/now' },
		{ name: 'Uses', href: '/uses' }
	];
</script>

<article class="content grid">
	<PageHeading>
		<svelte:fragment slot="title">Typing...</svelte:fragment>
		<!-- <p class="text-balance text-center">...typing</p> -->
	</PageHeading>
	<TitledSection id="pages" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Pages</svelte:fragment>
		<List class="flex flex-row gap-2">
			{#each pages as page}
				<li><Link href={page.href}>{page.name}</Link></li>
			{/each}
		</List>
	</TitledSection>
</article>
