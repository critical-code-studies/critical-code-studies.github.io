# Critical Code Studies

The umbrella site for the Critical Code Studies group's readings — a hub that
introduces CCS as a method and links to the individual close readings of
landmark programs.

**Live:** <https://critical-code-studies.github.io/>

Critical Code Studies (CCS) applies the interpretive practices of the humanities
to the extra-functional meaning of computer source code. This site gathers a
series of sustained close readings of historic programs, together with the
method that holds them together.

## The readings

| Reading | Year | Status |
|---------|------|--------|
| [SHRDLU](https://critical-code-studies.github.io/SHRDLU/) | 1968–70 | Live |
| Spacewar! | 1962 | In preparation |
| [ELIZA](https://electronicbookreview.com/essay/reading-eliza-critical-code-studies-in-action/) | 1966 | Essay & book |

## The site

A static, dependency-free site. Plain HTML and CSS, one small vanilla-JS nav
script, no build step.

| Page | File |
|------|------|
| Home | `index.html` |
| Readings | `readings.html` |
| Method | `about.html` |
| People | `people.html` |
| Bibliography | `bibliography.html` |

Shared styling lives in `assets/css/site.css`; the navigation behaviour in
`assets/nav.js`. The design shares the "workbench charcoal" family language of
the reading sites, taking amber as its own accent — the colour of the critic's
pen laid over the machine's green voice.

## Deployment

Served by GitHub Pages from the `main` branch (root). `.nojekyll` is present so
the `assets/` directory is published verbatim.

By David M. Berry (University of Sussex) and Mark C. Marino (University of
Southern California).
