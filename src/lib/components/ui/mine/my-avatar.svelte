<script lang="ts">
	import portrait from '$lib/../images/portrait-greyscale_48x48.png';
	import Noise from './noise.svelte';
	export let id: string;
	$: noiseId = id + '-noise';
</script>

<Noise id={noiseId} begin="{id}.mouseenter" />
<div {id} class="aspect-square h-12 overflow-hidden rounded-full">
	<img
		loading="eager"
		class="aspect-square h-full object-cover"
		src={portrait}
		alt="portrait"
		style="filter: url(#{noiseId});"
	/>
</div>
