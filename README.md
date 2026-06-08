# A. Manisha Patro — Portfolio Website

**Angular 17 | Standalone Components | SCSS | Fully Responsive**

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens http://localhost:4200)
npm start

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← Fixed nav, scroll-aware active state, mobile menu
│   │   ├── hero/            ← Typewriter roles, photo avatar, floating chips, stats
│   │   ├── about/           ← Photo card, personal info, AI tools, achievements grid
│   │   ├── experience/      ← Timeline: 3 jobs with full bullet details
│   │   ├── skills/          ← 4 skill groups (28 skills), animated bars, soft skills
│   │   ├── projects/        ← 3 real projects: ICust, Median, ExpressBees
│   │   ├── contact/         ← Info cards, available roles, working contact form
│   │   └── footer/          ← Nav links, social icons, copyright
│   └── app.component.ts     ← Root + IntersectionObserver scroll reveal
├── styles/
│   └── global.scss          ← Full design system (colors, fonts, animations)
├── assets/
│   ├── images/
│   │   └── manisha.png      ← Profile photo (hero + about)
│   └── files/
│       └── manisha-cv.pdf   ← CV download file
└── index.html               ← Google Fonts (Bricolage Grotesque) + Font Awesome
```

---

## 🎨 Design System

**Theme:** Dark teal-tech aesthetic
**Primary accent:** `#00e5c3` (teal)
**Secondary:** `#4f8ef7` (blue), `#f59e0b` (amber), `#f472b6` (pink)
**Background:** `#050d1a` → `#081224`
**Fonts:** Bricolage Grotesque (display/body) + JetBrains Mono (code/labels)
**Scrollbar:** Hidden across all browsers for clean look

---

## ✅ All Sections

| Section        | Content                                                                             |
| -------------- | ----------------------------------------------------------------------------------- |
| **Hero**       | Name, typewriter role (5 roles), real photo, 4 floating chips, tech badges, 4 stats |
| **About**      | Photo card, contact info, AI tools row, 3-para bio, 4 achievement cards             |
| **Experience** | Rumango (current), Associate Dev (Aug 2022–Apr 2025), Trainee Intern                |
| **Skills**     | 28 skills across Frontend, Backend, Architecture, DevOps/Cloud + soft skills        |
| **Projects**   | ICust Banking App, Median Middleware, ExpressBees Logistics                         |
| **Contact**    | Email (Gmail), Phone, LinkedIn + role cards + working Formspree form                |
| **Footer**     | Brand, nav links, social icons, CV download, copyright                              |

---

## 📧 Contact Form Setup (Formspree)

Form submissions go directly to your Gmail inbox via Formspree:

1. Sign up free at **https://formspree.io**
2. Create a new form → copy your Form ID (e.g. `xpwzgkbd`)
3. In `contact.component.ts` find and replace:

```typescript
fetch('https://formspree.io/f/YOUR_FORM_ID', ...)
```

With your actual Form ID. All messages will arrive at `patroamanisha9@gmail.com`.

---

## 📄 CV Download

Place your CV file at:

```
src/assets/files/manisha_patro_cv.pdf
```

Download button is in the **About section** card and **Footer** social icons.

---

## 🖼️ Profile Photo

Photo is placed at:

```
src/assets/images/manisha-photo.png
```

Used in both:

- **Hero** — large circular avatar with 4 floating stat chips
- **About** — smaller circular photo in info card

To replace with a different photo, just swap the file keeping the same filename.

---

## 📱 Mobile Responsive

- Hamburger menu with smooth slide-down panel
- All nav links scroll to correct sections on mobile
- Hire Me opens Gmail on mobile
- Hero stacks vertically with photo on top
- Floating chips reposition for smaller screens
- Stats grid goes 2-column on small screens
- Contact grid stacks to single column
- Footer stacks to single column

---

## 🔗 All Working Links & Actions

