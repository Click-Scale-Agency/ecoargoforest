

## Plan: Generate Lab Image and Replace Logo in Slider

### Context
The EcoAgroForest showcase section has a logo image at line 278 (`EAF.logo` — `/eaf-logo.png`, 160x160). The user wants an AI-generated image of people making products in a lab (no faces visible) to replace it. The page context is an agricultural/forestry company producing organic fertilizers from wood byproducts in collaboration with a Latvian chemistry research institute.

### Steps

1. **Generate the image** using the AI Gateway image generation skill — prompt: faceless lab workers producing organic fertilizer products from wood-based raw materials, industrial laboratory setting, close-up on hands/equipment, no faces visible. Save to `public/lab-workers.png`.

2. **Update `src/App.tsx`** — replace the logo `<img>` at line 278 with the new generated image, adjusting sizing to fit the hero area (keep similar dimensions or make it slightly larger since it's now a photo rather than a logo).

### Technical Details
- Use `google/gemini-2.5-flash-image` model via `/tmp/lovable_ai.py`
- Output image to `public/lab-workers.png` so it's served as a static asset
- Reference as `/lab-workers.png` in the `src` attribute

