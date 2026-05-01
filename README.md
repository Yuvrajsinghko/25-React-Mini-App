<div align="center">

<!-- Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=25%20React%20Mini%20Apps&fontSize=50&fontColor=fff&animation=twinkling&fontAlignY=35&desc=React%20Interview%20Questions%20as%20Interactive%20Components&descAlignY=60&descSize=18" width="100%"/>

<br/>

<!-- Badges -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br/>

[![GitHub stars](https://img.shields.io/github/stars/Yuvrajsinghko/25-React-Mini-App?style=social)](https://github.com/Yuvrajsinghko/25-React-Mini-App/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Yuvrajsinghko/25-React-Mini-App?style=social)](https://github.com/Yuvrajsinghko/25-React-Mini-App/network/members)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/Yuvrajsinghko/25-React-Mini-App?style=social&label=Commits)](https://github.com/Yuvrajsinghko/25-React-Mini-App/commits/main)

<br/>

> 🚀 **25 bite-sized React components** — each one a classic interview question, built and shipped.  
> Master hooks, state, props, and modern React patterns — one mini-app at a time.

</div>

---

## 📌 What Is This?

This repository is a curated collection of **25 React mini-apps**, each designed around a common React interview question or concept. Instead of just reading theory, every concept is implemented as a **working, interactive component** — making it perfect for:

- 🎯 **Interview preparation** — see exactly how interviewers expect these to be built
- 🧠 **Concept reinforcement** — understand `useState`, `useEffect`, `useRef`, and more in context
- 🛠️ **Portfolio building** — each mini-app is a standalone, demonstrable project
- 🔰 **Beginners** learning React by doing

---

## 🗂️ Project Index

| # | App Name | Core Concepts Covered | Difficulty |
|---|----------|----------------------|------------|
| 01 | 🎨 Hex & RGB Color Generator | `useState`, event handling, string manipulation | 🟢 Beginner |
| 02 | 📂 Accordion | `useState`, conditional rendering, list rendering | 🟢 Beginner |
| 03 | ➕ Counter App | `useState`, increment/decrement logic | 🟢 Beginner |
| 04 | ✅ Todo List | `useState`, CRUD operations, controlled inputs | 🟢 Beginner |
| 05 | 🌓 Dark / Light Mode Toggle | `useState`, CSS variables, theme switching | 🟢 Beginner |
| 06 | ⏱️ Stopwatch / Timer | `useState`, `useEffect`, `setInterval`, cleanup | 🟡 Intermediate |
| 07 | 🔍 Search & Filter | `useState`, derived state, array filtering | 🟡 Intermediate |
| 08 | ⭐ Star Rating | `useState`, `onMouseEnter`, `onMouseLeave` | 🟡 Intermediate |
| 09 | 🔐 Password Generator | `useState`, `useRef`, clipboard API, randomization | 🟡 Intermediate |
| 10 | 📄 Pagination | `useState`, slicing arrays, page calculation | 🟡 Intermediate |
| 11 | 🪟 Modal / Popup | `useState`, portal concept, backdrop click | 🟡 Intermediate |
| 12 | 📑 Tabs Component | `useState`, active tab tracking, dynamic rendering | 🟡 Intermediate |
| 13 | 🛒 Shopping Cart | `useState`, item management, quantity updates | 🟡 Intermediate |
| 14 | 🖼️ Image Slider / Carousel | `useState`, `useEffect`, auto-play, prev/next logic | 🟡 Intermediate |
| 15 | 🌀 Custom `useFetch` Hook | Custom hooks, `useEffect`, async/await, loading state | 🟠 Advanced |
| 16 | 📋 Form Validation | `useState`, validation logic, error messages | 🟡 Intermediate |
| 17 | 🎴 Memory / Flip Card Game | `useState`, game logic, card matching | 🟠 Advanced |
| 18 | ♾️ Infinite Scroll | `useEffect`, `useRef`, Intersection Observer API | 🟠 Advanced |
| 19 | 🎲 Random Quote Generator | `useState`, `useEffect`, API fetch | 🟡 Intermediate |
| 20 | 🌤️ Weather App | `useEffect`, REST API, `useState`, async fetch | 🟠 Advanced |
| 21 | 🗒️ Notes App (localStorage) | `useState`, `useEffect`, `localStorage`, persistence | 🟡 Intermediate |
| 22 | 📊 Progress Bar | `useState`, controlled width, visual feedback | 🟢 Beginner |
| 23 | 🔠 Character / Word Counter | `useState`, string methods, real-time update | 🟢 Beginner |
| 24 | 🎨 Background Color Changer | `useState`, dynamic inline styles | 🟢 Beginner |
| 25 | 🕹️ Tic-Tac-Toe | `useState`, game logic, win detection, board reset | 🟠 Advanced |

---

## ⚙️ Tech Stack

```
React 18        — UI library (hooks-based, functional components only)
Vite            — Lightning-fast dev server & bundler
JavaScript ES6+ — Arrow functions, destructuring, spread, async/await
CSS3            — Custom properties, Flexbox, Grid
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js ≥ 18** and **npm** installed.

```bash
node -v   # v18.x or higher
npm -v    # 9.x or higher
```

### Clone the Repo

```bash
git clone https://github.com/Yuvrajsinghko/25-React-Mini-App.git
cd 25-React-Mini-App
```

### Run Any Mini-App

Each project lives in its own folder. Navigate into one and start the dev server:

```bash
# Example — run the Accordion app
cd React-Accordian
npm install
npm run dev
```

```bash
# Example — run the Hex-RGB Color Generator
cd Hex-RGB-Color-Generator
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser. 🎉

---

## 📁 Folder Structure

```
25-React-Mini-App/
│
├── Hex-RGB-Color-Generator/       ← Mini App 01
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── React-Accordian/               ← Mini App 02
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── ... (and 23 more apps)
│
└── README.md
```

> Each app is **fully self-contained** — its own `package.json`, `node_modules`, and dev server. No monorepo complexity.

---

## 💡 Concepts Covered

```
✔ useState & useEffect          ✔ Custom Hooks
✔ Props & Component Composition ✔ Controlled Components
✔ Conditional Rendering         ✔ Lists & Keys
✔ Event Handling                ✔ Lifting State Up
✔ useRef & DOM Manipulation     ✔ localStorage Persistence
✔ API Fetching (async/await)    ✔ Intersection Observer
✔ CSS Modules & Inline Styles   ✔ Derived State
```

---

## 🧑‍💻 About the Author

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/Yuvrajsinghko" width="80" style="border-radius:50%"/>

**Yuvraj Singh**

[![GitHub](https://img.shields.io/badge/GitHub-Yuvrajsinghko-181717?style=flat&logo=github)](https://github.com/Yuvrajsinghko)

_Building in public, one component at a time._

</div>

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork this repo
# 2. Create your feature branch
git checkout -b feat/add-new-mini-app

# 3. Commit your changes
git commit -m "feat: add [App Name] mini app"

# 4. Push and open a PR
git push origin feat/add-new-mini-app
```

Please make sure your component follows the existing folder structure and covers a clear React concept.

---
<div align="center">

If this helped you crack an interview or learn something new — drop a ⭐  
It keeps the motivation going! 🙌

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

</div>
