<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { repository } from './github-types';
	export let respositories: repository[] = [];
</script>

<ul class="flex flex-col gap-1 overflow-clip">
	{#each respositories as repository, i}
		<li
			class="font-mono"
			in:fly={{
				y: 75,
				delay: 75 * i
			}}
		>
			<a
				href={repository.html_url}
				target="_blank"
				rel="noreferrer"
				referrerpolicy="no-referrer"
				class="flex flex-row flex-nowrap justify-between gap-1 hover:text-indigo-900 dark:hover:text-indigo-400 py-1"
			>
				<span
					class="overflow-hidden whitespace-nowrap text-ellipsis hover:underline"
					title={repository.name}>{repository.name}</span
				>
				{#if repository.stargazers_count > 0}
					<span
						class="text-amber-500 dark:text-amber-300 font-semibold text-right flex flex-row flex-nowrap gap-1 flex-shrink-0"
					>
						<span
							class="overflow-hidden whitespace-nowrap text-ellipsis block  w-full"
							title="{repository.stargazers_count} stars"
						>
							{repository.stargazers_count}
						</span>
						<span class="flex-shrink-0 text-xs flex justify-center items-center">⭐</span>
					</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>
