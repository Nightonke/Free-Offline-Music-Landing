# Free Offline Music Landing

Standalone multilingual landing site for TuneTrace / 拾曲 at `freeofflinemusic.com`.
Built with Astro as a static site. This is a separate Git repository from the
iOS app and the two other landing sites.

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. English is at `/`; Simplified Chinese is at
`/zh-Hans/`. Traditional Chinese, Japanese, German, Spanish, Korean, Brazilian
Portuguese, and French also have their own routes. To verify a production build,
run `npm run build`.

## Media

The hero uses the complete English and Simplified Chinese App Store preview
videos. Both files are encoded as web-compatible MP4s without trimming their
content. The matching poster frames and video paths are set in
`src/config/media.ts`.

Each feature section shows one App Store screenshot: recording, recording
review, or the local library. English and Simplified Chinese versions are
configured in `src/config/media.ts` and stored in `public/media/screenshots/`.
All languages except Simplified Chinese use the English video and screenshots.
The source HEIF files were converted to transparent 787 × 1400 PNGs for browser
support.

## Content and links

- Locale definitions and English/Simplified Chinese copy: `src/i18n/content.ts`
- Additional translations: `src/i18n/additionalContent.ts` and `src/i18n/westernContent.ts`
- App Store URL: `src/i18n/content.ts`
- Colors and layout: `src/styles/site.css`
- Site domain and sitemap: `astro.config.mjs`

The footer links to English copies of TuneTrace's existing privacy policy and
terms, hosted at `/privacy/` and `/terms/`. Their original text is stored in
`src/legal/`.
The free plan text reflects the current iOS implementation: unlimited saves,
full playback for the first 30 saved songs, and 45-second previews afterward.

The Astro sitemap integration generates `/sitemap-index.xml` and includes the
language alternatives for all nine landing routes. `public/robots.txt` points
to that index.

## Deployment

The repository is hosted at
`https://github.com/Nightonke/Free-Offline-Music-Landing`. Pushing to `main`
builds and deploys the static site through `.github/workflows/deploy.yml` to
GitHub Pages. The custom domain is `freeofflinemusic.com`.

DNS is managed in Tencent Cloud DNSPod. The apex has two GitHub Pages A records
(`185.199.108.153` and `185.199.109.153`), and `www` has a CNAME to
`Nightonke.github.io`. DNSPod's free plan rejected a third apex A record due
to its per-host load-balancing limit; no paid DNS plan is required for the two
active records. GitHub Pages has issued the apex-domain TLS certificate, and
**Enforce HTTPS** is enabled. GitHub Pages may need additional time to issue a
certificate for the optional `www` redirect.
