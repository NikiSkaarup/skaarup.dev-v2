<script>
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import UsesSection from '$lib/components/ui/uses-section.svelte';
</script>

<article class="content grid">
	<PageHeading>
		<svelte:fragment slot="title">Now</svelte:fragment>
		<p class="text-balance text-center">
			This is a <Link href="https://nownownow.com/about">/now</Link> page with a list of things
			I'm currently doing.
		</p>
	</PageHeading>
	<UsesSection id="editor" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">What I'm working on</svelte:fragment>
		<List>
			<li>Fixing up this site.</li>
		</List>
	</UsesSection>
	<UsesSection id="inspiration" class="full-width content grid bg-gray-700/40">
		<svelte:fragment slot="title">Inspiration</svelte:fragment>
		<List>
			<li><Link href="https://nownownow.com/about">What is a /now page</Link></li>
		</List>
	</UsesSection>
</article>
