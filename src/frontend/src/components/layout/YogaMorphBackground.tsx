import { useEffect, useState, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const YOGA_POSES = [
  '/assets/generated/yoga-pose-01.dim_2400x1600.png',
  '/assets/generated/yoga-pose-02.dim_2400x1600.png',
  '/assets/generated/yoga-pose-03.dim_2400x1600.png',
  '/assets/generated/yoga-pose-04.dim_2400x1600.png',
  '/assets/generated/yoga-pose-05.dim_2400x1600.png',
  '/assets/generated/yoga-pose-06.dim_2400x1600.png',
];

const TRANSITION_DURATION = 3000; // 3 seconds for crossfade
const DISPLAY_DURATION = 8000; // 8 seconds per image

export default function YogaMorphBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Preload all yoga pose images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = YOGA_POSES.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => {
            if (import.meta.env.DEV) {
              console.warn(`[YogaMorphBackground] Failed to load image: ${src}`);
            }
            resolve(); // Don't block on individual failures
          };
          img.src = src;
        });
      });

      // Also preload noise map
      const noisePromise = new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
          if (import.meta.env.DEV) {
            console.warn('[YogaMorphBackground] Failed to load noise map');
          }
          resolve();
        };
        img.src = '/assets/generated/morph-noise-map.dim_1024x1024.png';
      });

      await Promise.all([...promises, noisePromise]);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  // Animation cycle
  useEffect(() => {
    if (prefersReducedMotion || !imagesLoaded) {
      // In reduced motion mode or while loading, show only the first image statically
      return;
    }

    // Start the animation cycle
    intervalRef.current = window.setInterval(() => {
      setIsTransitioning(true);
      
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % YOGA_POSES.length);
        setNextIndex((prev) => (prev + 1) % YOGA_POSES.length);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, DISPLAY_DURATION);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [prefersReducedMotion, imagesLoaded]);

  // Don't render until images are loaded to prevent flashing
  if (!imagesLoaded) {
    return null;
  }

  return (
    <div className="yoga-morph-background">
      {/* Current image layer */}
      <div
        className="yoga-morph-layer"
        style={{
          backgroundImage: `url(${YOGA_POSES[currentIndex]})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      />
      
      {/* Next image layer (for crossfade) */}
      {!prefersReducedMotion && (
        <div
          className="yoga-morph-layer"
          style={{
            backgroundImage: `url(${YOGA_POSES[nextIndex]})`,
            opacity: isTransitioning ? 1 : 0,
          }}
        />
      )}
      
      {/* Noise texture overlay for morph-like effect */}
      <div className="yoga-morph-noise" />
      
      {/* Readability scrim */}
      <div className="yoga-morph-scrim" />
    </div>
  );
}
