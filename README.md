# 🌟 Impulse 2K25 – Fest Website

A fully responsive, modern, and dynamic website for Midnapore Medical College's annual fest **Impulse 2K25**, built using:

- ⚛️ React + Vite
- 💨 Tailwind CSS v4
- 🎥 3D & video background elements
- 🎬 Animated transitions with Framer Motion
- 🌙 Dark/light theme support
- 🧭 React Router SPA routing
- ☁️ Deployed on Vercel

---

## 📁 Project Structure

├── public/ # Public assets
├── src/
│ ├── assets/ # All images/videos/logos
│ ├── components/ # Reusable components (Navbar, Footer, Loader, etc.)
│ ├── data/ # Static JSON data (sponsor logos, members)
│ ├── pages/ # Main page components (Home, Events, Schedule, etc.)
│ ├── App.jsx # Root component with Router
│ └── main.jsx # React entry point
├── tailwind.config.js # Tailwind v4 setup
├── index.html # Root HTML
└── vercel.json # SPA rewrite for Vercel routing

---

## 🚀 Live Demo

🔗 [Visit Live Website](https://impulse-chi.vercel.app/)

---

## 🧪 Features

- ✅ Fully responsive layout
- ✅ Framer Motion phrase animation
- ✅ Dynamic routing using `react-router-dom`
- ✅ Background video sections for immersive design
- ✅ Sponsor grid with 3D hover animation
- ✅ Teaser & gallery with video and carousel
- ✅ Modern, accessible UI with Tailwind
- ✅ Deployment-ready for Vercel (with SPA routing support)

---

## 🛠️ Installation & Development

### 1. Clone the repository

```bash
git clone https://github.com/your-username/impulse-2k25.git
cd impulse-2k25
```

### 2. Install dependencies

```bash
npm install 
```

### 3. Run the development server

```bash
npm run dev
```

App will be served at http://localhost:5173

---

## ⚙️ Vercel Deployment Instructions

### ✅ React SPA Routing Fix (Important)

Create a `vercel.json` file in the root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This ensures all React routes work even on direct URL entry like /events, /gallery, etc.

### ✨ Pages Overview

| **Page**   | **Path**     | **Description**                              |
|------------|--------------|----------------------------------------------|
| Home       | `/`          | Hero section with video bg, animated CTA     |
| Events     | `/events`    | Day-wise fest event cards                    |
| Schedule   | `/schedule`  | Timetable of the full fest                   |
| Sponsors   | `/sponsors`  | Sponsor logos grid with CTA                  |
| Gallery    | `/gallery`   | Teasers, photos, reels, carousel             |
| Members    | `/members`   | Member cards by designation                  |
| About      | `/about`     | About MMCH & Impulse Fest                    |

---

## 📦 External Dependencies

- [`react-router-dom`](https://reactrouter.com/) – Routing  
- [`framer-motion`](https://www.framer.com/motion/) – Animations   
- [`tailwindcss`](https://tailwindcss.com/) – Utility-first styling  
- [`@heroicons/react`](https://github.com/tailwindlabs/heroicons) – Icons  

---

## 💡 Tips

- 🧠 **Use `Link` from `react-router-dom` instead of `<a>` tags for internal routing:**

  ```jsx
  import { Link } from "react-router-dom";

  <Link to="/events">Explore Events</Link>
  ```

- 🛑 **Avoid `href="/events"` directly** — it causes full-page reloads and breaks SPA routing.

- 📹 **Use CDN-hosted videos** (e.g., [Cloudinary](https://cloudinary.com)) with `preload="auto"` to reduce lag and improve performance.

---

## ✍️ Contributing

1. **Fork** the repository

2. **Create a new branch** for your feature or fix:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit** your changes:

   ```bash
   git commit -m "✨ Add new feature"
   ```

4. **Push** to your fork:

   ```bash
   git push origin feature/your-feature
   ```

5. **Submit a Pull Request** ✅
