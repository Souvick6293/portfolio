import { client } from "./client";

export async function getTimelineData() {
  const query = `*[_type == "timeline"] | order(_createdAt asc) {
    title,
    organization,
    description,
    startDate,
    endDate,
    "iconUrl": icon.asset->url
  }`;

  try {
    const data = await client.fetch(query);
    console.log("Sanity Response:", data);
    return data;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}
