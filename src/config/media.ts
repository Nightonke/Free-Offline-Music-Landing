import type { Locale } from "../i18n/content";

type HeroChapter = { start: number; text: string };

export const heroVideos: Record<Locale, { src: string; poster: string; chapters: HeroChapter[] }> = {
  en: {
    src: "/media/app-preview-en.mp4",
    poster: "/media/app-preview-en.jpg",
    chapters: [
      { start: 0, text: "Play music in any app. TuneTrace records and identifies it." },
      { start: 3.7, text: "Save the songs to local library." },
      { start: 6.6, text: "Listen anytime, even offline." },
      { start: 9.3, text: "A simple, intuitive player. Always ad-free." },
    ],
  },
  "zh-Hans": {
    src: "/media/app-preview-zh-Hans.mp4",
    poster: "/media/app-preview-zh-Hans.jpg",
    chapters: [
      { start: 0, text: "播放其他 App 的歌曲，拾曲会录制并识别。" },
      { start: 4.8, text: "挑选想留下的歌曲，保存至本地曲库。" },
      { start: 9.2, text: "随时播放曲库歌曲，无需联网。" },
      { start: 12.7, text: "简洁好用的播放器，永无广告。" },
    ],
  },
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
