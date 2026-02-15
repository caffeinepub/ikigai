# Specification

## Summary
**Goal:** Restore the full-viewport yoga pose background imagery and morphing/crossfade animation across all routes after the recent deployment regression.

**Planned changes:**
- Ensure the YogaMorphBackground is mounted site-wide via the shared layout and not conditionally removed on any route (Home, Catalog, Product Detail, Cart, Checkout, Auth, 404).
- Fix background layering so the yoga imagery renders behind content but is not hidden/obscured by base site background, grain/scrim overlays, or checkout-specific background layers.
- Verify and correct static asset URL references for yoga pose images and the morph noise map so they load from `frontend/public/assets/generated` with no 404s (including after production build/preview deploy).
- Preserve accessibility behavior: disable morph animation when `prefers-reduced-motion` is enabled while still showing a static yoga background image on all routes.
- Run a quick regression QA pass focused on confirming no console errors and consistent background + animation behavior across core navigation flows.

**User-visible outcome:** Every page shows a readable, interactive UI with a full-viewport yoga background; the background smoothly morphs/crossfades over time (unless reduced motion is enabled, in which case a static yoga image is shown) and remains present across navigation and in production builds.
