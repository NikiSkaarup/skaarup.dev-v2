<script>
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { dev } from '$app/environment';

	const top = spring(100, {
		stiffness: 0.005,
		damping: 0.99,
		precision: 0.7
	});
	const left = spring(300, {
		stiffness: 0.005,
		damping: 0.99,
		precision: 0.7
	});

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & Window; }} event
	 */
	function mousemove(event) {
		const ih = window.innerHeight;
		const iw = window.innerWidth;
		const cw = effect.clientWidth / 2;
		const ch = effect.clientHeight / 2;
		const l = event.clientX - cw;
		const t = event.clientY - ch;

		top.set(t > ih ? ih : t < -ch ? -ch : t);
		left.set(l > iw ? iw : l < -cw ? -cw : l);
	}

	/** @type {HTMLDivElement}*/
	let effect;
</script>

<svelte:window on:mousemove={mousemove} />

<div
	transition:fade={{ duration: 2000 }}
	class="pointer-events-none fixed inset-0 -z-10 contain-strict"
>
	{#if dev}
		<div
			class="fixed right-2 bottom-2 flex flex-col items-end font-mono text-xs opacity-40 contain-paint"
		>
			<span>{$left.toFixed()} x</span>
			<span>{$top.toFixed()} y</span>
		</div>
	{/if}
	<div
		bind:this={effect}
		class="absolute top-0 left-0 h-fit w-fit origin-center translate-[0] transform-gpu blur-3xl filter will-change-transform contain-paint"
		style="--tw-translate-x: {$left.toFixed()}px; --tw-translate-y: {$top.toFixed()}px;"
	>
		<div
			class="grid animate-spin items-center justify-center"
			style="animation-duration: 300s;"
		>
			<div
				class="-ml-[7.5vw] h-[20vw] w-[65vw] animate-spin rounded-full bg-gradient-to-r from-indigo-500 from-0% via-purple-500 via-50% to-violet-500 to-100% opacity-20"
				style="animation-duration: 180s;"
			/>
			<div
				class="-mt-[15vw] h-[50vw] w-[30vw] animate-spin rounded-full bg-gradient-to-r from-indigo-500 from-0% via-purple-500 via-50% to-violet-500 to-100% opacity-20"
				style="animation-duration: 100s;"
			/>
			<div
				class="ml-[7.5vw] h-[70vw] w-[25vw] animate-spin rounded-full bg-gradient-to-r from-violet-950 from-0% to-indigo-800 to-100% opacity-50"
				style="animation-duration: 120s;"
			/>
			<div
				class="mt-[15vw] h-[40vw] w-[40vw] animate-spin rounded-full bg-gradient-to-r from-purple-950 from-0% to-indigo-800 to-100% opacity-50"
				style="animation-duration: 200s;"
			/>
		</div>
	</div>
</div>

<style>
	div.grid {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	div.grid > div.animate-spin {
		grid-area: 1 / 1;
	}
</style>
