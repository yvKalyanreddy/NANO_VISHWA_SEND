/**
 * HeroScroll.tsx
 * ─────────────
 * Production-grade GSAP + Canvas frame-scroll hero section for "do Nature".
 *
 * Single 15-second video — first ~8s bottles, rest bowls.
 * Three-act narrative driven by scroll progress:
 *   Act 1 — "Nature in the Bottles"  (0–53% of video)
 *   Act 2 — "Nature in the Bowls"    (53–100% of video)
 *   Act 3 — Final Hero State         (static brand image + CTA buttons)
 *
 * Architecture:
 *   - Offscreen <video> + <canvas> extracts N frames at mount time
 *   - A single visible <canvas> renders frames via requestAnimationFrame
 *   - GSAP ScrollTrigger drives a progress float; rAF reads it and draws
 *   - Text overlays + final state use opacity driven from refs (no re-renders)
 *   - Only three pieces of React state: loading, loadProgress, finalState
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiKiwiFruit, GiOrangeSlice, GiCarrot, GiCookingPot, GiLeafSwirl } from "react-icons/gi";
import { LuSalad, LuTimer, LuSparkles, LuHeart, LuLeaf } from "react-icons/lu";
import { PiFlowerLotusBold, PiBowlFoodBold } from "react-icons/pi";
import websiteLogo from "../assets/WebsiteLogo.png";
import logoOnly from "../assets/logo_only.png";
import "./HeroScroll.css";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════════
   CONFIGURATION
   ═══════════════════════════════════════════════════════════════ */

/** Total frames extracted from the single video */
const TOTAL_FRAMES_DESKTOP = 60;
const TOTAL_FRAMES_MOBILE = 40;

/**
 * SCROLL STRENGTH — controls how much scrolling is needed to
 * play through the entire animation.
 *
 *   300 = 3× viewport height of scroll  (default — moderate pace)
 *   200 = 2× viewport height             (faster — less scroll needed)
 *   400 = 4× viewport height             (slower — more scroll needed)
 *   500 = 5× viewport height             (very slow, cinematic)
 *
 * Decrease to make the animation progress faster per scroll.
 * Increase to make it slower / more drawn-out.
 */
const SCROLL_HEIGHT_VH = 300;

/** Start ScrollTrigger once this fraction of frames is loaded */
const READY_THRESHOLD = 0.8;

// TODO: replace with actual video path if changed
const VIDEO_SRC = "/Herovideo.mp4";

/** Final hero background — falls back to gradient if missing */
const HERO_FINAL_IMAGE = "/Heroimage.jpeg";

/* ═══════════════════════════════════════════════════════════════
   MODULE-LEVEL FRAME CACHE
   ─────────────────────────
   Persists extracted frames across React route changes so the
   component doesn't re-decode the entire video on every visit.
   ═══════════════════════════════════════════════════════════════ */
interface FrameCache {
  frames: ImageBitmap[];
  totalExpected: number;
  complete: boolean;
}

const frameCache: { desktop: FrameCache | null; mobile: FrameCache | null } = {
  desktop: null,
  mobile: null,
};

/**
 * Phase definitions for text overlays.
 * The single 15s video is ~53% bottles (0–8s) and ~47% bowls (8–15s).
 * Progress maps over the 300vh scroll, so phase boundaries reflect that split.
 */
const PHASES = [
  {
    id: "bottles",
    start: 0.0,
    end: 0.45,
    heading: "Nature in the Bottles",
    sub: "Cold-pressed. Wild-harvested. Pure.",
  },
  {
    id: "bowls",
    start: 0.50,
    end: 0.90,
    heading: "Nature in the Bowls",
    sub: "Every spoonful, straight from the source.",
  },
] as const;

/** Progress threshold for Act 3 transition */
const FINAL_THRESHOLD = 0.93;

/* ═══════════════════════════════════════════════════════════════
   FRAME EXTRACTION UTILITY
   ═══════════════════════════════════════════════════════════════ */

/**
 * Extracts `count` evenly-spaced frames from a video URL as ImageBitmap objects.
 * Uses the seeked-event pattern on an offscreen <video> + <canvas>.
 */
