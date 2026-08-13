// ════════════════════════════════════════════════════════
//  COURSE PORTAL — data.js
//  All course metadata, topics, and lesson content.
//  Wrapped as a sap.ui.define module so the UI5 bundler
//  can include it in the component preload (specVersion 4.0+).
// ════════════════════════════════════════════════════════
sap.ui.define([], function () {
    "use strict";

    var COURSES = {

        // ── FULL STACK WEB DEVELOPMENT ──────────────────────────
        fswd: {
            id: "fswd",
            name: "Full Stack Web Development",
            badgeText: "CSE-AI & ML \u00a0|\u00a0 III Year \u2013 I Sem",
            desc: "Build modern, responsive web applications using HTML, CSS, JavaScript, React, Node.js and MongoDB through practical learning and real-world projects.",
            meta: "Duration: 1 Semester \u00a0|\u00a0 Units: 5 \u00a0|\u00a0 Labs: Weekly",
            headerTitle: "ANITS III-1 CSE-AI & ML<br/>Full Stack Web Development \u2014 Course Page",
            headerMeta: "Faculty: Bolem Siva Lakshmi<br/>Lecture Room # 301 \u00a0\u00a0|\u00a0\u00a0 Lab # 3 (AN)",
            topics: [
                { label: "Unit-1",    lab: false, title: "Introduction and HTML Basics \u2014 Intro with VSCode",                  id: "f-u1d1"   },
                { label: "Unit-1",    lab: false, title: "HTML Basic Tags, Fonts, Hyperlink, List",                                id: "f-u1d2"   },
                { label: "Lab Week1", lab: true,  title: "Experiment 1: Design Static Webpage using HTML Components",             id: "f-lab1e1" },
                { label: "Lab Week1", lab: true,  title: "Table Tags, Image Tag, Break, Align Attribute",                         id: "f-lab1e2" },
                { label: "Unit-1",    lab: false, title: "Frameset, Frame, iFrame, Form",                                         id: "f-u1d3"   },
                { label: "Unit-1",    lab: false, title: "Introducing HTML5: Document Structure Changes, Open Media Effort",      id: "f-u1d4"   },
                { label: "Unit-1",    lab: false, title: "Cascading Style Sheet (CSS)",                                           id: "f-u1d5"   },
                { label: "Lab Week2", lab: true,  title: "Experiment 2: Design Webpage using HTML5 & CSS3",                       id: "f-lab2e1" },
                { label: "Unit-1",    lab: false, title: "Cascading Style Sheet 3 (CSS3)",                                        id: "f-u1d6"   },
                { label: "Unit-2",    lab: false, title: "Introduction to JavaScript",                                            id: "f-u2d1"   },
                { label: "Unit-2",    lab: false, title: "JavaScript \u2014 Variables, Data Types, Operators",                    id: "f-u2d2"   },
                { label: "Unit-2",    lab: false, title: "JavaScript DOM Manipulation",                                           id: "f-u2d3"   },
                { label: "Lab Week3", lab: true,  title: "Experiment 3: JavaScript Form Validation",                              id: "f-lab3e1" },
                { label: "Unit-2",    lab: false, title: "JavaScript ES6 \u2014 Arrow Functions, Promises, Async/Await",          id: "f-u2d4"   },
                { label: "Unit-3",    lab: false, title: "Introduction to React.js",                                              id: "f-u3d1"   },
                { label: "Unit-3",    lab: false, title: "React Components, Props & State",                                       id: "f-u3d2"   },
                { label: "Lab Week4", lab: true,  title: "Experiment 4: Build a React Counter & To-Do App",                      id: "f-lab4e1" },
                { label: "Unit-3",    lab: false, title: "React Hooks \u2014 useState, useEffect",                                id: "f-u3d3"   },
                { label: "Unit-3",    lab: false, title: "React Router \u2014 Navigation & SPA",                                  id: "f-u3d4"   },
                { label: "Unit-4",    lab: false, title: "Node.js Basics \u2014 Modules, File System, Events",                    id: "f-u4d1"   },
                { label: "Unit-4",    lab: false, title: "Express.js \u2014 Routing & Middleware",                                id: "f-u4d2"   },
                { label: "Lab Week5", lab: true,  title: "Experiment 5: Build a REST API with Express.js",                       id: "f-lab5e1" },
                { label: "Unit-4",    lab: false, title: "REST API Design \u2014 HTTP Methods, Status Codes",                     id: "f-u4d3"   },
                { label: "Unit-5",    lab: false, title: "MongoDB \u2014 Collections, Documents & CRUD",                         id: "f-u5d1"   },
                { label: "Unit-5",    lab: false, title: "Mongoose ODM \u2014 Schema & Models",                                   id: "f-u5d2"   },
                { label: "Lab Week6", lab: true,  title: "Experiment 6: Connect MERN Stack End-to-End",                          id: "f-lab6e1" },
                { label: "Unit-5",    lab: false, title: "Connecting MERN Stack \u2014 Full Application Flow",                    id: "f-u5d3"   },
                { label: "Unit-5",    lab: false, title: "Deployment \u2014 Hosting on Vercel / Render",                         id: "f-u5d4"   }
            ]
        },

        // ── R PROGRAMMING ───────────────────────────────────────
        rprog: {
            id: "rprog",
            name: "R Programming",
            badgeText: "CSE \u00a0|\u00a0 II Year \u2013 II Sem",
            desc: "Learn R for data analysis, data visualization, statistics, and research with hands-on examples, practical datasets and ggplot2 graphics.",
            meta: "Duration: 15 Weeks \u00a0|\u00a0 Units: 5 \u00a0|\u00a0 Labs: Weekly",
            headerTitle: "ANITS II-2 CSE<br/>R Programming \u2014 Course Page",
            headerMeta: "Faculty: Bolem Siva Lakshmi<br/>Lecture Room # 204 \u00a0\u00a0|\u00a0\u00a0 Lab # 2 (AN)",
            topics: [
                { label: "Unit-1",    lab: false, title: "Introduction to R and RStudio",                              id: "r-u1d1"  },
                { label: "Unit-1",    lab: false, title: "R Basics \u2014 Variables, Data Types, Operators",           id: "r-u1d2"  },
                { label: "Unit-1",    lab: false, title: "Vectors, Matrices and Arrays",                               id: "r-u1d3"  },
                { label: "Lab Week1", lab: true,  title: "Lab 1: Basic R Operations and Vector Computations",          id: "r-lab1"  },
                { label: "Unit-2",    lab: false, title: "Lists and Data Frames",                                      id: "r-u2d1"  },
                { label: "Unit-2",    lab: false, title: "Factors and String Handling",                                id: "r-u2d2"  },
                { label: "Unit-2",    lab: false, title: "Control Structures \u2014 if/else, for, while, repeat",      id: "r-u2d3"  },
                { label: "Lab Week2", lab: true,  title: "Lab 2: Data Frames and Control Flow Programs",               id: "r-lab2"  },
                { label: "Unit-2",    lab: false, title: "Functions in R \u2014 Defining, Calling, Scope",             id: "r-u2d4"  },
                { label: "Unit-3",    lab: false, title: "Data Import/Export \u2014 CSV, Excel, JSON",                 id: "r-u3d1"  },
                { label: "Unit-3",    lab: false, title: "Data Wrangling with dplyr",                                  id: "r-u3d2"  },
                { label: "Unit-3",    lab: false, title: "String Manipulation with stringr",                           id: "r-u3d3"  },
                { label: "Lab Week3", lab: true,  title: "Lab 3: Data Cleaning and Transformation with dplyr",         id: "r-lab3"  },
                { label: "Unit-4",    lab: false, title: "Data Visualization \u2014 Base R Graphics",                  id: "r-u4d1"  },
                { label: "Unit-4",    lab: false, title: "ggplot2 \u2014 Grammar of Graphics",                         id: "r-u4d2"  },
                { label: "Unit-4",    lab: false, title: "ggplot2 \u2014 Histograms, Box Plots, Scatter Plots",        id: "r-u4d3"  },
                { label: "Lab Week4", lab: true,  title: "Lab 4: Visualization with ggplot2",                         id: "r-lab4"  },
                { label: "Unit-5",    lab: false, title: "Descriptive Statistics in R",                                id: "r-u5d1"  },
                { label: "Unit-5",    lab: false, title: "Probability Distributions in R",                             id: "r-u5d2"  },
                { label: "Unit-5",    lab: false, title: "Hypothesis Testing \u2014 t-test, Chi-square",               id: "r-u5d3"  },
                { label: "Unit-5",    lab: false, title: "Linear Regression in R",                                     id: "r-u5d4"  },
                { label: "Lab Week5", lab: true,  title: "Lab 5: Statistical Analysis and Regression",                id: "r-lab5"  }
            ]
        }
    };

    // ════════════════════════════════════════════════════════
    //  LESSON CONTENT
    // ════════════════════════════════════════════════════════
    var LESSONS = {

        // ── FSWD ──────────────────────────────────────────────

        "f-u1d1": {
            title: "Full Stack Web Development \u2014 Unit 1, Day 1: Introduction & HTML Basics",
            course: "fswd",
            html: "<h3>Introduction to Web Development</h3><p><span class=\"highlight\">Web Application:</span> Applications that provide services over the internet. Examples: gmail.com, facebook.com, youtube.com.</p><p>Every web application contains 2 main components:</p><ol><li><strong>Front-End</strong></li><li><strong>Back-End</strong></li></ol><h4>1) Front-End</h4><p>What the user sees and interacts with. Technologies: <span class=\"highlight\">HTML, CSS, JavaScript, React, Bootstrap</span></p><ul><li><strong>HTML</strong> \u2014 Structure of the page</li><li><strong>CSS</strong> \u2014 Styling and layout</li><li><strong>JavaScript</strong> \u2014 Interactivity and logic</li></ul><h4>2) Back-End</h4><p>Server-side logic, databases, and APIs. Technologies: <span class=\"highlight\">Node.js, Express.js, MongoDB, SQL</span></p><h3>Introduction to VSCode</h3><p>Visual Studio Code is a free, open-source code editor by Microsoft. Supports HTML, CSS, JavaScript and hundreds of extensions.</p><p class=\"note\">&#x1F4A1; Install the <strong>Live Server</strong> extension to preview your HTML in real-time as you edit.</p><h3>Your First HTML Page</h3><ul><li><code>&lt;!DOCTYPE html&gt;</code> \u2014 declaration</li><li><code>&lt;html&gt;</code> \u2014 root element</li><li><code>&lt;head&gt;</code> \u2014 metadata, title, CSS links</li><li><code>&lt;body&gt;</code> \u2014 all visible page content</li></ul>"
        },

        "f-u1d2": {
            title: "Full Stack Web Development \u2014 Unit 1, Day 2: HTML Tags, Fonts, Hyperlinks, Lists",
            course: "fswd",
            html: "<h3>HTML Basic Tags</h3><p>HTML uses <span class=\"highlight\">tags</span> inside angle brackets: <code>&lt;tagname&gt;content&lt;/tagname&gt;</code></p><h4>Heading Tags</h4><p>6 levels: <code>&lt;h1&gt;</code> (largest) through <code>&lt;h6&gt;</code> (smallest).</p><h4>Text Formatting</h4><ul><li><code>&lt;p&gt;</code> \u2014 paragraph &nbsp;|&nbsp; <code>&lt;b&gt;</code>/<code>&lt;strong&gt;</code> \u2014 bold</li><li><code>&lt;i&gt;</code>/<code>&lt;em&gt;</code> \u2014 italic &nbsp;|&nbsp; <code>&lt;u&gt;</code> \u2014 underline</li><li><code>&lt;br&gt;</code> \u2014 line break &nbsp;|&nbsp; <code>&lt;hr&gt;</code> \u2014 horizontal rule</li></ul><h4>Hyperlinks</h4><p><code>&lt;a href=\"URL\"&gt;Link Text&lt;/a&gt;</code></p><p class=\"note\">Use <code>target=\"_blank\"</code> to open links in a new tab.</p><h4>Lists</h4><ul><li><strong>Unordered:</strong> <code>&lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt;</code> \u2014 bullet points</li><li><strong>Ordered:</strong> <code>&lt;ol&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ol&gt;</code> \u2014 numbered</li></ul>"
        },

        "f-lab1e1": {
            title: "Lab Week 1 \u2014 Experiment 1: Static Webpage using HTML Components",
            course: "fswd",
            html: "<h3>Experiment 1: Static Webpage</h3><p><strong>Aim:</strong> Design a static webpage using basic HTML components.</p><h4>Requirements</h4><ul><li>Valid HTML5 document with DOCTYPE and structure</li><li>Heading tags (h1\u2013h3), paragraphs, unordered and ordered lists</li><li>At least 2 hyperlinks (one internal anchor, one external)</li><li>Basic inline or internal CSS for colour and font styling</li></ul><p class=\"note\">&#x1F4DD; Save as <code>experiment1.html</code> and submit via the course portal before the lab deadline.</p>"
        },

        "f-lab1e2": {
            title: "Lab Week 1 \u2014 Table Tags, Image Tag, Break & Align",
            course: "fswd",
            html: "<h3>Tables in HTML</h3><p>Structure: <code>&lt;table&gt;</code> \u2192 <code>&lt;tr&gt;</code> \u2192 <code>&lt;th&gt;</code> / <code>&lt;td&gt;</code></p><ul><li><code>colspan</code> / <code>rowspan</code> \u2014 merge cells</li><li><code>border</code>, <code>cellpadding</code>, <code>cellspacing</code> \u2014 spacing</li></ul><h3>Image Tag</h3><p><code>&lt;img src=\"path\" alt=\"description\" width=\"200\" height=\"150\"&gt;</code></p><h3>Break &amp; Align</h3><ul><li><code>&lt;br&gt;</code> \u2014 line break</li><li>Use CSS <code>text-align: center;</code> for alignment in HTML5</li></ul>"
        },

        "f-u1d5": {
            title: "Full Stack Web Development \u2014 Unit 1: Cascading Style Sheets (CSS)",
            course: "fswd",
            html: "<h3>What is CSS?</h3><p><span class=\"highlight\">CSS</span> controls the visual presentation of HTML \u2014 colours, fonts, spacing, and layout.</p><h4>Three Ways to Apply CSS</h4><ol><li><strong>Inline:</strong> <code>&lt;p style=\"color:red;\"&gt;</code></li><li><strong>Internal:</strong> <code>&lt;style&gt;</code> block inside <code>&lt;head&gt;</code></li><li><strong>External:</strong> <code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code></li></ol><h4>Selectors</h4><ul><li><code>p { }</code> \u2014 element &nbsp;|&nbsp; <code>.class { }</code> \u2014 class &nbsp;|&nbsp; <code>#id { }</code> \u2014 ID</li></ul><h4>Common Properties</h4><ul><li><code>color</code>, <code>background-color</code>, <code>font-size</code>, <code>font-family</code></li><li><code>margin</code>, <code>padding</code>, <code>border</code>, <code>width</code>, <code>height</code></li></ul><p class=\"note\">&#x1F4A1; The \u201cC\u201d in CSS = <strong>Cascading</strong> \u2014 styles cascade based on specificity and can be inherited.</p>"
        },

        "f-u2d1": {
            title: "Full Stack Web Development \u2014 Unit 2: Introduction to JavaScript",
            course: "fswd",
            html: "<h3>What is JavaScript?</h3><p><span class=\"highlight\">JavaScript</span> is a lightweight scripting language that makes web pages interactive. It runs in the browser and on the server (Node.js).</p><h4>Variables</h4><ul><li><code>var</code> \u2014 function-scoped (avoid)</li><li><code>let</code> \u2014 block-scoped, reassignable</li><li><code>const</code> \u2014 block-scoped, immutable reference</li></ul><h4>Data Types</h4><p>String, Number, Boolean, Array, Object, null, undefined</p><h4>Output Methods</h4><ul><li><code>console.log()</code> &nbsp;|&nbsp; <code>alert()</code> &nbsp;|&nbsp; <code>innerHTML</code></li></ul><p class=\"note\">&#x1F4A1; Always prefer <code>const</code>; use <code>let</code> only when the value needs to change.</p>"
        },

        "f-u2d3": {
            title: "Full Stack Web Development \u2014 Unit 2: JavaScript DOM Manipulation",
            course: "fswd",
            html: "<h3>What is the DOM?</h3><p>The <span class=\"highlight\">Document Object Model</span> is a tree of all HTML elements. JavaScript reads and changes any element through it.</p><h4>Selecting Elements</h4><ul><li><code>document.getElementById(\"id\")</code></li><li><code>document.querySelector(\".class\")</code></li><li><code>document.querySelectorAll(\"tag\")</code></li></ul><h4>Changing Content &amp; Style</h4><ul><li><code>element.innerHTML = \"...\"</code> &nbsp;|&nbsp; <code>element.textContent = \"...\"</code></li><li><code>element.style.color = \"red\"</code> &nbsp;|&nbsp; <code>element.classList.add(\"active\")</code></li></ul><h4>Events</h4><p><code>element.addEventListener(\"click\", function() { })</code></p><p>Common: <code>click</code>, <code>mouseover</code>, <code>keyup</code>, <code>submit</code>, <code>load</code></p>"
        },

        "f-u3d1": {
            title: "Full Stack Web Development \u2014 Unit 3: Introduction to React.js",
            course: "fswd",
            html: "<h3>What is React?</h3><p><span class=\"highlight\">React.js</span> is an open-source JavaScript library by Meta for building fast, component-based user interfaces.</p><h4>Key Concepts</h4><ul><li><strong>Component-based</strong> \u2014 reusable UI building blocks</li><li><strong>Virtual DOM</strong> \u2014 efficient, targeted updates</li><li><strong>Unidirectional data flow</strong> \u2014 predictable state</li></ul><h4>JSX</h4><p>Write HTML-like syntax in JavaScript. Use <code>className</code> not <code>class</code>; self-close tags with <code>/&gt;</code>.</p><h4>Setup</h4><ul><li>CRA: <code>npx create-react-app my-app</code></li><li>Vite: <code>npm create vite@latest my-app -- --template react</code></li></ul><p class=\"note\">&#x1F4A1; Start with <code>npm run dev</code> (Vite) \u2014 opens at <code>localhost:5173</code>.</p>"
        },

        "f-u3d2": {
            title: "Full Stack Web Development \u2014 Unit 3: React Components, Props & State",
            course: "fswd",
            html: "<h3>Components</h3><p>Reusable, self-contained pieces of UI. Every React app is a tree of components.</p><h4>Props</h4><p>Pass data from parent \u2192 child. Read-only.</p><ul><li>Pass: <code>&lt;Card title=\"Hello\" /&gt;</code></li><li>Receive: <code>function Card({ title }) { return &lt;h1&gt;{title}&lt;/h1&gt;; }</code></li></ul><h4>State</h4><p>Internal data managed by the component. Changing state triggers a re-render.</p><ul><li><code>const [count, setCount] = useState(0);</code></li><li>Update: <code>setCount(count + 1)</code></li></ul><p class=\"note\">&#x1F4A1; Never modify state directly \u2014 always use the setter function to trigger re-render.</p>"
        },

        "f-u4d2": {
            title: "Full Stack Web Development \u2014 Unit 4: Express.js \u2014 Routing & Middleware",
            course: "fswd",
            html: "<h3>What is Express.js?</h3><p><span class=\"highlight\">Express.js</span> is a minimal web framework for Node.js for routing, middleware and API building.</p><h4>Routing</h4><ul><li><code>app.get('/path', handler)</code></li><li><code>app.post('/path', handler)</code></li><li><code>app.put('/path', handler)</code></li><li><code>app.delete('/path', handler)</code></li></ul><h4>Request &amp; Response</h4><ul><li><code>req.params</code>, <code>req.query</code>, <code>req.body</code></li><li><code>res.json()</code>, <code>res.status(404).send()</code></li></ul><h4>Middleware</h4><ul><li><code>express.json()</code> \u2014 parse JSON bodies</li><li><code>cors()</code> \u2014 enable Cross-Origin requests</li></ul>"
        },

        "f-u5d1": {
            title: "Full Stack Web Development \u2014 Unit 5: MongoDB \u2014 Collections & CRUD",
            course: "fswd",
            html: "<h3>What is MongoDB?</h3><p><span class=\"highlight\">MongoDB</span> is a NoSQL document database storing data as JSON-like documents (BSON).</p><h4>Key Concepts</h4><ul><li><strong>Database</strong> \u2192 <strong>Collection</strong> \u2192 <strong>Document</strong> \u2192 <strong>Field</strong></li><li><code>_id</code> \u2014 auto-generated unique identifier</li></ul><h4>CRUD</h4><ul><li><code>insertOne({name:\"Siva\"})</code></li><li><code>find({branch:\"CSE\"})</code></li><li><code>updateOne({roll:\"21A01\"}, {$set:{cgpa:9.2}})</code></li><li><code>deleteOne({roll:\"21A01\"})</code></li></ul><p class=\"note\">&#x1F4A1; Use <strong>MongoDB Atlas</strong> for a free cloud database and <strong>MongoDB Compass</strong> as a GUI browser.</p>"
        },

        "f-u5d3": {
            title: "Full Stack Web Development \u2014 Unit 5: Connecting MERN Stack",
            course: "fswd",
            html: "<h3>The MERN Stack</h3><p><span class=\"highlight\">MERN</span> = <strong>MongoDB + Express.js + React.js + Node.js</strong> \u2014 full JavaScript stack.</p><h4>Data Flow</h4><ol><li>User action in React UI</li><li>React calls <code>axios.get('/api/students')</code></li><li>Express route handler receives the request</li><li>Mongoose queries MongoDB</li><li>Express sends JSON response</li><li>React updates state \u2192 UI re-renders</li></ol><h4>Key Packages</h4><ul><li><code>axios</code>, <code>mongoose</code>, <code>dotenv</code>, <code>cors</code></li></ul>"
        },

        // ── R PROGRAMMING ─────────────────────────────────────

        "r-u1d1": {
            title: "R Programming \u2014 Unit 1, Day 1: Introduction to R and RStudio",
            course: "rprog",
            html: "<h3>What is R?</h3><p><span class=\"highlight purple\">R</span> is a free, open-source language for <strong>statistical computing</strong> and <strong>data visualization</strong>, widely used in academia, research, and data science.</p><h4>Why Learn R?</h4><ul><li>Powerful built-in statistical functions</li><li>CRAN hosts 20,000+ packages</li><li>Excellent graphics with <strong>ggplot2</strong></li><li>Free and open-source</li></ul><h4>RStudio IDE \u2014 4 Panels</h4><ul><li><strong>Script Editor</strong> \u2014 write and save R scripts</li><li><strong>Console</strong> \u2014 run R commands interactively</li><li><strong>Environment / History</strong> \u2014 view variables</li><li><strong>Files / Plots / Packages / Help</strong></li></ul><p class=\"note purple\">&#x1F4A1; Download R from <strong>cran.r-project.org</strong> and RStudio from <strong>posit.co</strong> (both free).</p><h4>First Commands</h4><ul><li>Assignment: <code>x &lt;- 10</code></li><li>Print: <code>print(x)</code> or just type <code>x</code></li><li>Help: <code>?mean</code> or <code>help(mean)</code></li></ul>"
        },

        "r-u1d2": {
            title: "R Programming \u2014 Unit 1, Day 2: Variables, Data Types & Operators",
            course: "rprog",
            html: "<h3>Variables in R</h3><ul><li><code>name &lt;- \"Bolem Siva\"</code></li><li><code>age &lt;- 21</code> &nbsp;|&nbsp; <code>marks &lt;- 95.5</code></li></ul><h3>Data Types</h3><ul><li><strong>numeric</strong> \u2014 <code>3.14</code> &nbsp;|&nbsp; <strong>integer</strong> \u2014 <code>5L</code></li><li><strong>character</strong> \u2014 <code>\"Hello\"</code> &nbsp;|&nbsp; <strong>logical</strong> \u2014 <code>TRUE</code>, <code>FALSE</code></li><li><strong>complex</strong> \u2014 <code>3+2i</code></li></ul><p>Check type: <code>class(x)</code> &nbsp;|&nbsp; Type test: <code>is.numeric(x)</code></p><h3>Operators</h3><ul><li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>^</code>, <code>%%</code></li><li><strong>Comparison:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li><li><strong>Logical:</strong> <code>&amp;&amp;</code>, <code>||</code>, <code>!</code></li></ul><p class=\"note purple\">&#x1F4A1; In R, <code>TRUE</code> and <code>FALSE</code> are always UPPERCASE.</p>"
        },

        "r-u1d3": {
            title: "R Programming \u2014 Unit 1, Day 3: Vectors, Matrices and Arrays",
            course: "rprog",
            html: "<h3>Vectors</h3><p>The most basic data structure \u2014 a sequence of the <strong>same type</strong>.</p><ul><li>Create: <code>v &lt;- c(10, 20, 30, 40)</code></li><li>Access: <code>v[2]</code> \u2192 <code>20</code> (R starts at index 1)</li><li>Sequence: <code>1:10</code> or <code>seq(1, 10, by=2)</code></li><li>Functions: <code>sum(v)</code>, <code>mean(v)</code>, <code>length(v)</code>, <code>max(v)</code>, <code>min(v)</code></li></ul><h3>Matrices</h3><ul><li>Create: <code>m &lt;- matrix(1:9, nrow=3, ncol=3)</code></li><li>Access: <code>m[2,3]</code> \u2014 row 2, col 3</li><li>Transpose: <code>t(m)</code> &nbsp;|&nbsp; Multiply: <code>m %*% m</code></li></ul><h3>Arrays</h3><p>Multi-dimensional: <code>arr &lt;- array(1:24, dim=c(2,3,4))</code></p><p class=\"note purple\">&#x1F4A1; Unlike Python (0-based), R indexing starts at <strong>1</strong>.</p>"
        },

        "r-lab1": {
            title: "R Programming \u2014 Lab 1: Basic R Operations and Vector Computations",
            course: "rprog",
            html: "<h3>Lab 1: Basic R Operations</h3><p><strong>Aim:</strong> Practice basic R commands, data types, and vector operations in RStudio.</p><h4>Exercises</h4><ol><li>Create variables for name, roll number, age, CGPA. Print using <code>cat()</code>.</li><li>Create a numeric vector of 10 marks. Find sum, mean, median, max, min.</li><li>Create a sequence from 1 to 100 by steps of 5. Count elements greater than 50.</li><li>Two vectors of length 5 \u2014 perform element-wise +, -, *.</li><li>Create a 3\u00d73 matrix, find its transpose and determinant using <code>det()</code>.</li></ol><p class=\"note purple\">&#x1F4DD; Save as <code>RollNo_Lab1.R</code> and submit via the course portal.</p>"
        },

        "r-u2d1": {
            title: "R Programming \u2014 Unit 2: Lists and Data Frames",
            course: "rprog",
            html: "<h3>Lists</h3><p>Can hold elements of <strong>different types</strong> \u2014 numbers, strings, vectors, even other lists.</p><ul><li>Create: <code>student &lt;- list(name=\"Siva\", roll=\"21A01\", marks=c(85,90,78))</code></li><li>Access: <code>student$name</code> or <code>student[[2]]</code></li><li>Add: <code>student$grade &lt;- \"A\"</code></li></ul><h3>Data Frames</h3><p>A table \u2014 like a spreadsheet. Each column is a vector of the same length.</p><ul><li>Create: <code>df &lt;- data.frame(name=c(\"Siva\",\"Ravi\"), marks=c(90,85))</code></li><li>View: <code>head(df)</code>, <code>str(df)</code>, <code>summary(df)</code></li><li>Column: <code>df$marks</code> &nbsp;|&nbsp; Row: <code>df[1,]</code></li><li>Filter: <code>df[df$marks &gt; 85, ]</code></li></ul><p class=\"note purple\">&#x1F4A1; Data frames are the most common structure for data analysis in R.</p>"
        },

        "r-u2d3": {
            title: "R Programming \u2014 Unit 2: Control Structures",
            course: "rprog",
            html: "<h3>if / else</h3><ul><li><code>if (x &gt; 0) { print(\"Positive\") } else { print(\"Non-positive\") }</code></li><li>Vectorized: <code>ifelse(x &gt; 0, \"Positive\", \"Non-positive\")</code></li></ul><h3>for Loop</h3><ul><li><code>for (i in 1:5) { print(i) }</code></li></ul><h3>while / repeat</h3><ul><li><code>while (x &lt; 10) { x &lt;- x + 1 }</code></li><li><code>repeat { if (x &gt;= 10) break; x &lt;- x+1 }</code></li></ul><h3>Loop Control</h3><ul><li><code>break</code> \u2014 exit loop &nbsp;|&nbsp; <code>next</code> \u2014 skip iteration</li></ul><p class=\"note purple\">&#x1F4A1; Prefer <strong>vectorized operations</strong> over loops in R for better performance.</p>"
        },

        "r-u2d4": {
            title: "R Programming \u2014 Unit 2: Functions in R",
            course: "rprog",
            html: "<h3>Defining Functions</h3><ul><li><code>greet &lt;- function(name) { cat(\"Hello,\", name, \"!\\n\") }</code></li><li>Call: <code>greet(\"Siva\")</code></li></ul><h4>Return Values</h4><ul><li><code>add &lt;- function(a, b) { return(a + b) }</code></li></ul><h4>Default Arguments</h4><ul><li><code>power &lt;- function(base, exp=2) { base^exp }</code></li><li><code>power(3)</code> \u2192 9 &nbsp;|&nbsp; <code>power(3, 3)</code> \u2192 27</li></ul><h4>Scope</h4><ul><li>Variables inside a function are <strong>local</strong> by default</li><li>Use <code>&lt;&lt;-</code> to assign to the global environment</li></ul><p class=\"note purple\">&#x1F4A1; Use <code>sapply(1:5, function(x) x^2)</code> to apply a function over a vector efficiently.</p>"
        },

        "r-u3d2": {
            title: "R Programming \u2014 Unit 3: Data Wrangling with dplyr",
            course: "rprog",
            html: "<h3>What is dplyr?</h3><p><span class=\"highlight purple\">dplyr</span> is a core tidyverse package for fast, readable data manipulation.</p><p>Install: <code>install.packages(\"dplyr\")</code> &nbsp;|&nbsp; Load: <code>library(dplyr)</code></p><h4>The Pipe: <code>%&gt;%</code></h4><ul><li><code>df %&gt;% filter(marks &gt; 80) %&gt;% select(name, marks)</code></li></ul><h4>Key Verbs</h4><ul><li><code>filter()</code> \u2014 keep rows matching a condition</li><li><code>select()</code> \u2014 keep specific columns</li><li><code>mutate()</code> \u2014 add or transform columns</li><li><code>arrange()</code> \u2014 sort rows (<code>desc()</code> for descending)</li><li><code>summarise()</code> \u2014 compute summary statistics</li><li><code>group_by()</code> \u2014 group before summarising</li></ul><p class=\"note purple\">&#x1F4A1; Average marks per branch: <code>df %&gt;% group_by(branch) %&gt;% summarise(avg = mean(marks))</code></p>"
        },

        "r-u4d2": {
            title: "R Programming \u2014 Unit 4: ggplot2 \u2014 Grammar of Graphics",
            course: "rprog",
            html: "<h3>What is ggplot2?</h3><p><span class=\"highlight purple\">ggplot2</span> is the most popular R visualization package, based on the <strong>Grammar of Graphics</strong> layered system.</p><p>Install: <code>install.packages(\"ggplot2\")</code></p><h4>Basic Structure</h4><ul><li><code>ggplot(data, aes(x, y))</code> \u2014 data and aesthetic mappings</li><li><code>+ geom_*()</code> \u2014 geometry layer</li><li><code>+ labs()</code> \u2014 title and axis labels</li><li><code>+ theme_*()</code> \u2014 visual theme</li></ul><h4>Common Geoms</h4><ul><li><code>geom_point()</code>, <code>geom_line()</code>, <code>geom_bar()</code></li><li><code>geom_histogram()</code>, <code>geom_boxplot()</code>, <code>geom_col()</code></li></ul><p class=\"note purple\">&#x1F4A1; Save plots with <code>ggsave(\"plot.png\", width=8, height=5)</code>.</p>"
        },

        "r-u4d3": {
            title: "R Programming \u2014 Unit 4: ggplot2 Plots \u2014 Histogram, Box Plot, Scatter Plot",
            course: "rprog",
            html: "<h3>Histogram</h3><ul><li><code>ggplot(df, aes(x=marks)) + geom_histogram(bins=10, fill=\"steelblue\", color=\"white\")</code></li></ul><h3>Box Plot</h3><ul><li><code>ggplot(df, aes(x=branch, y=marks)) + geom_boxplot(fill=\"lightgreen\")</code></li></ul><h3>Scatter Plot</h3><ul><li><code>ggplot(df, aes(x=study_hours, y=marks)) + geom_point(color=\"coral\", size=3)</code></li><li>Trend line: <code>+ geom_smooth(method=\"lm\", se=TRUE)</code></li></ul><h3>Labels &amp; Themes</h3><ul><li><code>+ labs(title=\"Marks Distribution\", x=\"Marks\", y=\"Count\")</code></li><li><code>+ theme_minimal()</code> or <code>theme_bw()</code></li></ul><p class=\"note purple\">&#x1F4A1; Always label axes and add a title \u2014 best practice in data visualization.</p>"
        },

        "r-u5d1": {
            title: "R Programming \u2014 Unit 5: Descriptive Statistics in R",
            course: "rprog",
            html: "<h3>Descriptive Statistics</h3><p>Summarize and describe the main features of a dataset.</p><h4>Central Tendency</h4><ul><li><code>mean(x)</code> &nbsp;|&nbsp; <code>median(x)</code> &nbsp;|&nbsp; Mode: <code>which.max(table(x))</code></li></ul><h4>Spread</h4><ul><li><code>range(x)</code> &nbsp;|&nbsp; <code>var(x)</code> &nbsp;|&nbsp; <code>sd(x)</code> &nbsp;|&nbsp; <code>IQR(x)</code></li><li>Quantiles: <code>quantile(x, probs=c(0.25, 0.5, 0.75))</code></li></ul><h4>Quick Summary</h4><p><code>summary(df)</code> \u2014 min, max, mean, quartiles for all numeric columns at once.</p><p class=\"note purple\">&#x1F4A1; Always start with <code>str(df)</code> and <code>summary(df)</code> before any analysis.</p>"
        },

        "r-u5d4": {
            title: "R Programming \u2014 Unit 5: Linear Regression in R",
            course: "rprog",
            html: "<h3>What is Linear Regression?</h3><p><span class=\"highlight purple\">Linear Regression</span> models the relationship between y (dependent) and x (independent).</p><p>Equation: <strong>y = \u03b2\u2080 + \u03b2\u2081x + \u03b5</strong></p><h4>Fitting the Model</h4><ul><li><code>model &lt;- lm(marks ~ study_hours, data=df)</code></li><li><code>summary(model)</code> \u2014 view results</li><li><code>predict(model, newdata=data.frame(study_hours=c(5,8)))</code></li></ul><h4>Reading the Output</h4><ul><li><strong>Estimate</strong> \u2014 slope and intercept</li><li><strong>p-value</strong> \u2014 significance (&lt; 0.05 = significant)</li><li><strong>R-squared</strong> \u2014 variance explained (0\u20131)</li></ul><h4>Plot</h4><ul><li><code>ggplot(df, aes(x=study_hours, y=marks)) + geom_point() + geom_smooth(method=\"lm\")</code></li></ul><p class=\"note purple\">&#x1F4A1; Check residual plots with <code>plot(model)</code> to validate model assumptions.</p>"
        },

        "r-lab5": {
            title: "R Programming \u2014 Lab 5: Statistical Analysis and Regression",
            course: "rprog",
            html: "<h3>Lab 5: Statistics &amp; Linear Regression</h3><p><strong>Aim:</strong> Descriptive statistics, hypothesis testing, and linear regression on a student dataset.</p><h4>Dataset</h4><p>Create a data frame with 20 students: Name, StudyHours, Marks, Branch (CSE/ECE/EEE).</p><h4>Exercises</h4><ol><li>Compute mean, median, SD and IQR of Marks.</li><li>Draw a histogram of Marks with ggplot2.</li><li>Draw a box plot of Marks grouped by Branch.</li><li>t-test: <code>t.test(marks, mu=70)</code></li><li>Fit: <code>lm(marks ~ study_hours)</code> \u2014 interpret R-squared and p-value.</li><li>Scatter plot with regression line using ggplot2.</li></ol><p class=\"note purple\">&#x1F4DD; Submit as <code>RollNo_Lab5.R</code> with comments explaining each step.</p>"
        }
    };

    return {
        COURSES: COURSES,
        LESSONS: LESSONS
    };
});
