# Eonboard: Automated Meeting Scheduler

> Seamless Google Calendar Integration for Effortless Coordination


## ✨  Overview

Eonboard is a full-stack web application that automates meeting scheduling by seamlessly integrating with Google Calendar, streamlining the coordination of appointments and events. It simplifies the scheduling process and minimizing potential errors when managing calendars. Built with TypeScript and Tailwind CSS, Eonboard offers a modern, responsive interface, while Firebase and Nylas provide robust backend support and secure data handling. Together, these technologies deliver an efficient and reliable scheduling solution designed to enhance productivity for professionals and teams alike.

## 🚀 Demo

- Live Demo: [Schedule Meetings Instantly](https://eonboard.vercel.app/)


## 🔑 Key Features

- **🔒 Robust OAuth Security**  
  Secure Google/Github login.

- **📝 Customizable Booking Form**  
  A flexible form that lets users schedule meetings by providing key details like host information, event descriptions, meeting duration, and availability.

- **📅 One-Click Calendar Sync**  
  Instantly creates and syncs events for both hosts and guests with Google Calendar.

- **🚀 Dynamic Routing**  
  Generates user-specific URLs for scheduling pages, enhancing the overall user experience.

- **📊 Powerful Dashboard**  
  A comprehensive interface that gives users complete control over their schedules—manage meetings, adjust availability, and customize settings.


## 🛠️ Tech Stack

### Core Technologies
- **TypeScript** – Robust static typing for scalable code.
- **Firebase** – Provides authentication, real-time data, and backend services.
- **Vercel** – Seamless cloud deployment and hosting.

### Architecture & Tools
- **Frontend:**  
  - **Next.js 15** (React & TypeScript) with the App Router for dynamic, server-rendered pages.  
  - **Tailwind CSS** combined with **Shadcn/UI** for a modern, responsive design.
- **Backend:**  
  - **Firebase Authentication** for secure user management and real-time data handling.  
  - **Nylas API** for advanced email and scheduling integrations.
  
- **Development Tools:**  
  - **ESLint & Prettier** for maintaining code quality and consistency.  
  - **GitHub Actions** for automated CI/CD workflows.



# Environment Setup

A guide to set up Eonboard on your local machine.

## Prerequisites

- Node.js v18+
- A Supabase project
- OAuth credentials (Google & GitHub)
- Nylas API access
- Git

## Setup Steps

### 1. Clone & Setup Repository

```bash
# Get the project
git clone https://github.com/MuzammilShaikh-12/eonboard.git

# Move into project directory
cd eonboard

# Install dependencies
npm install
```

### 2. Configure Environment

Create a `.env` file in the root directory:

```env
# Supabase Configuration
AUTH_SECRET=your_supabase_secret
DATABASE_URL=your_supabase_postgres
DIRECT_URL=your_supabase_postgres_url

# OAuth Credentials
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret

# Nylas Configuration
NYLAS_API_SECRET_KEY=your_nylas_api_key
NYLAS_CLIENT_ID=your_nylas_client_id
NYLAS_API_URI=your_nylas_api_uri  # US/EU region

# App Settings
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000` 🚀

## Verification Steps

- Development server running without errors  
- Landing page loads at localhost:3000  
- Google/Github OAuth login works  
- Nylas integration functional

## Helpful Resources

- [Supabase Setup](https://supabase.com/docs)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Setup](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps)
- [Nylas API Docs](https://developer.nylas.com/)


