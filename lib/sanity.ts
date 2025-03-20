import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "qte0izat",
    dataset: "production", 
    apiVersion: "2025-03-20",
    useCdn: false, 
});

// const builder = imageUrlBuilder(sanityClient);
// export const urlFor = (source: unknown) => builder.image(source);
