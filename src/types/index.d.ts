type BlogPost = {
	id: string;
	title: string;
	slug: string;
	snippet: string;
	content: string;
	status: string;
	user_created: string;
	user_updated: string;
	date_created: string;
	date_updated: string;
};

type MyCollections = {
	posts: BlogPost;
};
