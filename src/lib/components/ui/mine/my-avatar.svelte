<script lang="ts">
	import portrait from '$lib/../images/portrait-greyscale.png';
	import Noise from './noise.svelte';
	export let id: string;
	const noiseId = id + '-noise';
</script>

<Noise id={noiseId} begin="{id}.mouseenter" />
<div {id} class="rounded-full overflow-hidden h-12 aspect-square">
	<img
		loading="eager"
		class="object-cover h-full aspect-square"
		src={portrait}
		alt="portrait"
		style="filter: url(#{noiseId});"
	/>
</div>
