import type { Locale } from "../i18n/content";

export const heroVideos: Record<Locale, { src: string; poster: string }> = {
  en: { src: "/media/app-preview-en.mp4", poster: "/media/app-preview-en.jpg" },
  "zh-Hans": { src: "/media/app-preview-zh-Hans.mp4", poster: "/media/app-preview-zh-Hans.jpg" },
};

type FeatureId = "recording" | "segments" | "library";
type Screenshot = { src: string; alt: string };

const screenshot = (locale: Locale, name: string, alt: string): Screenshot => ({
  src: `/media/screenshots/${locale}-${name}.png`,
  alt,
});

export const media: Record<Locale, Record<FeatureId, Screenshot>> = {
  en: {
    recording: screenshot("en", "recording", "TuneTrace recording audio on iPhone"),
    segments: screenshot("en", "segments", "TuneTrace organizing a recording into identified songs"),
    library: screenshot("en", "library", "TuneTrace local music library"),
  },
  "zh-Hans": {
    recording: screenshot("zh-Hans", "recording", "拾曲正在录制 iPhone 音频"),
    segments: screenshot("zh-Hans", "segments", "拾曲将录音整理成已识别的歌曲"),
    library: screenshot("zh-Hans", "library", "拾曲本地曲库"),
  },
};
