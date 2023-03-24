// create a template for the sanity.ts
// this is the file that will be used to create the sanity.ts file

import {
    createImageUrlBuilder,
    createCurrentUserHook,
    // createClient,
} from "next-sanity";

import {createClient} from "@sanity/client";


// create a config object

export const config = {
    // find your project ID and dataset in `sanity.json` in your studio project
    //  these are considered public, but you can use environment variables if you want diff between local dev and production
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    // Set useCdn to `false` if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
    // Authenticated request (like preview) will always bypass the CDN
    useCdn: process.env.NODE_ENV === 'production',
};





// set up the client for fetching data in the getStaticProps function

export const client = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);