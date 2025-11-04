# 🧠 AI LMS – Learning Management System with AI  

An **AI-powered Learning Management System** built using **Next.js**, **Vapi**, **Clerk**, and **Supabase**.  
This platform allows users to create personalized AI companions that act as tutors, helping them learn any topic through natural, interactive conversations.  

🚀 **Live Demo:** [https://ailms-nine.vercel.app/](https://ailms-nine.vercel.app/)  

---

## ✨ Features  
- 🔐 **User Authentication** via [Clerk](https://clerk.com/)  
- 🤖 **AI Companions** that teach users based on their chosen topics using [Vapi](https://vapi.ai/)  
- 💬 **Real-time Learning Chats** powered by **Vapi SDK**  
- 🗂️ **Supabase Integration** for database, sessions, and conversation storage  
- ⚡ **Next.js App Router Architecture** for full-stack functionality  
- 🎨 **Modern UI** using **Tailwind CSS** and **ShadCN UI**  

---

## 🧩 Tech Stack  
- **Frontend:** Next.js (App Router), React, Tailwind CSS, ShadCN UI  
- **Backend:** Supabase  
- **Auth:** Clerk  
- **AI Engine:** Vapi SDK  
- **Deployment:** Vercel  

---

## 🛠️ Setup Instructions  

### 1. Clone the Repository  
```bash
git clone https://github.com/KaranFartyal-cloud/ai-lms-nextjs.git
cd ai-lms-nextjs

npm install
# or
pnpm install

Create a .env file at the root of the project and fill in the following values:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=
SUPABASE_PASSWORD=
NEXT_PUBLIC_VAPI_TOKEN=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

npm run dev


