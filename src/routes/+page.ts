import type { PageLoad } from './$types';
import { sanityClient } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	const query = '*[_type == "course"]';
	try {
		const courses = await sanityClient.fetch(query);
		if (courses) {
			return { courses };
		}
	} catch (err) {
		console.log(err);
		throw error(400, 'Failed to fetch courses');
	}
};
