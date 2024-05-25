import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({


  // output: 'server', // Set the output to server for SSR
  // adapter: node({
  //   mode: 'standalone' // Options can vary depending on the adapter, refer to the adapter's documentation
  // }),
  
  
  output: 'server',
  // Set the output to server for SSR
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
    remotePatterns: [{
      protocol: "https"
    }],
    domains: ["https://res.cloudinary.com"]
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()]
});
