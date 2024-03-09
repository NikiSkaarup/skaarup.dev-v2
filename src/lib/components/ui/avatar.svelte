<script>
	import portrait from '$lib/../images/portrait-greyscale_48x48.png';
	import Noise from './noise.svelte';
	/** @type {string}*/
	export let id;
	$: noiseId = id + '-noise';

	/** @type {string}*/
	let myClass = '';

	export { myClass as class };
</script>

<Noise id={noiseId} begin="{id}.mouseenter" />
<div {id} class="aspect-square rounded-full contain-strict {myClass}">
	<img
		loading="eager"
		class="aspect-square h-full object-cover"
		src={portrait}
		alt="portrait"
		style="filter: url(#{noiseId});"
	/>
</div>
