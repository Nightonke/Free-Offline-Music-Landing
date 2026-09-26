import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://freeofflinemusic.com",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en",
        "zh-Hans": "zh-Hans",
        "zh-Hant": "zh-Hant",
        ja: "ja",
        de: "de",
        es: "es",
        ko: "ko",
        "pt-BR": "pt-BR",
        fr: "fr",
      },
    },
  })],
});
