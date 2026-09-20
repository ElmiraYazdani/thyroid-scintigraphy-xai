# Thyroid Scintigraphy XAI — Project Page

Static GitHub Pages site for the paper *"An Explainable Deep Learning Medical
Mixture-of-Experts Framework with GAN-Based Data Augmentation for Four-Class
Classification of Thyroid Disease Using [<sup>99m</sup>Tc]Tc-Pertechnetate
Scintigraphy: A Multicenter Study."*

**Live site:** https://elmirayazdani.github.io/thyroid-scintigraphy-xai/

Authors, affiliations, corresponding-author contacts, and the ethics approval
ID are listed on the page in the same order as the manuscript.

## What's here

Published (tracked, served by GitHub Pages):

- `index.html` — single-page site (abstract, method, results, conclusion, data/code availability, BibTeX)
- `static/css/`, `static/js/` — stylesheet and page scripts
- `static/images/figures/fig01.jpg` … `fig12.jpg` — downsized copies of the 12 manuscript figures
- `static/images/og-preview.jpg` — social-card image (Figure 1)

Local only (`source_materials/` is git-ignored and never published — the
manuscript is not public yet, and the full-resolution figures are far too large
for a Pages repo):

- `source_materials/manuscript/` — the manuscript PDF (`Main_Manuscript_09202026.pdf`)
- `source_materials/figures/` — full-resolution submission figures `Figure 1.jpg` … `Figure 12.jpg` (~78 MB)

## Regenerating the web figures

Web copies in `static/images/figures/` are produced from the submission figures
at 1600 px width:

```bash
for i in $(seq 1 12); do
  sips --resampleWidth 1600 -s format jpeg -s formatOptions 68 \
    "source_materials/figures/Figure $i.jpg" \
    --out "$(printf 'static/images/figures/fig%02d.jpg' $i)"
done
```

And the social card, Figure 1 at 1200 px width (update the `og:image:height`
meta tag in `index.html` if its aspect ratio changes):

```bash
sips --resampleWidth 1200 -s format jpeg -s formatOptions 72 \
  "source_materials/figures/Figure 1.jpg" --out static/images/og-preview.jpg
```

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Template credit

Page layout adapted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
and [paper-template](https://github.com/seemandhar/paper-template), both CC BY-SA 4.0.
