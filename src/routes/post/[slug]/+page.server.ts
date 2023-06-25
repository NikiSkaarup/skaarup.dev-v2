import posts from '$lib/server/posts';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
	const post = await posts.getPost(event.params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		title: post.title,
		snippet: post.snippet,
		content: post.post_content.map((content) => content.item.md)
	};
};
