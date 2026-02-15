# Yoga Morphing Background - QA Regression Checklist

## Initial Load Sanity Check
- [ ] Open the app in a fresh browser tab
- [ ] Check browser console for errors (should be no yoga background-related errors)
- [ ] Verify no 404s in Network tab for yoga-pose-*.png or morph-noise-map.png

## Visual Verification - Core Routes
Test that the yoga morphing background is visible on each route:

- [ ] **Home** (`/`) - Background visible behind hero and content
- [ ] **Catalog** (`/catalog`) - Background visible behind product grid
- [ ] **Product Detail** (`/product/:id`) - Background visible behind product details
- [ ] **Cart** (`/cart`) - Background visible behind cart items
- [ ] **Checkout** (`/checkout`) - Background visible (may have additional checkout overlay)
- [ ] **Auth** (`/auth`) - Background visible behind login/signup forms
- [ ] **404 Not Found** (any invalid URL) - Background visible behind 404 message

## Animation Behavior (Normal Motion)
With reduced motion **disabled** (default browser setting):

- [ ] Background images crossfade/morph smoothly every ~8 seconds
- [ ] Animation continues running for at least 30 seconds without freezing
- [ ] No visible flashing or blank frames during transitions
- [ ] Subtle scale/blur animation is present (look closely during transitions)

## Reduced Motion Accessibility
With reduced motion **enabled** (OS/browser accessibility setting):

- [ ] Background shows a single static yoga pose image
- [ ] No crossfade or morphing animation occurs
- [ ] Background remains visible (not hidden)

## Interactivity & Layering
- [ ] All page content (header, buttons, links, forms) is clickable and not blocked by background
- [ ] Background stays behind content (doesn't cover text or UI elements)
- [ ] Scrolling works normally on all pages
- [ ] Grain overlay is visible but subtle (doesn't obscure content)

## Production Build Verification
After running `pnpm build` and deploying:

- [ ] Background assets load correctly (no 404s in production)
- [ ] Animation works in production build (not just local dev)
- [ ] Performance is acceptable (no lag or jank during transitions)

## Notes
- If any check fails, note the specific route, browser, and error message
- Test in at least two browsers (e.g., Chrome and Firefox)
- Test on both desktop and mobile viewport sizes
