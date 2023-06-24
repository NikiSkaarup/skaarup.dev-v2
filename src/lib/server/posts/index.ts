import { env } from '$env/dynamic/private';
import { Directus } from '@directus/sdk';

const directus = new Directus<MyCollections>(env.DIRECTUS_URL);

async function getLatestPosts() {
	const items = await directus.items('posts').readByQuery({
		sort: ['-date_created', '-date_updated'],
		fields: ['title', 'slug', 'snippet'],
		limit: 10
	});

	return items.data ?? [];
}

async function getPost(slug: string) {
	const item = await directus.items('posts').readByQuery({
		filter: { slug },
		fields: ['title', 'snippet', 'content']
	});

	if (item.data === undefined) return undefined;
	if (item.data === null) return undefined;
	if (item.data.length === 0) return undefined;

	return item.data[0];
}

export default { getLatestPosts, getPost };
