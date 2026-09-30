import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const CROSSFADE_SECONDS = 1.1;

/**
 * Cinematic full-bleed hero video background.
 *
 * Cycles through the supplied scenes on a fixed timer (rather than relying on
 * each clip's native length, since source clips vary from ~3s to ~20s) so
 * every scene gets an equal, readable amount of screen time before
 * crossfading to the next one. Loops continuously back to the first scene.
 */
export default function HeroVideoBackground({ scenes, activeIndex, prefersReducedMotion }) {
  const videoRefs = useRef([]);
  const [failedIndexes, setFailedIndexes] = useState(() => new Set());

  useEffect(() => {
    if (prefersReducedMotion) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // Autoplay can be blocked by the browser; fall back to the poster.
            setFailedIndexes((prev) => new Set(prev).add(index));
          });
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex, prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {scenes.map((scene, index) => {
        const isActive = index === activeIndex;
        const showVideo = !prefersReducedMotion && !failedIndexes.has(index);

        return (
          <motion.div
            key={scene.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: CROSSFADE_SECONDS, ease: "easeInOut" }}
          >
            {showVideo ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload={index === 0 ? "auto" : "metadata"}
                poster={scene.poster}
                onError={() => setFailedIndexes((prev) => new Set(prev).add(index))}
              >
                <source src={scene.webm} type="video/webm" />
                <source src={scene.mp4} type="video/mp4" />
              </video>
            ) : (
              <img src={scene.poster} alt="" className="h-full w-full object-cover" />
            )}
          </motion.div>
        );
      })}

      {/* Dark navy overlay for text contrast over any scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,22,40,0.62) 0%, rgba(10,22,40,0.58) 45%, rgba(10,22,40,0.82) 100%)",
        }}
      />
    </div>
  );
}
