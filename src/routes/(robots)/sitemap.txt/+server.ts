import posts from '$lib/server/posts';

export const GET = async (event) => {
	const blogPosts = await posts.getSlugs();

	let sitemap = `${event.url.origin}/`;

	const postUrls = blogPosts.map((slug) => `${event.url.origin}/blog/${slug}`);

	if (postUrls.length > 0) {
		sitemap += `\n${postUrls.join('\n')}`;
	}

	return new Response(sitemap);
};
