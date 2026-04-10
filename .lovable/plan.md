

## Plan: Add Lab Image to Slider and Restore Logo

### What changes

1. **Restore the logo** at line 278 — change the `<img>` back to the original EAF logo (`EAF.logo` / `/eaf-logo.png`) with its original 160x160 size and styling.

2. **Add the lab-workers image to the slider** — add `/lab-workers.png` to the `EAF.slides` array (around line 36) so it appears as one of the rotating hero banner slides.

### Technical Details
- `EAF.slides` array (line 36): append `"/lab-workers.png"` 
- Line 278: revert `<img>` src back to `EAF.logo` with original classes/size

