import type { PageServerLoad } from './$types';
import type { repository } from '$lib/github/github-types';
import * as cache from '$lib/server/cache';

const requestData = {
    base_url: 'https://api.github.com',
    repos_url: 'https://api.github.com/users/{user}/repos',
    username: 'NikiSkaarup'
};
const requestInit: RequestInit = {
    headers: new Headers({
        Accept: 'application/vnd.github.v3+json',
        'Accept-Charset': 'utf-8',
        'Content-Type': 'application/json'
    }),
    method: 'GET',
    mode: 'cors'
};
const url = requestData.repos_url.replace('{user}', requestData.username);

export const load: PageServerLoad = async () => {
    const result = await cache.load('github', requestData.username);
    if (result !== undefined)
        return { repositories: result as repository[] };

    const response = await fetch(url, requestInit);
    if (!response.ok)
        return { repositories: [] };

    const unsortedRepositories = await response.json() as repository[];
    const repositories = unsortedRepositories.sort((a, b) => {
        const aUpdatedAt = new Date(a.updated_at);
        const bUpdatedAt = new Date(b.updated_at);
        if (aUpdatedAt < bUpdatedAt) return 1;
        else if (aUpdatedAt > bUpdatedAt) return -1;
        return 0;
    });

    await cache.store('github', requestData.username, repositories);
    return { repositories };
}
