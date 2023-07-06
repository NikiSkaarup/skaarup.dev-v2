<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={$$props.class}>
	<slot />
</a>
