import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        cover: image(),
        coverAlt: z.string(),
        lastUpdate: z.string(),
        title: z.string(),
    }),
})

export const collections = {
    'projects': projectsCollection,
}
