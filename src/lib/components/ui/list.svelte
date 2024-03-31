<script>
	/** @type {{class?: string | undefined | null; children: import('svelte').Snippet}} */
	let { class: className, children } = $props();
</script>

<ul class="flex list-inside list-disc flex-col gap-2 {className}">
	{@render children()}
</ul>
