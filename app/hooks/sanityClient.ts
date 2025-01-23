import { createClient } from '@sanity/client';
import { config } from 'dotenv';
const sanityClient = createClient({
  projectId: 'qyt42r3p', 
  dataset: 'development',         
  apiVersion: '2025-01-06',     
  useCdn: true,                  
});

export default sanityClient;