# Course Portal — Bolem Siva Lakshmi

An **OpenUI5 / SAPUI5** single-page application for the ANITS Online Course Portal.  
Built with the **SAP Horizon** theme, Fiori design patterns, and the **UI5 Tooling v4** (`@ui5/cli`) build & serve pipeline.

---

## 📋 Overview

| Property | Value |
|---|---|
| **App ID** | `courseportal` |
| **Version** | 1.0.0 |
| **UI Framework** | OpenUI5 1.120.19 |
| **Theme** | `sap_horizon` (SAP Fiori Next) |
| **Tooling** | `@ui5/cli` v4 |
| **Manifest Version** | 1.65.0 |
| **Author** | Bolem Siva Lakshmi |
| **Institution** | ANITS, Visakhapatnam |

---

## 🗂️ Project Structure

```
course-portal/
│
├── webapp/                          ← All application source files
│   ├── index.html                   ← App entry point (UI5 Tooling bootstrap)
│   ├── Component.js                 ← UIComponent — initialises models & router
│   ├── manifest.json                ← App descriptor (routing, models, CSS, i18n)
│   ├── data.js                      ← Course metadata, topics & lesson HTML content
│   │
│   ├── view/
│   │   ├── App.view.xml             ← Shell + NavContainer (router host)
│   │   ├── Home.view.xml            ← Professor profile page
│   │   ├── Courses.view.xml         ← Course tile grid
│   │   ├── CourseDetail.view.xml    ← Unit/lab topics table
│   │   └── Lesson.view.xml          ← Lesson content viewer (Prev/Next nav)
│   │
│   ├── controller/
│   │   ├── App.controller.js
│   │   ├── Home.controller.js
│   │   ├── Courses.controller.js
│   │   ├── CourseDetail.controller.js
│   │   └── Lesson.controller.js
│   │
│   ├── css/
│   │   └── style.css                ← Custom Fiori overlay styles
│   │
│   └── i18n/
│       └── i18n.properties          ← UI text labels (appTitle, appDescription…)
│
├── node_modules/                    ← Installed via `npm install` (git-ignored)
├── .appGenInfo.json                 ← Generator / tooling metadata
├── .gitignore                       ← Ignores node_modules/, dist/, .ui5/
├── eslint.config.mjs                ← ESLint flat config for webapp JS files
├── package.json                     ← npm scripts + devDependencies
├── package-lock.json                ← Exact dependency lockfile
├── README.md                        ← This file
├── ui5.yaml                         ← UI5 Tooling config (serve + build)
└── ui5-local.yaml                   ← Build exclusion overrides
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18

### 1. Install dependencies

```bash
npm install
```

Installs `@ui5/cli` v4, `eslint`, and `globals` into `node_modules/`.  
OpenUI5 framework libraries are also downloaded into the local UI5 cache.

### 2. Start development server

```bash
npm start
```

Opens at **`http://localhost:8080`**.  
UI5 Tooling serves OpenUI5 from the local cache — no CDN required.

### 3. Build for production

```bash
npm run build
```

Output is written to `dist/` — optimised, minified, and ready to deploy to any static host or SAP BTP.

### 4. Lint

```bash
npm run lint
```

Runs ESLint on all files under `webapp/`.

---

## 🧭 Routing

Hash-based navigation via `sap.m.routing.Router`:

| Route Name | URL Hash Pattern | View |
|---|---|---|
| `home` | `#` *(default)* | `Home` |
| `courses` | `#courses` | `Courses` |
| `courseDetail` | `#courses/{courseId}` | `CourseDetail` |
| `lesson` | `#courses/{courseId}/lesson/{lessonId}` | `Lesson` |

**Course IDs:** `fswd` · `rprog`

---

## 📚 Courses

### Full Stack Web Development (`fswd`)
- **Audience:** CSE-AI & ML · III Year – I Sem
- **Units:** 5 · **Labs:** Weekly
- HTML5, CSS3, JavaScript ES6, React.js, Node.js, Express.js, MongoDB (MERN stack)

### R Programming (`rprog`)
- **Audience:** CSE · II Year – II Sem
- **Units:** 5 · **Labs:** Weekly
- R basics, data frames, dplyr, ggplot2, descriptive statistics, linear regression

---

## 🎨 Key SAPUI5 Controls

| Control | Purpose |
|---|---|
| `sap.m.Shell` + `sap.m.App` | Application shell & NavContainer page host |
| `sap.m.Page` + `sap.m.Bar` | Custom header bar on every page |
| `sap.ui.layout.Grid` | Responsive two-column profile layout (`L6 M12 S12`) |
| `sap.m.GenericTile` + `NumericContent` | Course cards on Courses page |
| `sap.m.Table` + `ColumnListItem` | Topics & lab rows in Course Detail |
| `sap.m.Avatar` | Professor initials avatar (BSL) |
| `sap.ui.layout.form.SimpleForm` | Profile detail form rows |
| `sap.m.FormattedText` | Rich HTML lesson content rendering |
| `sap.m.ObjectStatus` | Lab/lecture badges & availability indicators |
| `sap.m.MessageStrip` | Info banners on Courses page |

---

## 🗄️ Data Model

`data.js` defines two global objects loaded **synchronously** before UI5:

| Global | Type | Contents |
|---|---|---|
| `COURSES` | Object map | Course metadata, badge info, topic arrays |
| `LESSONS` | Object map | Lesson objects: `title`, `course`, `html` content |

`Component.js` wraps both into a **`portal`** `JSONModel` available app-wide.  
Each view creates its own local `JSONModel` (`detail` or `lesson`) for page-specific state.

---

## 🛠️ Tooling Config

### `ui5.yaml`
- Declares OpenUI5 framework version and libraries used for local serving & build.

### `ui5-local.yaml`
- Overrides for the build step — excludes `/test/` and `/localService/` from the bundle.

### `eslint.config.mjs`
- Flat ESLint config targeting `webapp/**/*.js`.
- `sourceType: "script"` — required because SAP UI5 uses AMD-style `sap.ui.define`, not ES modules.
- Declares `sap`, `COURSES`, `LESSONS` as known globals to prevent false lint errors.

---

## 👩‍🏫 Contact

**Bolem Siva Lakshmi**  
Assistant Professor — Computer Science & Engineering  
Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam  
📧 bolemsivalakshmi@anits.edu.in

---

*© 2025 Bolem Siva Lakshmi — All Rights Reserved*
