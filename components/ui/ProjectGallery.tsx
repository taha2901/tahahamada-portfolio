"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { GalleryImage } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/utils/cn";

type ProjectGalleryProps = {
  items: GalleryImage[];
  /** Alt-text fallback for a shot that has no caption. */
  title: string;
  category?: string;
  badge?: string;
};

/** How far a touch has to travel before it counts as a swipe rather than a tap. */
const SWIPE_THRESHOLD = 40;

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Screenshot gallery for the project details page.
 *
 * Data-driven: every shot comes from the `items` array, so adding one later is a single
 * entry in `data/projects.ts`. Portrait phone shots (9:19.5) and landscape desktop shots
 * (16:9) share one fixed-height stage and are letterboxed with `object-contain`, so mixing
 * orientations never shifts the layout.
 */
export default function ProjectGallery({ items, title, category, badge }: ProjectGalleryProps) {
  const { isAr } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // A shot whose file fails to load is dropped instead of leaving a broken frame behind.
  const [brokenSources, setBrokenSources] = useState<string[]>([]);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Tabs are derived from the shots themselves — two runs of the same app (an Arabic RTL
  // one and an English LTR one, say) become two tabs without any extra configuration.
  const groups = useMemo(() => {
    const found: { ar: string; en: string }[] = [];
    items.forEach((item) => {
      if (!item.group_en || !item.group_ar) return;
      if (!found.some((group) => group.en === item.group_en)) {
        found.push({ ar: item.group_ar, en: item.group_en });
      }
    });
    return found;
  }, [items]);

  const hasTabs = groups.length > 1;

  const shots = useMemo(
    () =>
      items.filter(
        (item) =>
          !brokenSources.includes(item.src) &&
          (!hasTabs || !activeGroup || !item.group_en || item.group_en === activeGroup)
      ),
    [items, brokenSources, hasTabs, activeGroup]
  );

  const total = shots.length;
  const safeIndex = total > 0 ? Math.min(activeIndex, total - 1) : 0;
  const activeShot = shots[safeIndex];
  // Projects mapped from the older `images` array can have empty captions.
  const activeCaption =
    (activeShot && (isAr ? activeShot.caption_ar : activeShot.caption_en)) || undefined;

  const labels = {
    prevImage: isAr ? "الصورة السابقة" : "Previous image",
    nextImage: isAr ? "الصورة التالية" : "Next image",
    expandImage: isAr ? "تكبير الصورة" : "Open full size",
    closeImage: isAr ? "إغلاق" : "Close",
    viewer: isAr ? "عارض الصور" : "Screenshot viewer",
  };

  const goTo = useCallback(
    (delta: number) => {
      setActiveIndex((i) => (total < 2 ? 0 : (i + delta + total) % total));
    },
    [total]
  );

  // The left button always steps toward the visually previous slide, which is the next
  // item when the page is RTL.
  const stepBack = useCallback(() => goTo(isAr ? 1 : -1), [goTo, isAr]);
  const stepForward = useCallback(() => goTo(isAr ? -1 : 1), [goTo, isAr]);

  // Open on the first tab, and follow the tabs if the project's shots change.
  useEffect(() => {
    setActiveGroup(groups.length > 1 ? groups[0].en : null);
    setActiveIndex(0);
  }, [groups]);

  // Keep the index in range when a shot drops out of the list.
  useEffect(() => {
    setActiveIndex((i) => (total > 0 ? Math.min(i, total - 1) : 0));
  }, [total]);

  // Arrows always navigate; Escape closes the fullscreen viewer.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        return;
      }
      if (total < 2) return;
      if (e.key === "ArrowRight") goTo(isAr ? -1 : 1);
      if (e.key === "ArrowLeft") goTo(isAr ? 1 : -1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, isAr, total]);

  // Lock body scroll and trap focus inside the viewer while it is open.
  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !lightboxRef.current) return;
      const focusable = Array.from(
        lightboxRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [lightboxOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    // Dragging left reveals the next shot in LTR, and the previous one in RTL.
    goTo(deltaX < 0 ? (isAr ? -1 : 1) : isAr ? 1 : -1);
  };

  const markBroken = (src: string) =>
    setBrokenSources((sources) => (sources.includes(src) ? sources : [...sources, src]));

  if (!activeShot) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Group tabs — only rendered when the shots actually split into groups */}
      {hasTabs && (
        <div className="flex gap-2 flex-wrap">
          {groups.map((group) => (
            <button
              key={group.en}
              type="button"
              onClick={() => {
                setActiveGroup(group.en);
                setActiveIndex(0);
              }}
              aria-pressed={activeGroup === group.en}
              className={cn(
                "px-4 py-1.5 text-xs rounded-full transition-all",
                activeGroup === group.en
                  ? "bg-cyan-400 text-black"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              )}
            >
              {isAr ? group.ar : group.en}
            </button>
          ))}
        </div>
      )}

      {/* Stage — fixed height so portrait and landscape shots never resize the layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="group relative h-[420px] sm:h-[480px] lg:h-[540px] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 shadow-xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={activeShot.src}
          src={activeShot.src}
          alt={activeCaption ?? title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority={safeIndex === 0}
          onError={() => markBroken(activeShot.src)}
          className="object-contain"
        />

        {/* Click anywhere on the shot to open it full size */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={labels.expandImage}
          className="absolute inset-0 cursor-zoom-in"
        />

        {/* Visual Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

        {/* Category Floating Badge */}
        {category && (
          <span className="absolute top-4 left-4 text-xs px-3 py-1.5 rounded-full font-medium bg-black/60 backdrop-blur-md text-white border border-white/10 pointer-events-none">
            {category}
          </span>
        )}

        {/* Badge Floating Right */}
        {badge && (
          <span className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full font-medium bg-cyan-500/85 backdrop-blur-md text-white shadow-lg pointer-events-none">
            ★ {badge}
          </span>
        )}

        {/* Expand hint */}
        <span className="absolute bottom-4 right-4 p-2 rounded-full bg-black/55 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <Maximize2 size={14} />
        </span>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={stepBack}
              aria-label={isAr ? labels.nextImage : labels.prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={stepForward}
              aria-label={isAr ? labels.prevImage : labels.nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <span className="absolute bottom-4 left-4 text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-white pointer-events-none">
              {safeIndex + 1} / {total}
            </span>
          </>
        )}
      </motion.div>

      {/* Thumbnails — the flex row follows the page direction, so RTL reverses it */}
      {total > 1 && (
        <div className="flex gap-2.5 overflow-x-auto py-2">
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={isAr ? shot.caption_ar : shot.caption_en}
              aria-current={i === safeIndex}
              className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-slate-100 dark:bg-slate-900 ${
                i === safeIndex
                  ? "border-cyan-400 scale-95 shadow-md"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-400"
              }`}
            >
              <Image
                src={shot.src}
                alt=""
                fill
                sizes="80px"
                loading="lazy"
                onError={() => markBroken(shot.src)}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {/* Caption of the currently previewed screenshot */}
      {activeCaption && (
        <p className="text-xs text-slate-500 dark:text-slate-400 px-1">{activeCaption}</p>
      )}

      {/* Fullscreen screenshot viewer */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label={labels.viewer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={() => setLightboxOpen(false)}
              aria-label={labels.closeImage}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div
              className="relative w-full max-w-5xl h-[82vh]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={activeShot.src}
                alt={activeCaption ?? title}
                fill
                sizes="100vw"
                onError={() => markBroken(activeShot.src)}
                className="object-contain rounded-2xl"
              />
            </div>

            {activeCaption && (
              <p className="mt-4 text-xs md:text-sm text-slate-300 text-center max-w-2xl">
                {activeCaption}
              </p>
            )}

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    stepBack();
                  }}
                  aria-label={isAr ? labels.nextImage : labels.prevImage}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    stepForward();
                  }}
                  aria-label={isAr ? labels.prevImage : labels.nextImage}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight size={22} />
                </button>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 text-white">
                  {safeIndex + 1} / {total}
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
