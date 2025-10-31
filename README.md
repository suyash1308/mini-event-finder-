# 🎉 Mini Event Finder

A simple full-stack event management web app where users can **create** and **discover** local events.
Built using **React (Vite)** on the frontend and **Express.js** for the backend, deployed on **Vercel** and **Render** respectively.

---

## 🌐 Live Links

* **Frontend (Vercel):** [[https://mini-event-finder.vercel.app](https://mini-event-finder.vercel.app](https://mini-event-finder-f7qs.vercel.app/))
* **Backend (Render):** [[https://mini-event-finder-backend.onrender.com](https://mini-event-finder-backend.onrender.com](https://mini-event-finder-backend.onrender.com))
* **Demo Video (Loom):** [https://www.loom.com/share/e7d5e9fe851941f096cf4a8cadd90702](https://www.loom.com/share/e7d5e9fe851941f096cf4a8cadd90702)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/suyash1308/mini-event-finder-.git
cd mini-event-finder-
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```
PORT=5000
NODE_ENV=development
```

Run the backend server:

```bash
npm start
```

It will start on:
👉 [http://localhost:5000](http://localhost:5000)

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend`:

```
REACT_APP_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm start
```

It will start on:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Environment Variables

| Variable            | Description               | Example                                          |
| ------------------- | ------------------------- | ------------------------------------------------ |
| `PORT`              | Port number for backend   | `5000`                                           |
| `NODE_ENV`          | Environment type          | `development`                                    |
| `REACT_APP_API_URL` | API base URL for frontend | `https://mini-event-finder-backend.onrender.com` |

Also provided as `.env.example` in the repo.

---

## 📘 API Documentation

### **Base URL:**

`https://mini-event-finder-backend.onrender.com/api/events`

#### **1️⃣ GET /api/events**

Get all events (optionally filter by location).
**Example:** `/api/events?location=Pune`

**Response:**

```json
[
  {
    "id": "123",
    "title": "Tech Meetup 2025",
    "description": "Networking event for developers",
    "location": "Pune",
    "date": "2025-11-10",
    "maxParticipants": 100,
    "currentParticipants": 0
  }
]
```

#### **2️⃣ POST /api/events**

Create a new event.

**Request Body:**

```json
{
  "title": "React Workshop",
  "description": "Learn React from scratch",
  "location": "Mumbai",
  "date": "2025-12-01",
  "maxParticipants": 50
}
```

**Response:**

```json
{
  "id": "uuid-generated",
  "title": "React Workshop",
  "description": "Learn React from scratch",
  "location": "Mumbai",
  "date": "2025-12-01",
  "maxParticipants": 50,
  "currentParticipants": 0
}
```

#### **3️⃣ GET /api/events/:id**

Get details of a single event by ID.

---

## 🧠 Challenges Faced & Solutions

| Challenge                                    | Solution                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| **Render backend failing to connect**        | Fixed by updating `remote origin` and configuring correct repository link. |
| **CORS issues between frontend and backend** | Used `cors()` middleware in Express.                                       |
| **Frontend showing “Failed to fetch”**       | Corrected `REACT_APP_API_URL` and redeployed both apps.                    |
| **Deployment errors on Vercel**              | Set correct root directory (`frontend`), and environment variables.        |

---

## 🤖 AI Tools Used

* **ChatGPT (OpenAI):**
  Helped in debugging deployment issues, writing clean README.md, and improving project documentation clarity.

---

## 🧱 Tech Stack

**Frontend:** React.js (Vite), Axios, CSS
**Backend:** Node.js, Express.js, UUID
**Hosting:** Vercel (Frontend), Render (Backend)
**Version Control:** Git & GitHub

---


## 🧾 Clean Commit History

* Initial commit - Mini Event Finder project
* Added backend APIs
* Integrated frontend with backend
* Fixed API fetch issue
* Deployed on Render & Vercel
* Final README.md and documentation updates

---

