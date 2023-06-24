import posts from '$lib/server/posts';

export const load = async () => {
	return { posts: posts.map(({ title, snippet, slug }) => ({ title, snippet, slug })) };
};
