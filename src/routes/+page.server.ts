import posts from '$lib/server/posts';

export const load = async () => {
	return {
		posts: posts.getLatestPosts()
	};
};
