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
	<UsesSection id="working-on" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">What I'm working on</svelte:fragment>
		<List>
			<li>
				Filling out the <Link href="/about">/about</Link> page.
			</li>
			<li>
				Filling out the <Link href="/ideas">/ideas</Link> page.
			</li>
			<li>
				Filling out the <Link href="/now">/now</Link> page.
			</li>
			<li>
				Filling out the <Link href="/uses">/uses</Link> page.
			</li>
			<li class="max-w-prose">
				Stop testing this site in production. which requires setting up a second environment
				which is based on the development branch and switch the live site to be based on
				master.
			</li>
		</List>
	</UsesSection>
	<UsesSection id="reading" class="ultrawide content grid bg-gray-700/40">
		<svelte:fragment slot="title">What I'm reading</svelte:fragment>
		<p class="max-w-prose">
			I read mostly fantasy and science fiction, if that isn't your cup of tea, you can ignore
			this section.
		</p>
		<p class="max-w-prose">
			Since I go through somewhere between 130-170 books every year, so it will be more of a
			books that stuck around than a currently reading.
		</p>
	</UsesSection>
	<UsesSection id="inspiration" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Inspiration</svelte:fragment>
		<List>
			<li><Link href="https://nownownow.com/about">What is a /now page</Link></li>
		</List>
	</UsesSection>
</article>
