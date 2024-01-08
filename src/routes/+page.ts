import type { PageLoad } from './$types';
import { sanityClient } from '$lib/utils';

import { error } from '@sveltejs/kit';
import { processCourseData } from '$lib/utils/sanity';
import type { Course, SanityCourse } from '$lib/types';

export const load: PageLoad = async () => {
	const query = '*[_type == "course"]';
	try {
		const courses: SanityCourse[] = await sanityClient.fetch(query);
		if (courses) {
			return { courses: courses.length ? courses.map(processCourseData) : [] };
		}
	} catch (err) {
		console.log(err);
		throw error(400, 'Failed to fetch courses');
	}
};
