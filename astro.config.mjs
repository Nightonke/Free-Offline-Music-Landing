import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://freeofflinemusic.com",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
