# Emmanuel Gabriel Ataekong — Product Design Portfolio

A responsive React + Vite portfolio starter with a warm, bright, mature visual direction.

## Design choices
- **Typography:** Manrope for expressive headings and DM Sans for readable interface/body text.
- **Palette:** soft warm-white canvas, deep botanical green, fresh sage, and restrained lavender/peach/blue project accents.
- **Layout:** responsive project grid, filter controls, project detail modal, about, approach and contact sections.

## Run locally
1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

To create a production build:
```bash
npm run build
```

## Personalise before publishing
1. Replace the portrait placeholder in `src/main.jsx` with your photo. Put the image in `public/` (for example `public/emmanuel-portrait.jpg`) and replace the `.portrait-placeholder` block with an `<img src="/emmanuel-portrait.jpg" alt="Emmanuel Gabriel Ataekong" />`.
2. Replace the placeholder email `hello@emmanuelataekong.com` with your real contact email.
3. Add your actual LinkedIn and Dribbble URLs in the footer.
4. Review every project description and update the role, process and deliverables to reflect work you can confidently discuss.
5. The ten projects are labelled as independent concept case studies. Keep that disclosure unless a project is based on verified client work. Do not add invented research participants, metrics or client endorsements.

## Project content
The project data and case-study modal are in `src/main.jsx`. Each project can be edited in the `projects` array. Project visuals are CSS-built interface previews, so the site runs without external image assets.
