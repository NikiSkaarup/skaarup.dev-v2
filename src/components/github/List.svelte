<script lang="ts">
	import type { repository } from './github-types';

	const requestData = {
		base_url: 'https://api.github.com',
		repos_url: 'https://api.github.com/users/{user}/repos',
		username: 'NikiSkaarup'
	};

	const reqInit: RequestInit = {
		headers: new Headers({
			Accept: 'application/vnd.github.v3+json',
			'Accept-Charset': 'utf-8',
			'Content-Type': 'application/json'
		}),
		method: 'GET',
		mode: 'cors'
	};

	let respositories: repository[] = [];

	async function fetchRepositories() {
		const repos_url_resp = await fetch(
			requestData.repos_url.replace('{user}', requestData.username),
			reqInit
		);
		if (!repos_url_resp.ok) return;

		const resp_repos = (await repos_url_resp.json()) as repository[];
		const sorted_repos = resp_repos.sort((a, b) => {
			const aUpdatedAt = new Date(a.updated_at);
			const bUpdatedAt = new Date(b.updated_at);
			if (aUpdatedAt < bUpdatedAt) return 1;
			else if (aUpdatedAt > bUpdatedAt) return -1;
			return 0;
		});
		respositories = sorted_repos;
	}

	fetchRepositories();
</script>

<ul>
	{#each respositories as repo}
		<li>
			<a href={repo.html_url} target="_blank" rel="noreferrer" referrerpolicy="no-referrer">
				{repo.name}
				{#if repo.stargazers_count > 0}
					-
					<span class="text-amber-500 dark:text-amber-300 font-semibold">
						{repo.stargazers_count}
						{#if repo.stargazers_count > 1}
							stars
						{:else}
							star
						{/if}
					</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>
