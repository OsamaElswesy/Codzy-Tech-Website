# Codzy Tech Website

## Project Overview
This is the static website source code for **Codzy Tech**, a programming academy for kids and professionals.

## 🚀 How to Deploy (Easiest Method)

We recommend using **Netlify Drop** for free, instant hosting.

1.  **Prepare your folder:**
    *   Make sure you have your project folder ready: `Codzy Site`
    *   Ensure `index.html` is in the root of that folder.

2.  **Go to Netlify:**
    *   Open your browser and visit: [https://app.netlify.com/drop](https://app.netlify.com/drop)

3.  **Drag and Drop:**
    *   Drag the entire **`Codzy Site` folder** from your Desktop onto the Netlify page.
    *   Wait for the upload to finish.

4.  **Done!**
    *   Netlify will give you a live URL (e.g., `fluffy-unicorn-123456.netlify.app`).
    *   You can share this link with anyone!

## 📂 Project Structure
*   `index.html`: Home page
*   `courses.html`: Course listings
*   `instructors.html`: Team page
*   `css/`: Stylesheets
*   `js/`: JavaScript logic (translations, data, main app)
*   `images/`: Assets

## 🛠 Local Development
To run this locally, just open `index.html` in any web browser.

A premium, mobile-first static website for a Programming Academy. Built with **HTML5, TailwindCSS, and Vanilla JavaScript** for maximum performance and zero-dependency deployment.

> **Note**: This project was built using a static stack (HTML/JS) instead of Next.js because Node.js was not detected on the development environment. This ensures the site works immediately without any installation steps.

## 🚀 Quick Start
Simply double-click `index.html` to open the website in your browser. No server required.

## 📂 Project Structure
- `index.html` - Home Page
- `courses.html` - Tracks Listing (Kids & Pro)
- `course-detail.html` - Dynamic details page (loads data from JS)
- `about.html`, `instructors.html`, `success.html`, `contact.html` - Support pages
- `js/data.js` - **EDIT THIS** to change course content, prices, or curriculum.
- `js/main.js` - Contains the Header/Footer logic and Mobile Menu.
- `css/styles.css` - Custom animations and Tailwind overrides.

## 🛠 How to Edit Content

### Changing Courses
Open `js/data.js` in any text editor. You will see a `coursesData` object.
Modify the text inside the quotes to update course titles, descriptions, curriculum points, or prices.

### Changing Links / Navigation
Open `js/main.js` and look for the `renderHeader` function. You can add or remove links there.

### Changing Colors
The colors are defined in `js/main.js` under the `tailwind.config` section:
- **Primary**: `#2448FF` (Blue)
- **Secondary**: `#82FD28` (Green)
- **Dark**: `#03001B` (Navy Black)

## 🌍 Deployment
This site is "Static HTML", making it the easiest type of website to deploy.

**Option 1: Vercel / Netlify (Recommended)**
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the entire project folder.
3. Your site is online in seconds!

**Option 2: GitHub Pages**
1. Upload code to GitHub.
2. Go to Settings > Pages.
3. Select "main" branch and save.
