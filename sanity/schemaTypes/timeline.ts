import { defineType, defineField } from "sanity";

export default defineType({
    name: "timeline",
    title: "Timeline",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(5).max(100),
        }),
        defineField({
            name: "organization",
            title: "Organization",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required().min(10).max(500),
        }),
        defineField({
            name: "startDate",
            title: "Start Date",
            type: "string",
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "string",
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "image",
            options: { hotspot: true },
        }),
    ],
});
