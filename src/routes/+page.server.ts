import type { repository } from '$lib/github/github-types';
import fs from 'fs/promises';
import path from 'path';

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

const cacheLifeTimeMinutes = 5;
const cacheLifeTime = 1000 * 60 * cacheLifeTimeMinutes;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const filePath = path.format({
        root: './temp/',
        name: requestData.username,
        ext: '.cache'
    });

    try {
        const stat = await fs.stat(filePath);
        const time = new Date(new Date().getTime() - cacheLifeTime);

        if (stat.mtime > time) {
            const file = await fs.readFile(filePath, { encoding: 'utf8' });
            const repositories = JSON.parse(file) as repository[];
            return { repositories };
        }
    } catch (e) {
        // noop
    }

    const url = requestData.repos_url.replace('{user}', requestData.username);
    const response = await fetch(url, requestInit);
    if (response.ok) {
        const unsortedRepositories = await response.json() as repository[];
        const repositories = unsortedRepositories.sort((a, b) => {
            const aUpdatedAt = new Date(a.updated_at);
            const bUpdatedAt = new Date(b.updated_at);
            if (aUpdatedAt < bUpdatedAt) return 1;
            else if (aUpdatedAt > bUpdatedAt) return -1;
            return 0;
        });

        try {
            const json = JSON.stringify(repositories);
            fs.writeFile(filePath, json, { encoding: 'utf8' });
        } catch (e) {
            // noop
        }
        return { repositories };
    }

    return { repositories: [] };
}
