# Devel — Web Development Course Platform

A full-stack web development course selling platform built with **Next.js App Router**, **NextAuth.js**, **MongoDB**, and **DaisyUI**.

---

## 🚀 Live Demo

### [https://devel-seven.vercel.app](https://devel-seven.vercel.app)

---

## GitHub

### [https://github.com/st-shourov12/Devel.git](https://github.com/st-shourov12/Devel.git)

---

## 📸 Features

- 🔐 Authentication with **Google OAuth** and **Credentials** (NextAuth.js)
- 🛒 Browse and view web development courses
- 📝 Add and manage your own courses (protected)
- 🔍 Search and filter courses by category and level
- 📱 Fully responsive across mobile, tablet, and desktop
- 🎨 Clean UI with **DaisyUI** + **Tailwind CSS v4**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Auth | NextAuth.js |
| Database | MongoDB + Mongoose |
| Styling | Tailwind CSS v4 + DaisyUI |
| Password Hashing | bcryptjs |
| Language | JavaScript |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js        # NextAuth API route
│   ├── about/
│   │   └── page.jsx                # About Us page
│   ├── blog/
│   │   ├── page.jsx                # Blog list page
│   │   └── [id]/
│   │       └── page.jsx            # Blog detail page
│   ├── course/
│   │   ├── page.jsx                # Course list page
│   │   └── [id]/
│   │       └── page.jsx            # Course detail page
│   ├── login/
│   │   └── page.jsx                # Login page
│   ├── register/
│   │   └── page.jsx                # Register page
│   ├── add-product/
│   │   └── page.jsx                # Add course (protected)
│   ├── manage-products/
│   │   └── page.jsx                # Manage courses (protected)
│   ├── layout.jsx                  # Root layout
│   ├── page.jsx                    # Landing page
│   └── globals.css                 # Global styles
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── LatestCourse.jsx
│   ├── Testimonials.jsx
│   ├── CTABanner.jsx
│   └── Button/
│       └── AuthBtn.jsx
├── actions/
│   └── server/
│       └── auth.js                 # Server actions (login, register)
├── lib/
│   └── dbConnect.js                # MongoDB connection
└── data/
    ├── courses.json
    └── blog.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/st-shourov12/Devel.git
cd devel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of your project:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=your_mongodb_connection_string
DBNAME=devel
```

### 4. Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project → **APIs & Services** → **Credentials**
3. Click **Create Credentials** → **OAuth 2.0 Client ID**
4. Set application type to **Web application**
5. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
6. Copy **Client ID** and **Client Secret** into `.env.local`

---

## 📄 Pages

| Page | Route | Protected |
|---|---|---|
| Landing Page | `/` | ❌ |
| Course List | `/course` | ❌ |
| Course Detail | `/course/[id]` | ✅ |
| Blog List | `/blog` | ❌ |
| Blog Detail | `/blog/[id]` | ❌ |
| About Us | `/about` | ❌ |
| Login | `/login` | ❌ |
| Register | `/register` | ❌ |
| Add Course | `/add-product` | ✅ |


---

## 🏠 Landing Page Sections

1. **Navbar** — Logo, navigation links, login/register, user dropdown after login
2. **Hero** — Headline, subtitle, CTA buttons
3. **Features** — 6 feature cards (project-based, self-paced, certificates, etc.)
4. **Latest Courses** — Grid of course cards from JSON data
5. **Testimonials** — Student reviews with ratings
6. **CTA Banner** — Call-to-action with stats
7. **Footer** — Links, social icons, copyright

---

## 🔒 Protected Routes

The following pages require authentication. Unauthenticated users are redirected to `/login`:

- `/add-product` — Add a new course
- `/manage-products` — View, and delete your courses

---

## 📦 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🌐 Deployment

This project is ready to deploy on **Vercel**:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.local` to Vercel project settings
4. Update `NEXTAUTH_URL` to your production URL
5. Add your production URL to Google OAuth authorized redirect URIs:
   ```
   https://your-domain.com/api/auth/callback/google
   ```

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@st-shourov12](https://github.com/st-shourov12)
- LinkedIn: [miraz-shourov](https://www.linkedin.com/in/miraz-shourov)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).