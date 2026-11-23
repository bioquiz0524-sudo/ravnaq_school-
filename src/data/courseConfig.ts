export interface CertificateItem {
  id: string;
  src: string;
  alt: string;
  studentName: string;
  grade: string;
  totalScore: string;
  writtenScore: string;
}

export interface LiveLessonConfig {
  centerName: string;
  logoSrc: string;
  instructorName: string;
  instructorRole: string;
  instructorPhotoSrc: string;
  telegramChannelUrl: string;
  eventDate: string;
  eventFormat: string;
  eventTime: string;
  headlineStart: string;
  headlineHighlight: string;
  subheadline: string;
  badgeText: string;
  giftLabel: string;
  ctaLabel: string;
  ctaHint: string;
  giftBannerPrefix: string;
  giftBannerHighlight: string;
  giftBannerSuffix: string;
  benefitsTitle: string;
  benefits: {
    number: string;
    boldPart: string;
    restPart: string;
  }[];
  resultsTitle: string;
  certificates: CertificateItem[];
  footerText: string;
}

export const LIVE_LESSON_CONFIG: LiveLessonConfig = {
  centerName: 'Ravnaq O‘quv Markazi',
  logoSrc: '/assets/aistudio/IMG_20261123_124032_590_43f5d12a.jpg',
  instructorName: 'Boburmirzo Yunusboyev',
  instructorRole: 'Biologiya fani ustozi',
  instructorPhotoSrc: '/assets/aistudio/IMG_20261122_154431_112_364eee59.jpg',
  telegramChannelUrl: 'https://t.me/+JmK7bEWAQH83ZDVi',
  eventDate: '5–6-dekabr',
  eventFormat: 'Bepul jonli vebinar',
  eventTime: '20:00',
  headlineStart: 'Biologiyadan milliy sertifikatga tayyorlanayotgan bo‘lsangiz,',
  headlineHighlight: 'bu xatoni hoziroq to‘xtating!',
  subheadline: 'Xatolarni batafsil vebinarda tahlil qilamiz.',
  badgeText: 'A+',
  giftLabel: 'A+ qo‘llanma',
  ctaLabel: 'Bepul vebinarga qatnashish',
  ctaHint: 'Telegram ochilgach «Qo‘shilish» tugmasini bosing',
  giftBannerPrefix: 'Kanalga qo‘shilganlarga',
  giftBannerHighlight: 'A+ tayyor qo‘llanmasi',
  giftBannerSuffix: 'sovg‘aga beriladi',
  benefitsTitle: 'Bepul darsda siz:',
  benefits: [
    {
      number: '01',
      boldPart: '75 ball yozma ish',
      restPart: 'sirlari',
    },
    {
      number: '02',
      boldPart: 'Qishki imtihonga',
      restPart: 'tayyorgarlik',
    },
    {
      number: '03',
      boldPart: 'A va A+ olgan o‘quvchilarga',
      restPart: 'kurs to‘lovini qaytib berish',
    },
  ],
  resultsTitle: 'Natijalar',
  certificates: [
    {
      id: 'cert-islomjon',
      src: '/assets/aistudio/IMG_20261122_235345_205_edc50350.jpg',
      alt: 'Ubraximjanov Islomjon — Biologiya A+ milliy sertifikati (71.38 ball, yozma ish 75.0)',
      studentName: 'Ubraximjanov Islomjon',
      grade: 'A+',
      totalScore: '71.38 ball',
      writtenScore: '75.0',
    },
    {
      id: 'cert-muxarramxon',
      src: '/assets/aistudio/IMG_20261122_235341_331_adbf2d5c.jpg',
      alt: 'To‘xtaboyeva Muxarramxon — Biologiya A milliy sertifikati (67.29 ball, yozma ish 75.0)',
      studentName: 'To‘xtaboyeva Muxarramxon',
      grade: 'A',
      totalScore: '67.29 ball',
      writtenScore: '75.0',
    },
    {
      id: 'cert-bexruzbek',
      src: '/assets/aistudio/IMG_20261122_235334_364_c31b330b.jpg',
      alt: 'Abdulxapisov Bexruzbek — Biologiya A milliy sertifikati (66.55 ball, yozma ish 73.02)',
      studentName: 'Abdulxapisov Bexruzbek',
      grade: 'A',
      totalScore: '66.55 ball',
      writtenScore: '73.02',
    },
    {
      id: 'cert-ilyosbek',
      src: '/assets/aistudio/IMG_20261122_235314_923_376fbb22.jpg',
      alt: 'Xamraboyev Ilyosbek — Biologiya A milliy sertifikati (66.27 ball, yozma ish 71.19)',
      studentName: 'Xamraboyev Ilyosbek',
      grade: 'A',
      totalScore: '66.27 ball',
      writtenScore: '71.19',
    },
    {
      id: 'cert-azimjon',
      src: '/assets/aistudio/IMG_20261122_235327_275_51911bb6.jpg',
      alt: 'Qurbonaliyev Azimjon — Biologiya A milliy sertifikati (65.21 ball, yozma ish 71.49)',
      studentName: 'Qurbonaliyev Azimjon',
      grade: 'A',
      totalScore: '65.21 ball',
      writtenScore: '71.49',
    },
  ],
  footerText: '© Boburmirzo Yunusboyev · Ravnaq O‘quv Markazi · 5–6-dekabr, 20:00',
};
