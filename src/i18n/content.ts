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
    nav: { how: "How it works", features: "Features", free: "Free & Premium", faq: "FAQ" },
    language: "中文",
    download: "Download free on the App Store",
    explore: "See how it works",
    heroTitle: ["Catch the sound.", "Keep it close."],
    heroDescription:
      "Record permitted songs and shows playing in other apps, or import your own files. TuneTrace turns long recordings into clips you can find, save, and play from a local library.",
    heroNote: "Free download · First 30 saved songs play in full for free",
    heroMediaLabel: "APP PREVIEW",
    heroMediaEmpty: "Your app preview video goes here",
    heroMediaFilename: "hero-preview.mp4",
    ribbon: ["Record audio from apps", "Import files", "Split long recordings", "Identify songs", "Build your library"],
    sectionLabel: "A SIMPLE FLOW",
    sectionTitle: "From a passing sound to a song you can find again.",
    sectionDescription:
      "TuneTrace helps you turn audio you have the right to record or import into an organized collection on your iPhone.",
    steps: [
      { number: "01", title: "Record or import", description: "Capture supported device audio, or bring in audio files you already have." },
      { number: "02", title: "Split and identify", description: "Find natural breaks in a long recording and identify songs when a match is available." },
      { number: "03", title: "Save and listen", description: "Choose the clips you want, save them locally, and play them from your library." },
    ],
    featuresLabel: "MADE FOR YOUR MUSIC",
    features: [
      {
        number: "01 / CAPTURE",
        id: "recording",
        title: "Start with the audio already on your phone.",
        description:
          "Use the iPhone recording flow while permitted audio plays in another app, or import an existing audio file. You decide what belongs in your library.",
        bullets: ["Record supported device audio", "Import audio files", "Keep the original recording available while you organize"],
        mediaLabel: "RECORDING SCREENSHOT",
        mediaEmpty: "Recording screenshot goes here",
        mediaFilename: "recording.png",
        mediaAlt: "TuneTrace recording screen",
      },
      {
        number: "02 / DISCOVER",
        id: "segments",
        title: "One long recording. Songs you can actually find.",
        description:
          "TuneTrace looks for quiet gaps to suggest clips, then uses music recognition to add titles and artists when it finds a match. Adjust the cuts yourself when needed.",
        bullets: ["Automatic silence-based splitting", "Song recognition", "Manual cut-point editing"],
        mediaLabel: "SEGMENT SCREENSHOT",
        mediaEmpty: "Segment editing screenshot goes here",
        mediaFilename: "segments.png",
        mediaAlt: "TuneTrace audio segmentation screen",
      },
      {
        number: "03 / LISTEN",
        id: "library",
        title: "A local music library with your name on it.",
        description:
          "Save selected clips as tracks, organize playlists, and return to what you kept. Saved audio is stored on your iPhone for local playback.",
        bullets: ["Local tracks and playlists", "Playback speed and sleep timer", "First 30 tracks play in full for free"],
        mediaLabel: "LIBRARY SCREENSHOT",
        mediaEmpty: "Library screenshot goes here",
        mediaFilename: "library.png",
        mediaAlt: "TuneTrace local music library",
      },
    ],
    freeLabel: "CLEAR FROM THE START",
    freeTitle: "Free to begin. Clear about the limits.",
    freeDescription:
      "TuneTrace is free to download. You can save as many songs as you like. On the free plan, the first 30 saved songs play in full; later songs have a 45-second preview. Premium unlocks full playback for the rest of your library and audio sharing or export.",
    freeFacts: [
      { value: "30", label: "songs with full free playback" },
      { value: "45s", label: "preview for later songs" },
      { value: "∞", label: "songs you can save locally" },
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
    nav: { how: "使用方法", features: "功能", free: "免费与高级版", faq: "常见问题" },
    language: "English",
    download: "前往 App Store 免费下载",
    explore: "了解使用方法",
    heroTitle: ["录下喜欢的声音。", "留在自己的曲库。"],
    heroDescription:
      "录下其他 App 中允许录制的歌曲、节目等音频，或导入已有文件。拾曲帮你把长录音切成片段、识别歌曲，并整理进本地曲库，随时找回想听的声音。",
    heroNote: "免费下载 · 前 30 首已保存歌曲可免费完整播放",
    heroMediaLabel: "APP 预览",
    heroMediaEmpty: "这里留给 App 预览视频",
    heroMediaFilename: "hero-preview.mp4",
    ribbon: ["录制其他 App 的音频", "导入文件", "长录音切段", "识别歌曲", "建立本地曲库"],
    sectionLabel: "简单三步",
    sectionTitle: "从听见的声音，到找得到的歌曲。",
    sectionDescription: "把你有权录制或导入的音频，整理成 iPhone 上的个人曲库。",
    steps: [
      { number: "01", title: "录制或导入", description: "录制系统支持的手机音频，或导入已有的音频文件。" },
      { number: "02", title: "切段与识曲", description: "寻找长录音中的自然间隔；可识别时补全歌名与歌手。" },
      { number: "03", title: "保存与播放", description: "选出想留下的片段，保存到本地曲库，随时打开播放。" },
    ],
    featuresLabel: "为自己的音乐而做",
    features: [
      {
        number: "01 / 录制",
        id: "recording",
        title: "从手机正在播放的声音开始。",
        description: "其他 App 播放允许录制的内容时开始录制，也可以导入已有音频文件。想留下什么，由你决定。",
        bullets: ["录制支持的手机音频", "导入本地音频文件", "整理过程中保留原始录音"],
        mediaLabel: "录制页面截图",
        mediaEmpty: "这里留给录制页面截图",
        mediaFilename: "recording.png",
        mediaAlt: "拾曲的录制页面",
      },
      {
        number: "02 / 识别",
        id: "segments",
        title: "长录音里喜欢的歌，一首首找出来。",
        description: "拾曲根据安静的间隔建议切点，再尝试识别歌曲、补全歌名和歌手。切得不合适时，你也能手动调整。",
        bullets: ["按静音自动切段", "识别歌曲信息", "手动调整切点"],
        mediaLabel: "切段页面截图",
        mediaEmpty: "这里留给切段编辑截图",
        mediaFilename: "segments.png",
        mediaAlt: "拾曲的音频切段页面",
      },
      {
        number: "03 / 播放",
        id: "library",
        title: "建一座属于自己的本地曲库。",
        description: "将选中的片段保存为歌曲，整理歌单，随时回到喜欢的声音。已保存的音频存放在 iPhone 本地。",
        bullets: ["本地歌曲与歌单", "倍速播放与睡眠定时", "前 30 首免费完整播放"],
        mediaLabel: "曲库页面截图",
        mediaEmpty: "这里留给曲库页面截图",
        mediaFilename: "library.png",
        mediaAlt: "拾曲的本地曲库页面",
      },
    ],
    freeLabel: "免费范围说清楚",
    freeTitle: "免费下载，也把免费额度讲明白。",
    freeDescription:
      "拾曲可以免费下载，保存歌曲数量不限。免费版前 30 首已保存歌曲可以完整播放，之后的歌曲每首可试听 45 秒。高级版可完整播放整个曲库，并解锁音频分享与导出。",
    freeFacts: [
      { value: "30", label: "首歌曲免费完整播放" },
      { value: "45秒", label: "之后每首歌曲的试听时长" },
      { value: "∞", label: "可保存的本地歌曲" },
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
