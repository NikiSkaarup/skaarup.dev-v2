<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<section>
	<div class="container mx-auto w-full px-4 py-8">
		<div class="mx-auto max-w-prose space-y-4 hyphens-auto break-words">
			<h2 {id} class="scroll-m-24 text-2xl">
				<slot name="title" />
			</h2>

			<slot />
		</div>
	</div>
</section>

<style lang="postcss">
	section:nth-of-type(odd) {
		@apply bg-black;
	}
</style>
