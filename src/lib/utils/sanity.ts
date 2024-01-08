import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '3s0ittln',
	dataset: 'production',
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: '2024-01-08'
};

export default createClient(config);
