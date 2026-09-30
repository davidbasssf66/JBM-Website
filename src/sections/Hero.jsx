import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HeroVideoBackground from "../components/HeroVideoBackground.jsx";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion.js";

const SCENE_DURATION_MS = 7000;

const SCENES = [
  {
    id: "workers",
    mp4: "/videos/hero/scene-1-workers.mp4",
    webm: "/videos/hero/scene-1-workers.webm",
    poster: "/images/hero-1-workers-poster.jpg",
    headline: "Every contribution represents someone's future.",
    subhead: "Built for the workers, families, and funds that depend on getting it right.",
  },
  {
    id: "technology",
    mp4: "/videos/hero/scene-2-technology.mp4",
    webm: "/videos/hero/scene-2-technology.webm",
    poster: "/images/hero-2-technology-poster.jpg",
    headline: "Every contribution. Matched. Tracked. Accountable.",
    subhead: "Automated reconciliation with a complete audit trail from intake to resolution.",
  },
  {
    id: "outcome",
    mp4: "/videos/hero/scene-3-outcome.mp4",
    webm: "/videos/hero/scene-3-outcome.webm",
    poster: "/images/hero-3-outcome-poster.jpg",
    headline: "Run the fund. Not the spreadsheets.",
    subhead: "One system for contributions, eligibility, reporting, and participant service.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // With reduced motion, hold on the first scene rather than auto-advancing.
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SCENES.length);
    }, SCENE_DURATION_MS);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const activeScene = SCENES[activeIndex];

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] min-h-[calc(100dvh-72px)] items-center overflow-hidden text-white">
      <HeroVideoBackground
        scenes={SCENES}
        activeIndex={activeIndex}
        prefersReducedMotion={prefersReducedMotion}
      />

      <div className="wrap relative z-10 py-24">
        <div className="max-w-[46ch]">
          <div
            className="font-mono text-[13.5px] tracking-[0.06em] text-white/75"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            TAFT-HARTLEY FUND ADMINISTRATION
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeScene.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1
                className="mt-4 text-[34px] leading-[1.15] font-bold sm:text-[44px]"
                style={{ fontFamily: "'Libre Franklin', sans-serif", letterSpacing: "-0.01em" }}
              >
                {activeScene.headline}
              </h1>
              <p className="mt-5 max-w-[40ch] text-[17px] text-white/85 sm:text-[18px]">
                {activeScene.subhead}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#demo" className="btn btn-primary">Request a Demo</a>
            <a
              href="#platform"
              className="btn btn-ghost-light"
            >
              Explore the Platform
            </a>
          </div>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero scene selector">
            {SCENES.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show scene: ${scene.headline}`}
                onClick={() => setActiveIndex(index)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: index === activeIndex ? 28 : 14,
                  background: index === activeIndex ? "var(--white)" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
