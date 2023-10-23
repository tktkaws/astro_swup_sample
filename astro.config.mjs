import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import swup from "@swup/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    swup({
      theme: "fade",
      //   morph: "#nav",
      //   parallel: true,
    }),
  ],
});
