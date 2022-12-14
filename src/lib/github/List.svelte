<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { repository } from './github-types';
	import { page } from '$app/stores';

	let repositories: repository[] = [];
	if ($page?.data?.repositories && $page.data.repositories.length > 0) {
		repositories = $page.data.repositories;
	}
</script>

<ul class="flex flex-col gap-1 overflow-clip">
	{#each repositories as repository, i}
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
				class="flex flex-row flex-nowrap justify-between gap-1 py-1 hover:text-indigo-900 dark:hover:text-indigo-400"
			>
				<span
					class="overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
					title={repository.name}>{repository.name}</span
				>
				{#if repository.stargazers_count > 0}
					<span
						class="flex flex-shrink-0 flex-row flex-nowrap gap-1 text-right font-semibold text-amber-500 dark:text-amber-300"
					>
						<span
							class="block w-full overflow-hidden text-ellipsis  whitespace-nowrap"
							title="{repository.stargazers_count} stars"
						>
							{repository.stargazers_count}
						</span>
						<span class="flex flex-shrink-0 items-center justify-center text-xs">⭐</span>
					</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>
