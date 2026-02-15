import { useEffect } from 'react';

const YOGA_POSES = [
  '/assets/generated/yoga-pose-01.dim_2400x1600.png',
  '/assets/generated/yoga-pose-02.dim_2400x1600.png',
  '/assets/generated/yoga-pose-03.dim_2400x1600.png',
  '/assets/generated/yoga-pose-04.dim_2400x1600.png',
  '/assets/generated/yoga-pose-05.dim_2400x1600.png',
  '/assets/generated/yoga-pose-06.dim_2400x1600.png',
];

const NOISE_MAP = '/assets/generated/morph-noise-map.dim_1024x1024.png';

/**
 * Development-only diagnostic hook that preloads yoga background assets
 * and logs warnings if any are missing or unreachable.
 */
export function useYogaBackgroundDiagnostics() {
  useEffect(() => {
    // Only run in development
    if (!import.meta.env.DEV) {
      return;
    }

    const checkAssets = async () => {
      const allAssets = [...YOGA_POSES, NOISE_MAP];
      const results = await Promise.allSettled(
        allAssets.map((src) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => reject(src);
            img.src = src;
          });
        })
      );

      const failed = results
        .filter((result) => result.status === 'rejected')
        .map((result) => (result as PromiseRejectedResult).reason);

      if (failed.length > 0) {
        console.warn(
          '[YogaBackgroundDiagnostics] ⚠️ Failed to load the following background assets:',
          failed
        );
        console.warn(
          '[YogaBackgroundDiagnostics] This may cause the yoga morphing background to not display correctly.'
        );
      } else {
        console.log(
          '[YogaBackgroundDiagnostics] ✅ All yoga background assets loaded successfully'
        );
      }
    };

    checkAssets();
  }, []);
}
