import type { PageLoad } from './$types';
import { sanityClient } from '$lib/utils';

import { error } from '@sveltejs/kit';
import { processCourseData, processProjectData } from '$lib/utils/sanity';
import type { SanityCourse, SanityProject } from '$lib/types';

export const load: PageLoad = async () => {
	try {
		const courses: SanityCourse[] = await sanityClient.fetch('*[_type == "course"]');
		const projects: SanityProject[] = await sanityClient.fetch(
			'*[_type == "project"] | order(releaseDate desc)'
		);
		return {
			courses: courses.length ? courses.map(processCourseData) : [],
			projects: projects.length ? projects.map(processProjectData) : []
		};
	} catch (err) {
		console.log(err);
		throw error(400, 'Failed to fetch courses');
	}
};
