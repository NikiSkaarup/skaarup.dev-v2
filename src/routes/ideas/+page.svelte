<script>
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import UsesSection from '$lib/components/ui/uses-section.svelte';
</script>

<article class="content grid">
	<PageHeading>
		<svelte:fragment slot="title">Ideas</svelte:fragment>
		<p class="text-balance text-center">
			This is a <Link href="https://aboutideasnow.com/about">/ideas</Link> page with a list of
			ideas I want to work on.
		</p>
	</PageHeading>
	<UsesSection id="software" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Software</svelte:fragment>
		<List>
			<li class="max-w-prose">
				Public domain test data api, that can be used for testing and development.
				<p>
					There are a few of these out there like <Link
						href="https://rickandmortyapi.com/"
					>
						Rick and morty api
					</Link>.
				</p>
				<p>
					But I want to make one that is more generic, and includes more data types, like
					data uri fields with "data:image" or "data:image/svg+xml".
				</p>
			</li>
		</List>
	</UsesSection>
	<UsesSection id="games" class="ultrawide content grid bg-gray-700/40">
		<svelte:fragment slot="title">Games</svelte:fragment>
		<List>
			<li class="max-w-prose">
				Tower defense game.
				<p>
					Since they are one of those game genres, where you can fairly "quickly" put
					together a working game, and have loads of oppotunities for optimization to
					allow for more monsters and towers at once.
				</p>
				<p>
					And would be pretty cool to try and decouple rendering from the game logic, so
					even if the game logic is running slowly, it will still render at 60fps at least
					that is what I hope to achieve.
				</p>
			</li>
		</List>
	</UsesSection>
	<UsesSection id="inspiration" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Inspiration</svelte:fragment>
		<List>
			<li><Link href="https://aboutideasnow.com/about">What is a /ideas page</Link></li>
		</List>
	</UsesSection>
</article>
