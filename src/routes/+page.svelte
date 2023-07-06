<script lang="ts">
	export let data;
</script>

{#each data.posts as post (post.slug)}
	<article>
		<header class="container mx-auto w-full space-y-4 px-4 py-8">
			<h1 class="hyphens-auto break-words text-center text-3xl">{post.title}</h1>
			<p class="mx-auto max-w-prose hyphens-auto break-words text-center">
				{post.snippet}
			</p>
			<div class="mx-auto max-w-prose">
				<a
					class="inline-block py-2 underline decoration-indigo-500 underline-offset-4 transition-all hover:decoration-2"
					href="/post/{post.slug}"
				>
					Read post
				</a>
			</div>
		</header>
	</article>
{:else}
	<p class="text-center py-8">No posts yet.</p>
{/each}

<style lang="postcss">
	article:nth-of-type(even) {
		@apply bg-black;
	}
</style>
