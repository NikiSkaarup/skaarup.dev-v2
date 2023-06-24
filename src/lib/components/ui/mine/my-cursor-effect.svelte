<script lang="ts">
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { dev } from '$app/environment';

	const top = spring(100, {
		damping: 0.7,
		stiffness: 0.006
	});
	const left = spring(300, {
		damping: 0.75,
		stiffness: 0.003
	});
	let moved = false;
	let effect: HTMLDivElement;
</script>

<svelte:window
	on:mousemove={(event) => {
		if (!moved) {
			moved = true;
			return;
		}
		if (!effect) return;
		left.set(event.clientX - effect.clientWidth / 2);
		top.set(event.clientY - effect.clientHeight / 2);
	}}
/>

{#if moved}
	<div
		transition:fade={{ duration: 2000 }}
		class="fixed pointer-events-none inset-0 overflow-hidden -z-10"
	>
		{#if dev}
			<div
				class="fixed bottom-2 right-2 font-mono flex flex-col items-end opacity-40 text-xs"
			>
				<span>{$left.toFixed()} x</span>
				<span>{$top.toFixed()} y</span>
			</div>
		{/if}
		<div
			bind:this={effect}
			class="absolute top-0 left-0 w-fit h-fit will-change-transform filter origin-center transform-gpu -z-10"
			style="--tw-translate-x: {$left.toFixed()}px; --tw-translate-y: {$top.toFixed()}px; --tw-blur: blur(128px);"
		>
			<div
				class="grid items-center justify-center animate-spin"
				style="animation-duration: 300s;"
			>
				<div
					class="ml-[7.5vw] w-[25vw] h-[70vw] rounded-full animate-spin bg-gradient-to-r opacity-90 from-violet-950 to-indigo-800"
					style="animation-duration: 120s;"
				/>
				<div
					class="w-[40vw] h-[40vw] mt-[15vw] rounded-full opacity-90 overflow-hidden animate-spin bg-gradient-to-r from-purple-950 to-indigo-800"
					style="animation-duration: 200s;"
				/>
			</div>
		</div>
	</div>
{/if}

<style>
	div.grid {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	div.grid > div.animate-spin {
		grid-area: 1 / 1;
	}
</style>
