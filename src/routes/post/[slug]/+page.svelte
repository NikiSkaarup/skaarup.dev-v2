<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	export let data;

	const plugins = [gfmPlugin];
</script>

<article>
	<header class="container mx-auto w-full px-4 py-8 space-y-4">
		<h1 class="text-3xl text-center hyphens-auto break-words">{data.title}</h1>
		<p class="mx-auto max-w-prose hyphens-auto break-words text-center">
			{data.snippet}
		</p>
	</header>

	{#each data.content as md, i}
		<section class:bg-black={i % 2 === 0}>
			<div class="container mx-auto px-4 py-8 w-full">
				<div class="mx-auto max-w-prose hyphens-auto break-words">
					<Markdown {md} {plugins} />
				</div>
			</div>
		</section>
	{/each}
</article>
