import { error } from '@sveltejs/kit';
import { getFrontPage } from '$lib/utils/sanity';

export const load = async () => {
	const frontPage = await getFrontPage();

	if (frontPage) {
		return {
			frontPage
		};
	}

	throw error(404, 'Not found');
};
