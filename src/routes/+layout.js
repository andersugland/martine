import { error } from '@sveltejs/kit';
import { getSettings } from '../lib/utils/sanity';

export const load = async () => {
	const settings = await getSettings();

	if (settings) {
		return {
			settings
		};
	}

	throw error(404, 'Not found');
};
