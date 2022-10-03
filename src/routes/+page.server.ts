import { error } from '@sveltejs/kit';
import type { repository } from 'src/components/github/github-types';
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

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const filePath = path.format({
        root: './temp/',
        name: requestData.username,
        ext: '.cache'
    });

    try {
        const stat = await fs.stat(filePath);
        const now = new Date();
        const time = new Date(now.getTime() - (1000 * 60 * 5));

        if (stat.mtime > time) {
            console.log('From cache - fresh');
            const file = await fs.readFile(filePath, { encoding: 'utf8' });
            const repositories = JSON.parse(file) as repository[];
            return { repositories };
        } else {
            console.log('From cache - old');
        }
    } catch (e) {
        // noop
    }

    const url = requestData.repos_url.replace('{user}', requestData.username);
    const response = await fetch(url, requestInit);
    if (response.ok) {
        console.log('From github');
        const repositories = ((await response.json()) as repository[]).sort((a, b) => {
            const aUpdatedAt = new Date(a.updated_at);
            const bUpdatedAt = new Date(b.updated_at);
            if (aUpdatedAt < bUpdatedAt) return 1;
            else if (aUpdatedAt > bUpdatedAt) return -1;
            return 0;
        });

        try {
            const json = JSON.stringify(repositories);
            fs.writeFile(filePath, json, { encoding: 'utf8' });
            console.log('To cache - fresh');
        } catch (e) {
            // noop
        }
        return { repositories };
    }

    throw error(404, 'Not found');
}
