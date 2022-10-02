<script lang="ts">
	import { onMount } from 'svelte';
	import type { repository } from './github-types';

	const requestData = {
		base_url: 'https://api.github.com',
		repos_url: 'https://api.github.com/users/{user}/repos',
		username: 'NikiSkaarup'
	};

	let respositories: repository[] = [];

	onMount(async () => {
		const response = await fetch(requestData.repos_url.replace('{user}', requestData.username), {
			headers: new Headers({
				Accept: 'application/vnd.github.v3+json',
				'Accept-Charset': 'utf-8',
				'Content-Type': 'application/json'
			}),
			method: 'GET',
			mode: 'cors'
		});
		if (!response.ok) return;

		respositories = ((await response.json()) as repository[]).sort((a, b) => {
			const aUpdatedAt = new Date(a.updated_at);
			const bUpdatedAt = new Date(b.updated_at);
			if (aUpdatedAt < bUpdatedAt) return 1;
			else if (aUpdatedAt > bUpdatedAt) return -1;
			return 0;
		});
	});
</script>

<ul class="flex flex-col gap-1">
	{#each respositories as repository (repository.id)}
		<li class="font-mono">
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
	{:else}
		<li>Loading...</li>
	{/each}
</ul>
