import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';

const supportedLocales = ['th', 'en'];

export const load: LayoutLoad = async ({ params }) => {
	if (!supportedLocales.includes(params.lang)) {
		throw error(404, 'Not found');
	}
	return { lang: params.lang };
};
