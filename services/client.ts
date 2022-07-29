import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId:'dkayplld',
    dataset:'production',
    apiVersion:'v2021-10-21',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})