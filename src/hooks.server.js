import { dev } from '$app/environment';
import { nanoid } from 'nanoid';
import colors from '$lib/server/colors';

export const handle = async ({ event, resolve }) => {
	const requestId = nanoid();
	performance.mark(requestId);

	event.locals.requestId = requestId;

	const result = await resolve(event);

	performance.measure(`request ${requestId}`, requestId);
	return result;
};

// export async function handleFetch({ request, fetch }) {
// 	return fetch(request);
// }

export async function handleError({ error, event, status, message }) {
	console.error({
		message,
		path: event.url.pathname,
		query: event.url.search,
		status,
		error: error instanceof Error ? error.message : error
	});

	if (error instanceof Error) {
		console.error(error);
	}

	return {
		message: 'Whoops!'
	};
}

if (dev) {
	/**
	 * @param {PerformanceObserverEntryList} entries
	 * @param {PerformanceObserver} observer
	 */
	function observerCallback(entries, observer) {
		const entriesArr = [...entries.getEntries()];

		for (let i = entriesArr.length; i--; ) {
			const entry = entriesArr[i];
			if (entry.entryType === 'measure') {
				console.log(
					`${colors.fgGreen}${entry.name}${colors.reset} ${colors.fgYellow}${entry.duration.toFixed(3)}${colors.reset}ms`
				);
			}
		}
	}

	if (globalThis.performanceObserver) {
		globalThis.performanceObserver.disconnect();
	}

	const observer = new PerformanceObserver(observerCallback);
	observer.observe({ entryTypes: ['measure'] });
	globalThis.performanceObserver = observer;
}
