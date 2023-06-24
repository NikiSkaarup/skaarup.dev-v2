<script lang="ts">
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	const top = spring(0, {
		damping: 0.6,
		stiffness: 0.01
	});
	const left = spring(0, {
		damping: 0.75,
		stiffness: 0.006
	});
	let moved = false;
	let effect: HTMLDivElement;
</script>

<svelte:window
	on:mousemove={(event) => {
		if (!moved || !effect) {
			moved = true;
			return;
		}
		left.set(event.clientX - effect.clientWidth / 2);
		top.set(event.clientY - effect.clientHeight / 2);
	}}
/>

{#if moved}
	<div
		transition:fade={{ duration: 3000 }}
		class="fixed pointer-events-none inset-0 overflow-hidden -z-10"
	>
		<div
			bind:this={effect}
			class="absolute -z-10 blur-[100px]"
			style="top: {$top}px; left: {$left}px;"
		>
			<div
				class="grid items-center justify-center animate-spin"
				style="animation-duration: 300s;"
			>
				<div
					class="w-[40vw] h-[60vw] rounded-full animate-spin bg-gradient-to-r opacity-60 from-violet-950 to-indigo-800"
					style="animation-duration: 120s;"
				/>
				<div
					class="w-[40vw] h-[40vw] rounded-full opacity-80 overflow-hidden animate-spin bg-gradient-to-r from-purple-950 to-indigo-800"
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
