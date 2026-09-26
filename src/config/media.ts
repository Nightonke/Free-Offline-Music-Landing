import type { Locale } from "../i18n/content";

export const heroVideos: Record<Locale, { src: string; poster: string }> = {
  en: { src: "/media/app-preview-en.mp4", poster: "/media/app-preview-en.jpg" },
  "zh-Hans": { src: "/media/app-preview-zh-Hans.mp4", poster: "/media/app-preview-zh-Hans.jpg" },
};

/** Add screenshots under public/media, then replace the null paths below. */
export const media: Record<"recording" | "segments" | "library", string | null> = {
  recording: null,
  segments: null,
  library: null,
};
