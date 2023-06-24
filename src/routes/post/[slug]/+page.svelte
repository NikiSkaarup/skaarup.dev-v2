<script lang="ts">
	export let data;
</script>

<article>
	<header class="container mx-auto w-full px-4 py-8 space-y-4">
		<h1 class="text-3xl text-center hyphens-auto break-words">{data.title}</h1>
		<p class="mx-auto max-w-prose hyphens-auto break-words text-center">
			{data.snippet}
		</p>
	</header>

	{#each data.content as section, i}
		<section class:bg-black={i % 2 === 0}>
			<div class="container mx-auto px-4 py-8 w-full space-y-4">
				{#each section as paragraph}
					<p class="mx-auto max-w-prose hyphens-auto break-words">
						{paragraph}
					</p>
				{/each}
			</div>
		</section>
	{/each}
</article>
