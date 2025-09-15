# Full Stack User Management System

This project is a **full-stack web application** built using **React, TypeScript, Tailwind, Redux, Node.js, Express, and MongoDB**.  
It follows a **Repository–Service–Controller (RSC)** architecture on the backend and a modular structure on the frontend.

---

## Tech Stack

**Frontend**
- React + TypeScript  
- Tailwind CSS  
- GSAP (animations)  
- Redux Toolkit  
- Axios (API calls)  
- React Hook Form + Zod (form validation)  

**Backend**
- Node.js + TypeScript + Express  
- MongoDB + Mongoose  
- JWT Authentication (Access + Refresh tokens)  
- Repository–Service–Controller (RSC) architecture  
- Middleware for validation & error handling  

**Hosting**
- Frontend → Vercel  
- Backend → Render  
- Database → MongoDB Atlas  

---

## Folder Structure

### Frontend (client/)

client/
├── src/
│ ├── assets/ # Images, icons
│ ├── components/ # Reusable UI components
│ ├── pages/ # App pages (Auth, Dashboard, etc.)
│ ├── hooks/ # Custom React hooks
│ ├── redux/ # Redux Toolkit store & slices
│ ├── routes/ # App routes
│ ├── service/ # API integration
│ ├── types/ # TypeScript types
│ ├── utils/ # Utility functions
│ └── main.tsx # Entry point

### Backend (server/)

server/
├── src/
│ ├── config/ # DB connection & environment config
│ ├── controller/ # Controllers (handle requests)
│ ├── interface/ # TypeScript interfaces & DTOs
│ ├── middleware/ # Auth, validation, error handling
│ ├── model/ # Mongoose models
│ ├── repositories/ # Database queries
│ ├── routes/ # API routes
│ ├── service/ # Business logic
│ ├── types/ # Shared types
│ ├── utils/ # Utility functions
│ └── server.ts # App entry point

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mohamedmufeed/User-management-system.git
cd User-management-system


#### 2. Install dependencies 

**Frontend**
cd client
npm install

**Backend**
cd server
npm install

#### 3. Setup environment variables

Create a `.env` file inside `server/`:

PORTNUMBER=3000
FRONT_END_URL="https://user-management-system-kappa-eight.vercel.app"
# FRONT_END_URL="http://localhost:5173"

MONOGO_URI="your_mongo_uri"
JWT_SECRET="your_access_token_secret"
REFRESH_JWT_SECRET="your_refresh_token_secret"

ACCESS_TOKEN_MAX_AGE=900000        # 15 minutes
REFRESH_TOKEN_MAX_AGE=604800000    # 7 days

#### Running the Project

**Backend**
cd server
npm run dev

**Frontend**
cd client
npm run dev

Open in browser: http://localhost:5173

#### Hosted Links

Frontend (Vercel): https://user-management-system-kappa-eight.vercel.app

### License

This project is licensed under the MIT License.
