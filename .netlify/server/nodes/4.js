import * as server from '../entries/pages/todos/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/todos/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/todos/_page.svelte-fc833e13.js';
export { server };
export const imports = ["_app/immutable/components/pages/todos/_page.svelte-fc833e13.js","_app/immutable/chunks/index-66220184.js","_app/immutable/chunks/singletons-a9f8393e.js","_app/immutable/chunks/index-e366d1ab.js"];
export const stylesheets = ["_app/immutable/assets/_page-5c3529b5.css"];
