<script>
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import TitledSection from '$lib/components/ui/titled-section.svelte';
</script>

<article class="content grid">
	<PageHeading>
		<svelte:fragment slot="title">About</svelte:fragment>
		<p class="text-balance text-center">
			This is a <Link href="https://aboutideasnow.com/about">/about</Link> page with a general
			overview of who I think I am.
		</p>
	</PageHeading>
	<TitledSection id="whoami" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Who am I?</svelte:fragment>
		<p>I'm a developer who loves to write code, learn new things</p>
	</TitledSection>
	<TitledSection id="inspiration" class="ultrawide content grid bg-gray-700/40">
		<svelte:fragment slot="title">Inspiration</svelte:fragment>
		<List>
			<li><Link href="https://aboutideasnow.com/about">What is an /about page</Link></li>
		</List>
	</TitledSection>
</article>
