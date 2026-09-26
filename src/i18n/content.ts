export type Locale = "en" | "zh-Hans";

export const appStoreUrl = "https://apps.apple.com/app/id6782514658";
export const privacyUrl = "https://daysinyear.github.io/tt/privacy.html";
export const termsUrl = "https://daysinyear.github.io/tt/user.html";
export const contactEmail = "daysinyear@foxmail.com";

export const content = {
  en: {
    path: "/",
    lang: "en",
    title: "TuneTrace | Record Audio and Listen Offline on iPhone",
    description:
      "Download TuneTrace free. Record permitted songs and shows from other apps or import files, identify music, and listen from a local library. Your first 30 songs play in full for free.",
    eyebrow: "TUNETRACE · FREE TO DOWNLOAD · IPHONE",
    nav: { how: "How it works", features: "Features", faq: "FAQ" },
    language: "中文",
    download: "Download free on the App Store",
    explore: "See how it works",
    heroTitle: ["Record songs from music apps.", "Listen offline for free, forever."],
    heroDescription:
      "Record songs, shows, and audio from videos in QQ Music, Kugou Music, Apple Music, or NetEase Cloud Music when recording is supported—or import files you already have. TuneTrace automatically splits recordings into clips, identifies songs, and organizes your local library for offline listening, without another monthly subscription.",
    heroUseCasesLabel: "Made for moments like these:",
    heroUseCases: [
      "I just want to listen to songs I've saved, without paying every month for the same music.",
      "I want to save the audio from a great video or show and enjoy it again while driving or before bed.",
      "I want a long recording intelligently split into shorter clips based on volume changes.",
    ],
    heroMediaLabel: "APP PREVIEW",
    heroMediaEmpty: "Your app preview video goes here",
    heroMediaFilename: "hero-preview.mp4",
    ribbon: ["Record audio from apps", "Import files", "Split long recordings", "Identify songs", "Build your library"],
    sectionLabel: "A SIMPLE FLOW",
    sectionTitle: "What plays on your phone is yours to keep.",
    sectionDescription:
      "TuneTrace helps you turn audio you have the right to record or import into an organized collection on your iPhone.",
    steps: [
      { number: "01", title: "Record or import", description: "Capture supported device audio, or bring in audio files you already have." },
      { number: "02", title: "Split and identify", description: "Find natural breaks in a long recording and identify songs when a match is available." },
      { number: "03", title: "Save and listen", description: "Choose the clips you want, save them locally, and play them from your library." },
    ],
    features: [
      {
        number: "01 / CAPTURE",
        label: "KEEP THE SOUNDS YOU LOVE",
        id: "recording",
        title: "Start with the audio already on your phone.",
        description:
          "Play music, a show, or a video in another app, then record its audio with TuneTrace. You can also import existing audio files and keep those sounds locally for good.",
        bullets: ["Works with nearly all music apps", "Import audio files", "Record audio from shows and videos, too"],
      },
      {
        number: "02 / DISCOVER",
        label: "MAKE SENSE OF LONG RECORDINGS",
        id: "segments",
        title: "One long recording. Songs you can actually find.",
        description:
          "TuneTrace looks for quiet gaps to suggest clips, then uses music recognition to add titles and artists when it finds a match. Adjust the cuts yourself when needed.",
        bullets: ["Automatic silence-based splitting", "Song recognition", "Manual cut-point editing"],
      },
      {
        number: "03 / LISTEN",
        label: "YOUR LIBRARY, YOUR WAY",
        id: "library",
        title: "A local music library with your name on it.",
        description:
          "Save selected clips as tracks, organize playlists, and return to what you kept. Saved audio is stored on your iPhone for local playback.",
        bullets: ["Playlists, shuffle, and lyrics", "Playback speed, sleep timer, and saved playback position", "Export and share song files"],
      },
    ],
    faqLabel: "GOOD TO KNOW",
    faqTitle: "A few things to know before you press record.",
    faqs: [
      {
        question: "Can TuneTrace record audio from any app?",
        answer:
          "No. Some apps and protected content do not allow recording. Results depend on iOS and the source app. Record only audio you own or have permission to keep.",
      },
      {
        question: "Does TuneTrace provide a free streaming music catalog?",
        answer:
          "No. TuneTrace organizes audio that you record or import. It does not provide an unlimited catalog of licensed songs to stream.",
      },
      {
        question: "Is TuneTrace free to use?",
        answer:
          "The app is free to download, and you can save unlimited tracks. The first 30 saved songs play in full for free. Additional songs have a 45-second preview unless you unlock Premium.",
        pricingLabel: "U.S. App Store prices",
        prices: [
          { label: "Monthly", value: "$1.49" },
          { label: "Yearly", value: "$9.95" },
          { label: "Lifetime", value: "$19.95" },
        ],
        pricingNote: "Prices may vary by App Store region. The price shown at checkout applies.",
      },
      {
        question: "Where are my saved tracks kept?",
        answer:
          "They are stored in the app's local library on your iPhone. Keep a copy of important audio before deleting the app or changing devices.",
      },
      {
        question: "Which devices are supported?",
        answer: "TuneTrace is currently available for iPhone and requires iOS 16 or later.",
      },
    ],
    closingLabel: "READY TO KEEP LISTENING?",
    closingTitle: "Give the songs you save a place to stay.",
    closingDescription: "Start a local library with TuneTrace on iPhone.",
    footerSummary: "Record. Recognize. Keep listening.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    copyright: "© 2026 Smith Night",
    mediaKindImage: "IMAGE SLOT",
    mediaKindVideo: "VIDEO SLOT",
  },
  "zh-Hans": {
    path: "/zh-Hans/",
    lang: "zh-Hans",
    title: "TuneTrace 拾曲｜iPhone 录音识曲与本地离线听歌",
    description:
      "免费下载 TuneTrace 拾曲：录制其他 App 中允许录制的歌曲、节目等音频，或导入自己的文件，切段识曲并保存到本地曲库。免费版前 30 首歌曲可完整播放。",
    eyebrow: "TUNETRACE 拾曲 · 免费下载 · IPHONE",
    nav: { how: "使用方法", features: "功能", faq: "常见问题" },
    language: "English",
    download: "前往 App Store 免费下载",
    explore: "了解使用方法",
    heroTitle: ["录制音乐应用歌曲，", "本地永久免费畅听"],
    heroDescription:
      "录下 QQ 音乐、酷狗音乐、Apple Music、网易云音乐中允许录制的歌曲、节目或视频音频，也可以导入已有文件。拾曲帮您智能切段、识别歌曲，并整理进本地曲库，随时离线畅听，让您不必每月支付订阅费用。",
    heroUseCasesLabel: "适合这些场景：",
    heroUseCases: [
      "我只是听自己的收藏歌曲，不想每个月为了同样的歌曲付费订阅。",
      "我想把某些精彩视频或节目录制成音频，在开车或者睡前反复欣赏。",
      "我想把某一长段音频根据音量智能切割为短音频。",
    ],
    heroMediaLabel: "APP 预览",
    heroMediaEmpty: "这里留给 App 预览视频",
    heroMediaFilename: "hero-preview.mp4",
    ribbon: ["录制其他 App 的音频", "导入文件", "长录音切段", "识别歌曲", "建立本地曲库"],
    sectionLabel: "简单三步",
    sectionTitle: "手机能播放的，都是您自己的",
    sectionDescription: "把你有权录制或导入的音频，整理成 iPhone 上的个人曲库。",
    steps: [
      { number: "01", title: "录制或导入", description: "录制系统支持的手机音频，或导入已有的音频文件。" },
      { number: "02", title: "切段与识曲", description: "寻找长录音中的自然间隔；可识别时补全歌名与歌手。" },
      { number: "03", title: "保存与播放", description: "选出想留下的片段，保存到本地曲库，随时打开播放。" },
    ],
    features: [
      {
        number: "01 / 录制",
        label: "录下想留的声音",
        id: "recording",
        title: "从手机正在播放的声音开始。",
        description: "用其他 App 播放音乐、节目或视频，然后用 TuneTrace 拾曲录制音频，也可以导入已有音频文件。将这些声音永远保留在本地。",
        bullets: ["支持几乎所有音乐应用", "导入本地音频文件", "也可以录制节目、视频音频"],
      },
      {
        number: "02 / 识别",
        label: "长录音轻松整理",
        id: "segments",
        title: "长录音里喜欢的歌，一首首找出来。",
        description: "拾曲根据安静的间隔建议切点，再尝试识别歌曲、补全歌名和歌手。切得不合适时，你也能手动调整。",
        bullets: ["按静音自动切段", "识别歌曲信息", "手动调整切点"],
      },
      {
        number: "03 / 播放",
        label: "自己的曲库随时听",
        id: "library",
        title: "建一座属于自己的本地曲库。",
        description: "将选中的片段保存为歌曲，整理歌单，随时回到喜欢的声音。已保存的音频存放在 iPhone 本地。",
        bullets: ["支持歌单、随机播放、歌词", "倍速播放、睡眠定时、记忆播放位置", "导出、分享歌曲文件"],
      },
    ],
    faqLabel: "使用前了解一下",
    faqTitle: "关于录制、保存和免费使用。",
    faqs: [
      {
        question: "可以录制所有 App 的声音吗？",
        answer: "不能保证。部分 App 或受保护内容不允许录制，实际结果取决于 iOS 和来源 App。请只录制你拥有权利或已获授权保存的音频。",
      },
      {
        question: "拾曲提供免费的在线歌曲库吗？",
        answer: "不提供。当前版本整理的是你自行录制或导入的音频，并非可无限播放的正版在线曲库。",
      },
      {
        question: "拾曲是免费的吗？",
        answer: "App 可以免费下载，保存歌曲数量不限。免费版前 30 首已保存歌曲可完整播放，之后每首可试听 45 秒；解锁高级版后可完整播放。",
        pricingLabel: "中国区 App Store 价格",
        prices: [
          { label: "月付", value: "¥3.00" },
          { label: "年付", value: "¥19.00" },
          { label: "买断", value: "¥39.00" },
        ],
        pricingNote: "其他地区价格可能不同，请以 App Store 购买页显示的价格为准。",
      },
      {
        question: "保存的歌曲存在哪里？",
        answer: "保存在 iPhone 上的 App 本地曲库中。删除 App 或更换设备前，请为重要音频保留副本。",
      },
      { question: "支持哪些设备？", answer: "拾曲目前提供 iPhone 版本，需要 iOS 16 或更高版本。" },
    ],
    closingLabel: "让喜欢的声音留下来",
    closingTitle: "给想再听的歌，一个自己的位置。",
    closingDescription: "从 iPhone 上的拾曲本地曲库开始。",
    footerSummary: "录制、识曲，留给自己听。",
    privacy: "隐私政策",
    terms: "用户协议",
    contact: "联系支持",
    copyright: "© 2026 Smith Night",
    mediaKindImage: "图片空位",
    mediaKindVideo: "视频空位",
  },
} as const;