function extractFrames(
  src: string,
  count: number,
  onFrame: (bitmap: ImageBitmap, index: number) => void,
  onError: () => void
): Promise<void> {
  return new Promise<void>((resolve) => {
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.src = src;

    const offCanvas = document.createElement("canvas");
    const offCtx = offCanvas.getContext("2d")!;
    let frameIndex = 0;

    const handleError = () => {
      console.warn(`[HeroScroll] Could not load video: ${src}`);
      onError();
      resolve();
    };

    video.addEventListener("error", handleError);

    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration;
      if (!duration || !isFinite(duration)) {
        handleError();
        return;
      }

      offCanvas.width = Math.round(video.videoWidth * 0.5);
      offCanvas.height = Math.round(video.videoHeight * 0.5);

      const seekToFrame = () => {
        if (frameIndex >= count) {
          resolve();
          return;
        }
        const t = (frameIndex / (count - 1)) * duration;
        video.currentTime = Math.min(t, duration - 0.01);
      };

      video.addEventListener("seeked", async () => {
        offCtx.drawImage(video, 0, 0, offCanvas.width, offCanvas.height);
        try {
          const bitmap = await createImageBitmap(offCanvas);
          onFrame(bitmap, frameIndex);
        } catch {
          // Skip frames that fail
        }
        frameIndex++;
        seekToFrame();
      });

      seekToFrame();
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function HeroScroll() {
  /* ── React state (minimal — only for UI that needs re-render) ── */
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [tipIdx, setTipIdx] = useState(0);
  const [floatingQuotes, setFloatingQuotes] = useState<
    { id: number; text: string; icon: React.ReactNode; x: number; y: number }[]
  >([]);
  const floatingIdRef = useRef(0);

  /* ── Refs — hot-path values that should NEVER cause re-renders ── */
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<ImageBitmap[]>([]);
  const frameRef = useRef(0); // float frame index
  const progressRef = useRef(0);
  const dirtyRef = useRef(true);
  const rafIdRef = useRef(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const isMobileRef = useRef(window.innerWidth < 768);

  // DOM refs for direct manipulation (no setState)
  const overlayRefsMap = useRef<Map<string, HTMLDivElement>>(new Map());
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const finalStateRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const loadingOverlayRef = useRef<HTMLDivElement>(null);

  // Track whether final state is currently active (avoids repeated toggles)
  const finalActiveRef = useRef(false);

  /* ── Register overlay ref ── */
  const setOverlayRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      if (el) overlayRefsMap.current.set(id, el);
    },
    []
  );

  /* ═══════════════════════════════════════════════════════════════
     DRAW — renders the current frame onto the visible canvas
     ═══════════════════════════════════════════════════════════════ */
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;
    if (images.length === 0) return;

    const idx = Math.min(
      Math.floor(frameRef.current),
      images.length - 1
    );
    const img = images[idx];
    if (!img) return;

    // object-fit: cover math
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, []);

  /* ═══════════════════════════════════════════════════════════════
     rAF LOOP — reads refs, updates DOM directly, draws
     ═══════════════════════════════════════════════════════════════ */
  const tick = useCallback(() => {
    const progress = progressRef.current;

    /* ── Phase text overlays ── */
    for (const phase of PHASES) {
      const el = overlayRefsMap.current.get(phase.id);
      if (!el) continue;

      let opacity = 0;
      if (progress >= phase.start && progress <= phase.end) {
        const range = phase.end - phase.start;
        const fadeZone = range * 0.15;

        // Skip fade-in for the very first phase — show it immediately
        if (phase.start === 0) {
          if (progress > phase.end - fadeZone) {
            opacity = (phase.end - progress) / fadeZone;
          } else {
            opacity = 1;
          }
        } else {
          // Normal fade-in / fade-out for subsequent phases
          if (progress < phase.start + fadeZone) {
            opacity = (progress - phase.start) / fadeZone;
          } else if (progress > phase.end - fadeZone) {
            opacity = (phase.end - progress) / fadeZone;
          } else {
            opacity = 1;
          }
        }
      }
      el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
    }

    /* ── Final state (Act 3) ── */
    const shouldFinal = progress >= FINAL_THRESHOLD;
    if (shouldFinal !== finalActiveRef.current) {
      finalActiveRef.current = shouldFinal;
      if (canvasWrapRef.current) {
        canvasWrapRef.current.style.opacity = shouldFinal ? "0" : "1";
      }
      if (finalStateRef.current) {
        finalStateRef.current.style.opacity = shouldFinal ? "1" : "0";
        finalStateRef.current.style.pointerEvents = shouldFinal ? "auto" : "none";
      }
    }

    /* ── Scroll hint ── */
    if (scrollHintRef.current) {
      scrollHintRef.current.style.opacity = progress > 0.04 ? "0" : "1";
    }

    /* ── Draw canvas frame ── */
    if (dirtyRef.current) {
      dirtyRef.current = false;
      draw();
    }

    rafIdRef.current = requestAnimationFrame(tick);
  }, [draw]);

  /* ═══════════════════════════════════════════════════════════════
     RESIZE HANDLER
     ═══════════════════════════════════════════════════════════════ */
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    isMobileRef.current = window.innerWidth < 768;
    dirtyRef.current = true;
  }, []);

  /* ═══════════════════════════════════════════════════════════════
     MAIN EFFECT — frame extraction, ScrollTrigger, rAF
     ═══════════════════════════════════════════════════════════════ */
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const cacheKey = isMobile ? "mobile" : "desktop";
    const totalExpected = isMobile
      ? TOTAL_FRAMES_MOBILE
      : TOTAL_FRAMES_DESKTOP;

    let scrollTriggerCreated = false;

    /* ── Size canvas ── */
    const canvas = canvasRef.current!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* ── Create ScrollTrigger ── */
    const createScrollTrigger = () => {
      if (scrollTriggerCreated || !wrapperRef.current) return;
      scrollTriggerCreated = true;

      const st = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          const total = imagesRef.current.length;
          if (total === 0) return;
          const rawFrame = self.progress * (total - 1);
          frameRef.current = rawFrame;
          progressRef.current = self.progress;
          dirtyRef.current = true;
        },
      });

      scrollTriggerRef.current = st;
    };

    const dismissLoading = () => {
      setLoading(false);
      setLoadProgress(100);
      // Re-enable scrolling
      document.body.style.overflow = "";
      if (loadingOverlayRef.current) {
        loadingOverlayRef.current.style.opacity = "0";
        setTimeout(() => {
          if (loadingOverlayRef.current) {
            loadingOverlayRef.current.style.display = "none";
          }
        }, 600);
      }
    };

    /* ═══════════════════════════════════════════════════════════
       FAST PATH: Frames already cached — skip extraction entirely
       ═══════════════════════════════════════════════════════════ */
    const cached = frameCache[cacheKey];
    if (cached && cached.complete) {
      // Restore frames from cache instantly
      imagesRef.current = cached.frames;
      frameRef.current = 0;
      dirtyRef.current = true;

      // Hide loading overlay immediately (no waiting)
      dismissLoading();

      // Create ScrollTrigger on next frame so DOM has settled
      requestAnimationFrame(() => createScrollTrigger());
    } else {
      // Lock scrolling while we extract frames
      document.body.style.overflow = "hidden";
      /* ═══════════════════════════════════════════════════════════
         SLOW PATH: First visit — extract frames and populate cache
         ═══════════════════════════════════════════════════════════ */
      const allFrames: (ImageBitmap | null)[] = new Array(totalExpected).fill(null);
      let loadedCount = 0;

      // Initialize cache entry
      if (!frameCache[cacheKey]) {
        frameCache[cacheKey] = { frames: [], totalExpected, complete: false };
      }

      /* ── Handle a newly-extracted frame ── */
      const onFrame = (bitmap: ImageBitmap, frameIdx: number) => {
        allFrames[frameIdx] = bitmap;
        loadedCount++;

        // Compact array for rendering (skip nulls)
        const compacted = allFrames.filter((b): b is ImageBitmap => b !== null);
        imagesRef.current = compacted;

        // Update loading progress (via setState — infrequent)
        const pct = Math.round((loadedCount / totalExpected) * 100);
        setLoadProgress(pct);

        // Draw first frame immediately
        if (loadedCount === 1) {
          frameRef.current = 0;
          dirtyRef.current = true;
        }

        // Create ScrollTrigger once threshold reached
        if (loadedCount / totalExpected >= READY_THRESHOLD) {
          createScrollTrigger();
        }

        // Fully loaded — store in cache
        if (loadedCount >= totalExpected) {
          frameCache[cacheKey] = {
            frames: compacted,
            totalExpected,
            complete: true,
          };
          dismissLoading();
          createScrollTrigger();
        }
      };

      /* ── Handle video load error ── */
      const onVideoError = () => {
        loadedCount = totalExpected;
        dismissLoading();
        createScrollTrigger();
      };

      /* ── Start extraction from single video ── */
      extractFrames(VIDEO_SRC, totalExpected, onFrame, onVideoError);
    }

    /* ── Start rAF loop ── */
    rafIdRef.current = requestAnimationFrame(tick);

    /* ── Resize listener (debounced) ── */
    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 200);
    };
    window.addEventListener("resize", debouncedResize);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
      // Always restore scroll on unmount
      document.body.style.overflow = "";
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      // Do NOT close ImageBitmaps — they're shared via the module-level cache
      imagesRef.current = [];
    };
  }, [tick, handleResize]);

  /* ═══════════════════════════════════════════════════════════════
     LOADING TIPS — rotate automatically
     ═══════════════════════════════════════════════════════════════ */

  const LOADING_TIPS: { icon: React.ReactNode; text: string }[] = [
    { icon: <LuLeaf size={22} />, text: "Our juices are cold-pressed fresh every single morning" },
    { icon: <GiCookingPot size={22} />, text: "Good things take time — we've been cooking this up for you" },
    { icon: <GiOrangeSlice size={22} />, text: "Citrus Sunrise — Orange, Carrot, Turmeric, Ginger" },
    { icon: <LuSalad size={22} />, text: "Try our Mediterranean Bliss salad — a house favorite" },
    { icon: <PiBowlFoodBold size={22} />, text: "Classic Acai bowl — topped with fresh berries & granola" },
    { icon: <LuTimer size={22} />, text: "Great food takes patience — almost there!" },
    { icon: <GiKiwiFruit size={22} />, text: "Over 30 seasonal ingredients rotated every week" },
    { icon: <LuHeart size={22} />, text: "10,000+ bowls & bottles served every month with love" },
    { icon: <GiLeafSwirl size={22} />, text: "We started in 2019 with just one small juice bar" },
    { icon: <LuSparkles size={22} />, text: "Every recipe is crafted to nourish your body & soul" },
    { icon: <PiFlowerLotusBold size={22} />, text: "Wellness is a journey — let us fuel yours" },
    { icon: <GiCarrot size={22} />, text: "All natural, no preservatives, no shortcuts" },
  ];

  /** Patience quotes that float near cursor when user tries to interact with navbar */
  const PATIENCE_QUOTES: { icon: React.ReactNode; text: string }[] = [
    { icon: <LuSparkles size={14} />, text: "Patience is the secret ingredient" },
    { icon: <LuLeaf size={14} />, text: "Almost ready, hang tight!" },
    { icon: <LuHeart size={14} />, text: "Good things come to those who wait" },
    { icon: <GiOrangeSlice size={14} />, text: "We're pressing fresh frames for you" },
    { icon: <PiFlowerLotusBold size={14} />, text: "Just a moment — perfection takes time" },
    { icon: <GiCookingPot size={14} />, text: "Sit back, the magic is brewing" },
    { icon: <GiLeafSwirl size={14} />, text: "Nature doesn't rush" },
    { icon: <LuSalad size={14} />, text: "Fresh things are worth the wait" },
  ];

  const TIPS_COUNT = LOADING_TIPS.length;

  /** Auto-rotate tips every 3 seconds */
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setTipIdx((prev) => (prev + 1) % TIPS_COUNT);
    }, 3000);
    return () => clearInterval(interval);
  }, [loading, TIPS_COUNT]);

  /** Spawn floating patience quote near cursor on the navbar blocker */
  const handleNavBlockerInteraction = useCallback(
    (e: React.MouseEvent) => {
      const quote =
        PATIENCE_QUOTES[Math.floor(Math.random() * PATIENCE_QUOTES.length)];
      const newId = floatingIdRef.current++;
      setFloatingQuotes((prev) => [
        ...prev.slice(-4), // keep max 5 floating
        { id: newId, text: quote.text, icon: quote.icon, x: e.clientX, y: e.clientY },
      ]);
      // Remove after animation completes
      setTimeout(() => {
        setFloatingQuotes((prev) => prev.filter((q) => q.id !== newId));
      }, 2200);
    },
    []
  );

  /* ═══════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ── Navbar blocker — sits above navbar z-index during loading ── */}
      {loading && (
        <div
          className="hero-scroll-nav-blocker"
          onClick={handleNavBlockerInteraction}
          onMouseEnter={handleNavBlockerInteraction}
        >
          {floatingQuotes.map((q) => (
            <span
              key={q.id}
              className="hero-scroll-float-quote"
              style={{ left: q.x, top: q.y }}
            >
              <span className="hero-scroll-float-quote__icon">{q.icon}</span>
              {q.text}
            </span>
          ))}
        </div>
      )}

      <div
        ref={wrapperRef}
        className="hero-scroll-wrapper"
        id="hero-scroll-wrapper"
        style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
      >
        {/* ── Sticky viewport container ── */}
        <div className="hero-scroll-sticky">
          {/* ── Canvas (frame playback) ── */}
          <div ref={canvasWrapRef} className="hero-scroll-canvas-wrap">
            <canvas ref={canvasRef} className="hero-scroll-canvas" />
          </div>

          {/* ── Vignette overlay ── */}
          <div className="hero-scroll-vignette" />

          {/* ── Phase text overlays ── */}
          {PHASES.map((phase, idx) => (
            <div
              key={phase.id}
              ref={setOverlayRef(phase.id)}
              className="hero-scroll-overlay"
              style={{ opacity: idx === 0 ? 1 : 0 }}
            >
              <h2 className="hero-scroll-overlay__heading">{phase.heading}</h2>
              <p className="hero-scroll-overlay__sub">{phase.sub}</p>
              {/* Scroll hint — only in the first phase */}
              {idx === 0 && (
                <div ref={scrollHintRef} className="hero-scroll-hint">
                  <span>Scroll to explore</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* ── Final Hero State (Act 3) ── */}
          <div
            ref={finalStateRef}
            className="hero-scroll-final"
            style={{ opacity: 0, pointerEvents: "none" }}
          >
            <div className="hero-scroll-final__bg" />
            <div className="hero-scroll-final__content">
              <img
                src={logoOnly}
                alt="Bowls & Bottles Logo"
                className="hero-scroll-final__logo"
              />
              <h1 className="hero-scroll-final__title">Bowls &amp; Bottles</h1>
              <p className="hero-scroll-final__tagline">
                Where every ingredient tells a story.
              </p>
              <div className="hero-scroll-final__cta-row">
                <button className="hero-scroll-final__btn hero-scroll-final__btn--primary">
                  Explore Full Menu
                </button>
              </div>
            </div>
          </div>

          {/* ── Loading overlay ── */}
          <div
            ref={loadingOverlayRef}
            className={`hero-scroll-loading${loading ? "" : " hero-scroll-loading--done"}`}
          >
            <div className="hero-scroll-loading__inner">
              {/* Animated floating circles in background */}
              <div className="hero-scroll-loading__orbs">
                <div className="hero-scroll-loading__orb hero-scroll-loading__orb--1" />
                <div className="hero-scroll-loading__orb hero-scroll-loading__orb--2" />
                <div className="hero-scroll-loading__orb hero-scroll-loading__orb--3" />
              </div>

              {/* Website logo */}
              <img
                src={websiteLogo}
                alt="Bowls & Bottles"
                className="hero-scroll-loading__logo-img"
              />

              {/* Tagline */}
              <p className="hero-scroll-loading__tagline">
                Good things take time — we're preparing something fresh.
              </p>

              {/* Progress bar */}
              <div className="hero-scroll-loading__bar-track">
                <div
                  className="hero-scroll-loading__bar-fill"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>

              {/* Fun tips that auto-rotate */}
              <div className="hero-scroll-loading__tip-area">
                <div className="hero-scroll-loading__tip" key={tipIdx}>
                  <span className="hero-scroll-loading__tip-icon">
                    {LOADING_TIPS[tipIdx].icon}
                  </span>
                  <span className="hero-scroll-loading__tip-text">
                    {LOADING_TIPS[tipIdx].text}
                  </span>
                </div>
              </div>

              {/* Interactive prompt */}
              <button
                className="hero-scroll-loading__interact-btn"
                onClick={() =>
                  setTipIdx((prev) => (prev + 1) % TIPS_COUNT)
                }
              >
                <LuSparkles size={14} />
                Tap for another fun fact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
