# Durgapur High School - Production Web Application (Bun + React)

A modern, production-ready, decoupled web application for Durgapur High School built with **Bun + Express.js (Backend API)** and **React.js / Vite (Frontend SPA)**.

---

## 📁 Decoupled Folder Structure

```text
durgapurhighschool/
├── backend/                            # Bun + Express REST API (ES Modules)
│   ├── src/
│   │   ├── config/                     # Database Configuration
│   │   ├── controllers/                # Request Logic Controllers
│   │   ├── routes/                     # Express Routes
│   │   ├── models/                     # Data Schema Definitions
│   │   ├── middlewares/                # Error Handler & Security Middlewares
│   │   └── server.js                   # API Server Entry Point
│   ├── .env.example
│   └── package.json                    # Bun runtime & "type": "module"
│
├── frontend/                           # React.js SPA (Vite + JSX)
│   ├── public/                         # Favicon & Static Media
│   ├── src/
│   │   ├── assets/styles/              # Global CSS & Design Tokens
│   │   ├── components/                 # JSX UI Components
│   │   ├── pages/                      # JSX Page Views
│   │   ├── services/                   # REST API Client Services
│   │   ├── App.jsx                     # React Router Container
│   │   └── main.jsx                    # React Entry Point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── docker-compose.yml                  # Container Orchestration
├── package.json                        # Bun workspace scripts
└── README.md                           # Documentation
```

---

## 🚀 Quick Start with Bun

### 1. Install Dependencies Across Workspaces
```bash
bun run install:all
# or manually inside backend & frontend:
cd backend && bun install
cd ../frontend && bun install
```

### 2. Start Backend API (with Bun native `--watch` mode)
```bash
bun run dev:backend
# API server running at http://localhost:5000/api/v1
```

### 3. Start Frontend Client App
```bash
bun run dev:frontend
# Client app running at http://localhost:3000
```
