<script>
	import { dev } from '$app/environment';
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	const point = spring(
		{ x: 100, y: 300 },
		{
			stiffness: 0.005,
			damping: 0.99,
			precision: 0.7
		}
	);

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & Window; }} event
	 */
	function mousemove(event) {
		const ih = window.innerHeight;
		const iw = window.innerWidth;
		const cw = effect.clientWidth / 2;
		const ch = effect.clientHeight / 2;
		const cx = event.clientX - cw;
		const cy = event.clientY - ch;
		const x = cx > iw ? iw : cx < -cw ? -cw : cx;
		const y = cy > ih ? ih : cy < -ch ? -ch : cy;
		point.set({ x, y });
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
			<span>{$point.x.toFixed()} x</span>
			<span>{$point.y.toFixed()} y</span>
		</div>
	{/if}
	<div
		bind:this={effect}
		class="absolute top-0 left-0 h-fit w-fit origin-center translate-x-0 translate-y-0 transform-gpu blur-3xl filter will-change-transform contain-paint"
		style="--tw-translate-x: {$point.x.toFixed()}px; --tw-translate-y: {$point.y.toFixed()}px;"
	>
		<div
			class="grid animate-spin auto-cols-fr auto-rows-fr items-center justify-center"
			style="animation-duration: 300s;"
		>
			<div
				class="col-span-full row-span-full -ml-[7.5vw] h-[20vw] w-[65vw] animate-spin rounded-full bg-gradient-to-r from-indigo-500 from-0% via-purple-500 via-50% to-violet-500 to-100% opacity-20"
				style="animation-duration: 180s;"
			/>
			<div
				class="col-span-full row-span-full -mt-[15vw] h-[50vw] w-[30vw] animate-spin rounded-full bg-gradient-to-r from-indigo-500 from-0% via-purple-500 via-50% to-violet-500 to-100% opacity-20"
				style="animation-duration: 100s;"
			/>
			<div
				class="col-span-full row-span-full ml-[7.5vw] h-[70vw] w-[25vw] animate-spin rounded-full bg-gradient-to-r from-violet-950 from-0% to-indigo-800 to-100% opacity-50"
				style="animation-duration: 120s;"
			/>
			<div
				class="col-span-full row-span-full mt-[15vw] h-[40vw] w-[40vw] animate-spin rounded-full bg-gradient-to-r from-purple-950 from-0% to-indigo-800 to-100% opacity-50"
				style="animation-duration: 200s;"
			/>
		</div>
	</div>
</div>
