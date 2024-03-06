<script>
	/** @type {string | undefined}*/
	export let id = undefined;
</script>

<section class="odd:bg-black">
	<div class="mx-auto w-full py-8 px-4 xl:max-w-7xl">
		<div class="mx-auto max-w-prose space-y-4 hyphens-auto break-words">
			<h2 {id} class="scroll-m-24 text-2xl">
				<slot name="title" />
			</h2>

			<slot />
		</div>
	</div>
</section>
