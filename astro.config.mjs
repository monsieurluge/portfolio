import { defineConfig } from 'astro/config'
import sitemap from "@astrojs/sitemap"

export default defineConfig({
    image: {
        domains: ["monsieurluge.dev"]
    },
    integrations: [sitemap({
        lastmod: new Date('now'),
    })],
    site: 'https://monsieurluge.dev',
})
