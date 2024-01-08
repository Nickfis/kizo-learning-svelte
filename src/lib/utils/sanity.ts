import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Course, SanityCourse } from '$lib/types';

const config: ClientConfig = {
	projectId: '3s0ittln',
	dataset: 'production',
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: '2024-01-08'
};

const sanityClient = createClient(config);
export default sanityClient;

export function processCourseData(course: SanityCourse): Course {
	const builder = imageUrlBuilder(sanityClient);
	const thumbnailUrl = builder.image(course.thumbnail);
	return {
		...course,
		thumbnail: thumbnailUrl.url(),
		linkWithPromoCode: `${course.link}?couponCode=${course.code}`
	};
}
