import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'qyt42r3p', // Replace with your Sanity project ID
  dataset: 'development',         // Replace with your dataset (default: 'production')
  apiVersion: '2025-01-06',      // Use a date from when you made the project
  useCdn: true,                  // true if you want cached content
});

export default sanityClient;