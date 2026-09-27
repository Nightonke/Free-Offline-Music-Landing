import steps from "./guideSteps.json";
import type { Locale } from "./content";

interface GuideCopy {
  nav: string;
  eyebrow: string;
  title: string;
  description: string;
  notice: string;
  jump: string;
  chapterTitles: readonly [string, string, string, string];
  step: string;
  enlarge: string;
  home: string;
  teaserLabel: string;
  teaserTitle: string;
  teaserDescription: string;
  teaserAction: string;
}

export const guideCopy: Record<Locale, GuideCopy> = {
  en: {
    nav: "Detailed guide",
    eyebrow: "TUNETRACE / IPHONE GUIDE",
    title: "From your first recording to your own library.",
    description: "Learn the full flow: start a recording, identify songs, save them to your library, and listen offline.",
    notice: "Record only content that iOS and the source app allow you to capture, and that you have permission to keep.",
    jump: "Jump to a chapter",
    chapterTitles: ["Start recording", "Finish recording", "Identify and save", "Listen from your library"],
    step: "Step",
    enlarge: "Open full-size screenshot",
    home: "Back to home",
    teaserLabel: "NEW TO TUNETRACE?",
    teaserTitle: "Your first recording, all the way to playback.",
    teaserDescription: "Follow the guide to record audio, identify songs, and build a library you can listen to offline.",
    teaserAction: "Open detailed guide",
  },
  "zh-Hans": {
    nav: "详细教程",
    eyebrow: "TUNETRACE / IPHONE 教程",
    title: "从第一次录制，到拥有自己的曲库。",
    description: "从开始录制，到识别歌曲、保存进曲库，再到离线播放，跟着教程一步步完成。",
    notice: "请仅录制 iOS 和来源 App 允许录制、且您有权保存的内容。",
    jump: "跳转到章节",
    chapterTitles: ["开始录制", "结束录制", "识别并保存", "在曲库播放"],
    step: "步骤",
    enlarge: "查看完整截图",
    home: "返回首页",
    teaserLabel: "第一次使用拾曲？",
    teaserTitle: "跟着教程，把喜欢的声音存进曲库。",
    teaserDescription: "了解如何录制、识别并保存歌曲，最后在本地曲库离线播放。",
    teaserAction: "查看详细教程",
  },
  "zh-Hant": {
    nav: "詳細教學",
    eyebrow: "TUNETRACE / IPHONE 教學",
    title: "從第一次錄製，到擁有自己的曲庫。",
    description: "從開始錄製、識別歌曲，到儲存進曲庫並離線播放，跟著教學一步步完成。",
    notice: "請只錄製 iOS 和來源 App 允許錄製、且您有權儲存的內容。",
    jump: "跳至章節",
    chapterTitles: ["開始錄製", "結束錄製", "識別並儲存", "從曲庫播放"],
    step: "步驟",
    enlarge: "查看完整截圖",
    home: "返回首頁",
    teaserLabel: "第一次使用拾曲？",
    teaserTitle: "跟著教學，把喜歡的聲音存進曲庫。",
    teaserDescription: "學會錄製、識別並儲存歌曲，最後從本機曲庫離線播放。",
    teaserAction: "查看詳細教學",
  },
  ja: {
    nav: "詳しいガイド",
    eyebrow: "TUNETRACE / IPHONE ガイド",
    title: "録音から自分のライブラリまで。",
    description: "録音の開始から曲の識別、ライブラリへの保存、オフライン再生まで、順を追って進めましょう。",
    notice: "iOS と再生元のアプリが録音を許可し、保存する権利があるコンテンツのみ録音してください。",
    jump: "章を選ぶ",
    chapterTitles: ["録音を始める", "録音を終える", "識別して保存", "ライブラリで聴く"],
    step: "手順",
    enlarge: "スクリーンショットを拡大",
    home: "ホームに戻る",
    teaserLabel: "TUNETRACE をはじめて使う方へ",
    teaserTitle: "録音から再生まで、一緒に進めましょう。",
    teaserDescription: "録音を始め、曲を識別してライブラリに保存するまで、順を追って確認できます。",
    teaserAction: "詳しいガイドを見る",
  },
  de: {
    nav: "Anleitung",
    eyebrow: "TUNETRACE / IPHONE-ANLEITUNG",
    title: "Von der ersten Aufnahme zur eigenen Bibliothek.",
    description: "Lerne den gesamten Ablauf kennen: Aufnahme starten, Songs erkennen, in der Bibliothek speichern und offline abspielen.",
    notice: "Nimm nur Inhalte auf, deren Aufnahme iOS und die Quell-App erlauben und die du speichern darfst.",
    jump: "Zu einem Abschnitt springen",
    chapterTitles: ["Aufnahme starten", "Aufnahme beenden", "Erkennen und speichern", "Aus der Bibliothek hören"],
    step: "Schritt",
    enlarge: "Screenshot in voller Größe öffnen",
    home: "Zur Startseite",
    teaserLabel: "NEU BEI TUNETRACE?",
    teaserTitle: "Von der ersten Aufnahme bis zum Abspielen.",
    teaserDescription: "Die Anleitung führt dich durch Aufnahme, Erkennung und Speichern in deiner lokalen Bibliothek.",
    teaserAction: "Anleitung öffnen",
  },
  es: {
    nav: "Guía detallada",
    eyebrow: "TUNETRACE / GUÍA PARA IPHONE",
    title: "De tu primera grabación a tu biblioteca.",
    description: "Aprende el proceso completo: inicia una grabación, identifica canciones, guárdalas en tu biblioteca y escúchalas sin conexión.",
    notice: "Graba solo contenido que iOS y la app de origen permitan capturar y que tengas derecho a conservar.",
    jump: "Ir a una sección",
    chapterTitles: ["Iniciar la grabación", "Terminar la grabación", "Identificar y guardar", "Escuchar desde la biblioteca"],
    step: "Paso",
    enlarge: "Abrir captura a tamaño completo",
    home: "Volver al inicio",
    teaserLabel: "¿EMPIEZAS CON TUNETRACE?",
    teaserTitle: "De tu primera grabación a la reproducción.",
    teaserDescription: "Aprende a grabar, identificar canciones y guardarlas en tu biblioteca local para escucharlas sin conexión.",
    teaserAction: "Abrir la guía detallada",
  },
  ko: {
    nav: "자세한 사용법",
    eyebrow: "TUNETRACE / IPHONE 사용법",
    title: "첫 녹음부터 나만의 보관함까지.",
    description: "녹음을 시작하고 노래를 인식해 보관함에 저장한 뒤 오프라인으로 듣는 과정까지 차근차근 따라 해 보세요.",
    notice: "iOS와 원본 앱에서 녹음이 허용되고 저장 권한이 있는 콘텐츠만 녹음하세요.",
    jump: "단계로 이동",
    chapterTitles: ["녹음 시작", "녹음 마치기", "인식 및 저장", "보관함에서 듣기"],
    step: "단계",
    enlarge: "전체 크기 스크린샷 보기",
    home: "홈으로 돌아가기",
    teaserLabel: "TUNETRACE가 처음인가요?",
    teaserTitle: "첫 녹음부터 재생까지 따라 해 보세요.",
    teaserDescription: "오디오를 녹음하고 노래를 인식해 보관함에 저장하는 과정을 차근차근 안내합니다.",
    teaserAction: "자세한 사용법 보기",
  },
  "pt-BR": {
    nav: "Guia detalhado",
    eyebrow: "TUNETRACE / GUIA PARA IPHONE",
    title: "Da primeira gravação à sua biblioteca.",
    description: "Aprenda todo o processo: comece a gravar, identifique músicas, salve na biblioteca e ouça offline.",
    notice: "Grave apenas conteúdo que o iOS e o app de origem permitam capturar e que você tenha direito de guardar.",
    jump: "Ir para uma etapa",
    chapterTitles: ["Começar a gravar", "Encerrar a gravação", "Identificar e salvar", "Ouvir na biblioteca"],
    step: "Passo",
    enlarge: "Abrir captura em tamanho completo",
    home: "Voltar ao início",
    teaserLabel: "COMEÇANDO COM O TUNETRACE?",
    teaserTitle: "Da primeira gravação à reprodução.",
    teaserDescription: "Aprenda a gravar, identificar músicas e salvá-las na biblioteca para ouvir offline.",
    teaserAction: "Abrir guia detalhado",
  },
  fr: {
    nav: "Guide détaillé",
    eyebrow: "TUNETRACE / GUIDE IPHONE",
    title: "Du premier enregistrement à votre bibliothèque.",
    description: "Découvrez toutes les étapes : lancez un enregistrement, identifiez les morceaux, ajoutez-les à votre bibliothèque et écoutez-les hors ligne.",
    notice: "N’enregistrez que les contenus autorisés par iOS et l’app source, et que vous avez le droit de conserver.",
    jump: "Aller à une section",
    chapterTitles: ["Lancer l’enregistrement", "Terminer l’enregistrement", "Identifier et sauvegarder", "Écouter dans la bibliothèque"],
    step: "Étape",
    enlarge: "Ouvrir la capture en taille réelle",
    home: "Retour à l’accueil",
    teaserLabel: "VOUS DÉBUTEZ SUR TUNETRACE ?",
    teaserTitle: "Du premier enregistrement à l’écoute.",
    teaserDescription: "Suivez le guide pour enregistrer, identifier les morceaux et les ajouter à votre bibliothèque locale.",
    teaserAction: "Ouvrir le guide détaillé",
  },
};

export const guideSteps: Record<Locale, readonly string[]> = steps;

export function guidePath(locale: Locale): string {
  return locale === "en" ? "/guide/" : `/${locale}/guide/`;
}
