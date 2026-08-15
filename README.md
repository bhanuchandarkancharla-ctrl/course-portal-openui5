# Course Portal — Bolem Siva Lakshmi

An **OpenUI5 / SAPUI5** single-page application for the ANITS Online Course Portal.
Runs as a **standalone custom application** (no Fiori Launchpad), built with the **SAP Horizon** theme and the **UI5 Tooling v4** (`@ui5/cli`) build & serve pipeline.

🌐 **Live Demo:** [https://bhanuchandarkancharla-ctrl.github.io/course-portal-openui5/](https://bhanuchandarkancharla-ctrl.github.io/course-portal-openui5/)

---

## Overview

| Property | Value |
|---|---|
| **App ID** | `courseportal` |
| **Version** | 1.0.0 |
| **UI Framework** | OpenUI5 1.120.19 |
| **Theme** | `sap_horizon` |
| **Tooling** | `@ui5/cli` v4, `@sap/ux-ui5-tooling` |
| **Manifest Version** | 1.65.0 |
| **Deployment mode** | Standalone (index.html) |
| **Author** | Bolem Siva Lakshmi |
| **Institution** | ANITS, Visakhapatnam |
| **Repo** | [github.com/bhanuchandarkancharla-ctrl/course-portal-openui5](https://github.com/bhanuchandarkancharla-ctrl/course-portal-openui5) |

---

## Project Structure

```
course-portal-open_sapui5/
│
├── webapp/                          ← Application source
│   ├── index.html                   ← Standalone entry point
│   ├── Component.js                 ← UIComponent — inits router & data globals
│   ├── manifest.json                ← App descriptor (routing, models, CSS, i18n)
│   ├── data.js                      ← Course metadata, topics & lesson HTML
│   │
│   ├── view/
│   │   ├── App.view.xml             ← Shell + NavContainer (router host)
│   │   ├── Home.view.xml            ← Instructor profile page
│   │   ├── Courses.view.xml         ← Course tile grid
│   │   ├── CourseDetail.view.xml    ← Unit / lab topics table
│   │   └── Lesson.view.xml          ← Lesson content viewer (prev / next)
│   │
│   ├── controller/
│   │   ├── Home.controller.js
│   │   ├── Courses.controller.js
│   │   ├── CourseDetail.controller.js
│   │   └── Lesson.controller.js
│   │
│   ├── css/
│   │   └── style.css                ← Custom overlay styles
│   │
│   └── i18n/
│       └── i18n.properties          ← Manifest {{appTitle}} / {{appDescription}}
│
├── dist/                            ← Production build output (git-ignored)
├── .vscode/launch.json              ← VS Code debug configs (standalone URLs)
├── .appGenInfo.json                 ← Fiori generator metadata
├── .gitignore
├── eslint.config.mjs                ← ESLint flat config for webapp JS
├── package.json                     ← npm scripts + devDependencies
├── package-lock.json
├── README.md                        ← This file
├── ui5.yaml                         ← UI5 Tooling config (serve + build)
└── ui5-local.yaml                   ← Local-serve variant (frameworks pinned)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm start
```

Opens `index.html` at **`http://localhost:8080`** (Fiori tools may pick the next free port if 8080 is busy).
OpenUI5 is proxied from `https://ui5.sap.com` via the same-origin `/resources` path (`fiori-tools-proxy`), which avoids Chrome's cross-origin script blocking (ORB).

### 3. Build for production

```bash
npm run build
```

Runs `ui5 build -a --clean-dest --include-task=generateCachebusterInfo`. Output goes to `dist/`, bundling framework resources locally so the built app is self-contained.

### 4. Lint

```bash
npm run lint
```

Runs ESLint on `webapp/`.

---

## Deployment

### GitHub Pages

```bash
npm run build       # produce dist/
npm run deploy-gh   # publish dist/ to the gh-pages branch
```

Served at **[https://bhanuchandarkancharla-ctrl.github.io/course-portal-openui5/](https://bhanuchandarkancharla-ctrl.github.io/course-portal-openui5/)**.

Because the build bundles UI5 (`ui5 build -a`) and `index.html` uses the relative path `resources/sap-ui-core.js`, the deployed app has no external CDN dependency.

### npm scripts

| Script | Command | Description |
|---|---|---|
| `start` | `fiori run --open index.html` | Standalone dev server |
| `start-local` | `fiori run --config ui5-local.yaml --open index.html` | Dev server using `ui5-local.yaml` |
| `build` | `ui5 build -a --clean-dest --include-task=generateCachebusterInfo` | Production build → `dist/` |
| `lint` | `eslint webapp` | Lint the webapp source |
| `deploy` | `fiori verify` | Verify deployment configuration |
| `deploy-config` | `fiori add deploy-config` | Add / update deploy config |
| `deploy-gh` | `gh-pages -d dist` | Publish `dist/` to GitHub Pages |

---

## Routing

Hash-based navigation via `sap.m.routing.Router` — see [webapp/manifest.json](webapp/manifest.json).

| Route | Pattern | View |
|---|---|---|
| `home` | `#` | `Home` |
| `courses` | `#courses` | `Courses` |
| `courseDetail` | `#courses/{courseId}` | `CourseDetail` |
| `lesson` | `#courses/{courseId}/lesson/{lessonId}` | `Lesson` |

**Course IDs:** `fswd` · `rprog`

---

## Courses

### Full Stack Web Development (`fswd`)
- **Audience:** CSE-AI & ML · III Year – I Sem
- **Units:** 5 · **Labs:** Weekly
- HTML5, CSS3, JavaScript ES6, React.js, Node.js, Express.js, MongoDB (MERN stack)

### R Programming (`rprog`)
- **Audience:** CSE · II Year – II Sem
- **Units:** 5 · **Labs:** Weekly
- R basics, data frames, dplyr, ggplot2, descriptive statistics, linear regression

---

## Key SAPUI5 Controls

| Control | Purpose |
|---|---|
| `sap.m.Shell` + `sap.m.App` | Root shell & NavContainer page host |
| `sap.m.Page` + `sap.m.Bar` | Custom header bar on every page |
| `sap.ui.layout.Grid` | Responsive two-column profile layout (`L6 M12 S12`) |
| `sap.m.GenericTile` + `sap.m.NumericContent` | Course cards on Courses page |
| `sap.m.Table` + `sap.m.ColumnListItem` | Topics & lab rows in Course Detail |
| `sap.m.Avatar` | Instructor initials avatar (BSL) |
| `sap.ui.layout.form.SimpleForm` | Profile detail form rows |
| `sap.m.FormattedText` | Rich HTML lesson content rendering |
| `sap.m.ObjectStatus` | Lab/lecture badges & availability indicators |
| `sap.m.MessageStrip` | Info banners on Courses page |

---

## Data Model

`webapp/data.js` exports two objects, `COURSES` and `LESSONS`, via `sap.ui.define`.
`Component.js` requires the module and exposes them on the `window` as `_cpCourses` and `_cpLessons` so every controller can read the same source without a shared model:

```js
sap.ui.define(["sap/ui/core/UIComponent", "courseportal/data"], function (UIComponent, oData) {
    return UIComponent.extend("courseportal.Component", {
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            window._cpCourses = oData.COURSES;
            window._cpLessons = oData.LESSONS;
            this.getRouter().initialize();
        }
    });
});
```

Views that need page-scoped state (`CourseDetail`, `Lesson`) create their own local `JSONModel` under a named alias (`detail`, `lesson`).

---

## Tooling Config

### `ui5.yaml`
Dev server config. Uses `fiori-tools-proxy` to forward `/resources` and `/test-resources` to `https://ui5.sap.com`, and `fiori-tools-appreload` for livereload on file changes.

### `ui5-local.yaml`
Variant that also declares the SAPUI5 framework and library versions locally (`sap.m`, `sap.ui.core`, `sap.ui.layout`, `sap.f`, `sap.ui.unified`, `themelib_sap_horizon`). Used by `npm run start-local`.

### `eslint.config.mjs`
Flat ESLint config targeting `webapp/**/*.js`.
`sourceType: "script"` because UI5 uses AMD-style `sap.ui.define`, not ES modules.
Declares `sap`, `COURSES`, `LESSONS` as known globals to suppress false lint errors.

---

## Contact

**Bolem Siva Lakshmi**
Assistant Professor — Computer Science & Engineering
Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam
📧 bolemsivalakshmi@anits.edu.in

---

*© 2025 Bolem Siva Lakshmi — All Rights Reserved*
