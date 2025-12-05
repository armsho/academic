# AshoAcademic – Academic Website with publications, projects, and teaching sections
Author: Arman Shokrollahi -- [my homepage](https://asho.us)

![Homepage](/academic.png "academic homepage")

I developed this clean, sleek and user-friendly academic website using **Next.js** and **React**. 
It includes pages for **Teaching**, **Research**, and **Publications**, designed for easy content management and interactive features.  

Key features:
- **Teaching Page:** Password-protected courses using `.env.local`. Access is verified via the `/api/check-password` API route.  
- **Research Page:** List of research projects or lab activities.  
- **Publications Page:** List of publications with abstracts, BibTeX download, PDF, slides, and video links.  
- Responsive design with **Tailwind CSS** for modern look.  
- Client-side interactivity with **React Hooks** and **modals**.  

---

## Demo
A live demo can be found on [Vercel](https://academic1.vercel.app/).<br>
A live demo can be run locally (see setup below).  

---

## Prerequisites

Make sure you have the following installed:

- **Node.js ≥ 18.x** (includes npm)

## Install Node.js and npm

`Next.js` requires `Node.js ≥ 18.x`. `npm` comes bundled with `Node.js`.

#### On Linux (Ubuntu/Debian):
```bash
# Update packages
sudo apt update

# Install Node.js 20.x (recommended latest LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Check versions
node -v
npm -v
```
#### On Windows:
1. Go to [Node.js official website](https://nodejs.org/en)
2. Download and install LTS version (recommended).
3. Open Command Prompt or PowerShell:
```bash
node -v
npm -v
```
#### On MacOS:
```# Using Homebrew
brew install node

# Check versions
node -v
npm -v
bash
```

## Install project dependencies

```bash
npm install
```

This will read package.json and install:

<ol>
<li>Next.js (App Router, React framework)</li>
<li>React and React-DOM</li>
<li>Tailwind CSS (for styling)</li>
<li>React Icons</li>
<li>Any other npm packages you have in `package.json`.</li>
</ol>

After this, you should have a `node_modules/` folder in your project.

## Configure environment variables

Teaching courses are password-protectetd. The passwords are defined inside `passwords/passwords.json`. 
These passwords are used by the `/api/check-password` API route to unlock course info. I mean, on the Teaching page, each course is password-protected. Set your course passwords in `passwords.json` so they remain hidden from users. Once a course is unlocked, a cookie stores access for 7 days, so users don’t need to enter the password again during that period.

## Run the development server

```bash
cd <your project root wehere package.json exists>
npm run dev
```
Opens the `Next.js` development server on [http://localhost:3000](http://localhost:3000). <br>
Automatically refreshes when you make changes to your code.

## Folder structure

```bash
academic/
├─ app/
│  ├─ api/             # API routes (e.g., check-password)
│  ├─ components/      # Navbar, Footer, Modal, etc. (reusable React components)
│  ├─ projects/        # Projects page
│  ├─ publications/    # Publications page
│  ├─ teaching/        # Teaching page (password protected)
│  ├─ globals.css      # Global styles
│  ├─ layout.tsx       # App layout
│  └─ page.tsx         # Home page (main)
├─ public/             # Images, PDFs, slides, videos
├─ passwords
│  ├─ passwords.json   # Course passwords
├─ package.json
├─ next.config.js
├─ tailwind.config.js
```


