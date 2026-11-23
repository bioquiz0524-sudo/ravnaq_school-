import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gift,
  Maximize2,
  X,
} from 'lucide-react';
import { ResilientImage } from './components/ResilientImage';
import { CertificateItem, LIVE_LESSON_CONFIG } from './data/courseConfig';

function PrimaryTelegramButton() {
  return (
    <a
      href={LIVE_LESSON_CONFIG.telegramChannelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#F5A623] hover:bg-[#FBBF24] active:translate-y-0.5 text-[#060B1E] font-bold text-base sm:text-lg shadow-[0_5px_0_0_#B4690E] hover:shadow-[0_4px_0_0_#B4690E] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623]"
    >
      <span>{LIVE_LESSON_CONFIG.ctaLabel}</span>
      <ArrowUpRight
        className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

export default function App() {
  const certificates = LIVE_LESSON_CONFIG.certificates;
  const [certIndex, setCertIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomedCert, setZoomedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!isAutoPlaying || zoomedCert) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setCertIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying, zoomedCert, certificates.length]);

  const currentCert = certificates[certIndex];

  const handlePrevCert = () => {
    setIsAutoPlaying(false);
    setCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const handleNextCert = () => {
    setIsAutoPlaying(false);
    setCertIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <div className="min-h-screen academic-grid-bg flex justify-center">
      <div className="w-full max-w-[560px] min-h-screen px-5 sm:px-8 pt-5 pb-12 flex flex-col items-center">
        {/* Top corner Ravnaq logo + event schedule bar */}
        <header className="w-full mb-7 space-y-4">
          <div className="flex items-center justify-between gap-4 pb-3.5 border-b border-white/10">
            <a
              href={LIVE_LESSON_CONFIG.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5A623] rounded-lg"
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#F5A623]/40 bg-[#060B1E] shrink-0">
                <ResilientImage
                  src={LIVE_LESSON_CONFIG.logoSrc}
                  alt={LIVE_LESSON_CONFIG.centerName}
                  fallbackTitle="R"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#E2E8F0] whitespace-nowrap">
                {LIVE_LESSON_CONFIG.centerName}
              </span>
            </a>

            <div className="text-xs sm:text-sm font-medium text-[#F5A623] whitespace-nowrap shrink-0">
              {LIVE_LESSON_CONFIG.eventFormat}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1733] border border-[#F5A623]/25 text-[#F8FAFC] font-medium whitespace-nowrap">
              <Calendar className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
              <span>{LIVE_LESSON_CONFIG.eventDate}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1733] border border-[#F5A623]/25 text-[#F8FAFC] font-mono font-medium whitespace-nowrap tabular-nums">
              <Clock className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
              <span>{LIVE_LESSON_CONFIG.eventTime}</span>
            </div>
          </div>
        </header>

        <main className="w-full flex-1 flex flex-col items-center">
          {/* Headline & Key Highlight */}
          <div className="text-center space-y-3 mb-7">
            <h1
              className="font-display font-bold tracking-tight text-white text-[1.55rem] sm:text-[1.95rem] leading-[1.2]"
              style={{ textWrap: 'balance' }}
            >
              {LIVE_LESSON_CONFIG.headlineStart}{' '}
              <span className="text-[#F5A623] underline decoration-[#F5A623]/40 underline-offset-4">
                {LIVE_LESSON_CONFIG.headlineHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base font-medium text-[#CBD5E1] max-w-md mx-auto">
              {LIVE_LESSON_CONFIG.subheadline}
            </p>
          </div>

          {/* Stationary Centered Instructor Portrait */}
          <div className="relative w-full max-w-[350px] mx-auto mb-6">
            <div
              aria-hidden="true"
              className="absolute -top-3.5 -left-3 z-10 w-[62px] h-[62px] rounded-full bg-[#060B1E] border-2 border-[#F5A623] shadow-[0_8px_20px_rgba(0,0,0,0.45)] flex items-center justify-center -rotate-6"
            >
              <span className="font-display text-[#F5A623] text-2xl font-bold leading-none">
                {LIVE_LESSON_CONFIG.badgeText}
              </span>
            </div>

            <div className="relative w-full aspect-[4/4.5] rounded-3xl overflow-hidden bg-[#0F1733] border border-[#F5A623]/30 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <ResilientImage
                src={LIVE_LESSON_CONFIG.instructorPhotoSrc}
                alt={`${LIVE_LESSON_CONFIG.instructorName} — ${LIVE_LESSON_CONFIG.instructorRole}`}
                fallbackTitle={LIVE_LESSON_CONFIG.instructorName}
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060B1E]/90 via-[#060B1E]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-4 text-center px-4">
                <div className="font-display font-bold text-base text-white">
                  {LIVE_LESSON_CONFIG.instructorName}
                </div>
                <div className="text-xs text-[#F5A623] font-medium">
                  {LIVE_LESSON_CONFIG.instructorRole}
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Block */}
          <div className="w-full space-y-2.5 text-center mb-6">
            <p className="text-sm font-medium text-[#E2E8F0]">
              <span className="font-semibold text-[#F5A623]">Sovg‘a:</span>{' '}
              {LIVE_LESSON_CONFIG.giftLabel}
            </p>

            <PrimaryTelegramButton />

            <p className="text-xs sm:text-sm text-[#94A3B8]">
              {LIVE_LESSON_CONFIG.ctaHint}
            </p>
          </div>

          {/* Gift Highlight Banner */}
          <div className="w-full rounded-2xl bg-[#0F1733] border border-[#F5A623]/30 px-4 py-3.5 mb-7 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 text-[#F5A623] flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </div>
            <p className="text-sm sm:text-[15px] font-medium text-[#E2E8F0] leading-snug">
              {LIVE_LESSON_CONFIG.giftBannerPrefix}{' '}
              <span className="font-bold text-[#F5A623]">
                {LIVE_LESSON_CONFIG.giftBannerHighlight}
              </span>{' '}
              {LIVE_LESSON_CONFIG.giftBannerSuffix}
            </p>
          </div>

          {/* Key Benefits Card */}
          <section
            aria-labelledby="benefits-heading"
            className="w-full rounded-2xl bg-[#0F1733] border border-white/10 px-5 sm:px-7 py-6 mb-7"
          >
            <h2
              id="benefits-heading"
              className="font-display text-xl sm:text-2xl font-bold text-white mb-5"
            >
              {LIVE_LESSON_CONFIG.benefitsTitle}
            </h2>

            <ol className="space-y-4 divide-y divide-white/10">
              {LIVE_LESSON_CONFIG.benefits.map((item, idx) => (
                <li
                  key={item.number}
                  className={`flex items-start gap-4 ${idx > 0 ? 'pt-4' : ''}`}
                >
                  <span className="font-mono text-sm font-semibold text-[#F5A623] tabular-nums pt-0.5 shrink-0">
                    {item.number}
                  </span>
                  <p className="text-[15px] sm:text-base text-[#E2E8F0] leading-snug">
                    <strong className="font-bold text-white">{item.boldPart}</strong>{' '}
                    {item.restPart}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Compact "Natijalar" Certificate Slideshow */}
          <section
            aria-labelledby="results-heading"
            className="w-full rounded-2xl bg-[#0F1733] border border-white/10 px-5 py-5 mb-7"
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2
                id="results-heading"
                className="font-display text-xl font-bold text-white leading-none"
              >
                {LIVE_LESSON_CONFIG.resultsTitle}
              </h2>
              <span className="font-mono text-xs font-medium text-[#94A3B8] tabular-nums">
                {certIndex + 1} / {certificates.length}
              </span>
            </div>

            <div className="max-w-[250px] mx-auto">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#F5A623]/25 bg-[#060B1E]">
                <ResilientImage
                  key={currentCert.src}
                  src={currentCert.src}
                  alt={currentCert.alt}
                  fallbackTitle={currentCert.studentName}
                  className="w-full h-full object-contain p-1.5"
                />

                <button
                  type="button"
                  onClick={() => setZoomedCert(currentCert)}
                  aria-label="Sertifikatni kattalashtirish"
                  className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-[#060B1E]/85 hover:bg-[#060B1E] border border-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handlePrevCert}
                  aria-label="Oldingi natija"
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#060B1E]/85 hover:bg-[#060B1E] border border-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNextCert}
                  aria-label="Keyingi natija"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#060B1E]/85 hover:bg-[#060B1E] border border-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 text-center space-y-0.5">
                <div className="text-sm font-bold text-white">
                  {currentCert.studentName}
                </div>
                <div className="text-xs text-[#CBD5E1] tabular-nums">
                  <span className="font-semibold text-[#F5A623]">
                    Daraja: {currentCert.grade}
                  </span>{' '}
                  · {currentCert.totalScore} · Yozma ish: {currentCert.writtenScore}
                </div>
              </div>

              <div
                className="mt-3 flex items-center justify-center gap-1.5"
                role="tablist"
                aria-label="Natijalar slaydlari"
              >
                {certificates.map((cert, idx) => {
                  const active = idx === certIndex;
                  return (
                    <button
                      key={cert.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={cert.studentName}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCertIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-150 ${
                        active
                          ? 'w-5 bg-[#F5A623]'
                          : 'w-1.5 bg-white/20 hover:bg-[#F5A623]/60'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bottom Repeat CTA */}
          <div className="w-full mb-8">
            <PrimaryTelegramButton />
          </div>
        </main>

        <footer className="w-full text-center text-xs sm:text-sm text-[#94A3B8] pt-4 border-t border-white/10">
          {LIVE_LESSON_CONFIG.footerText}
        </footer>
      </div>

      {/* Certificate Zoom Modal */}
      {zoomedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomedCert.studentName}
          className="fixed inset-0 z-50 bg-[#060B1E]/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setZoomedCert(null)}
        >
          <div
            className="max-w-lg w-full bg-[#0F1733] rounded-2xl border border-[#F5A623]/30 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-white">
                  {zoomedCert.studentName}
                </div>
                <div className="text-xs text-[#CBD5E1] tabular-nums">
                  <span className="font-semibold text-[#F5A623]">
                    Daraja: {zoomedCert.grade}
                  </span>{' '}
                  · {zoomedCert.totalScore} · Yozma ish: {zoomedCert.writtenScore}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setZoomedCert(null)}
                aria-label="Yopish"
                className="w-9 h-9 rounded-lg border border-white/15 inline-flex items-center justify-center text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 bg-[#060B1E]">
              <ResilientImage
                src={zoomedCert.src}
                alt={zoomedCert.alt}
                fallbackTitle={zoomedCert.studentName}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