| Element                      | Action                                         |
| ---------------------------- | ---------------------------------------------- |
| **Hire Me** navbar button    | Opens Gmail compose with your email pre-filled |
| **Get In Touch** hero button | Scrolls smoothly to Contact section            |
| **View My Work** hero button | Scrolls smoothly to Projects section           |
| **Download CV** about button | Downloads `manisha-cv.pdf`                     |
| **Email** contact card       | Opens Gmail compose in new tab                 |
| **Phone** contact card       | Dials on mobile / opens calling app on desktop |
| **LinkedIn** contact card    | Opens LinkedIn profile in new tab              |
| **Footer email icon**        | Opens Gmail compose in new tab                 |
| **Footer LinkedIn icon**     | Opens LinkedIn profile in new tab              |
| **Footer CV download icon**  | Downloads `manisha-cv.pdf`                     |
| **Send Message** form button | Sends via Formspree directly to your Gmail     |
| **All nav links**            | Smooth scroll to correct section               |
| **Footer nav links**         | Smooth scroll to correct section               |

---

## 🛠️ Key Fixes Applied

| Issue                           | Fix Applied                                          |
| ------------------------------- | ---------------------------------------------------- |
| Navbar links not clickable      | Changed buttons to anchor tags, z-index 99999        |
| Hire Me not working             | Changed mailto to Gmail URL                          |
| Floating chips hidden           | Moved chips outside photo circle with margin spacing |
| Mobile menu text bleeding       | position:fixed + solid background on mobile nav      |
| NG5002 ICU template errors      | Removed floating code snippets from hero template    |
| Scrollbar visible               | Hidden via webkit + Firefox + IE CSS                 |
| Contact form fake               | Replaced with real Formspree fetch API call          |
| CV download not working         | Fixed asset path to assets/files/manisha-cv.pdf      |
| Experience/Skills gap too large | Reduced padding-top/bottom on those sections         |
| Contact section height mismatch | align-items:stretch + flex:1 on availability card    |

---

## 🌐 Deploying

### Netlify (Easiest — Free)

```bash
npm run build
# Drag and drop dist/manisha-patro-portfolio/ to netlify.com/drop
```

### Vercel

```bash
npm install -g vercel
npm run build
vercel --prod
```

### GitHub Pages

```bash
npm install -g angular-cli-ghpages
npm run build
npx angular-cli-ghpages --dir=dist/manisha-patro-portfolio
```

### AWS S3

```bash
npm run build
# Upload dist/manisha-patro-portfolio/ to S3 bucket
# Enable static website hosting
# Set index.html as both index and error document
```

---

## 💡 Why This Beats a Naukri Profile

| Feature          | Naukri Profile        | This Portfolio                           |
| ---------------- | --------------------- | ---------------------------------------- |
| Design           | Generic template      | Custom dark teal-tech brand              |
| Photo            | Static upload         | Circular with 4 floating stat chips      |
| Animations       | None                  | Typewriter, scroll reveal, progress bars |
| Skills           | Listed text           | Visual animated progress bars            |
| Projects         | Text only             | Full highlights + tech tags + icons      |
| Contact          | Via Naukri only       | Direct Gmail + form + phone + LinkedIn   |
| AI Tools         | Not shown             | Highlighted in About section             |
| CV               | Upload only           | One-click download button                |
| Availability     | Not shown             | Visible role cards (SD / Senior SD / TL) |
| URL              | naukri.com/manisha... | Your own custom domain                   |
| First impression | Average               | **Exceptional**                          |

---

## 📞 Contact Info in Portfolio

| Type     | Value                         |
| -------- | ----------------------------- |
| Email    | patroamanisha9@gmail.com      |
| Phone    | +91 77499 57009               |
| LinkedIn | linkedin.com/in/manisha-patro |

---

## 🧰 Tech Stack Used to Build This

| Technology               | Purpose                           |
| ------------------------ | --------------------------------- |
| Angular 17               | Framework (Standalone Components) |
| TypeScript               | Language                          |
| SCSS                     | Styling with CSS variables        |
| Bricolage Grotesque      | Display / body font               |
| JetBrains Mono           | Code / mono font                  |
| Font Awesome 6           | Icons                             |
| Formspree                | Contact form email delivery       |
| IntersectionObserver API | Scroll reveal animations          |
