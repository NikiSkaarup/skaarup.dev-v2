import adapter from '@calle.wester/svelte-adapter-bun';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: 'public',
			dynamic_origin: true
		})
	}
};

export default config;
