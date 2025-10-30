@"
Frontend (Vercel): https://mini-event-finder-f7qs.vercel.app
Backend (Render): https://mini-event-finder-backend.onrender.com

Loom Demo Video:** [https://www.loom.com/share/e7d5e9fe851941f096cf4a8cadd90702]

# 🎉 Mini Event Finder

A full-stack web application that lets users **create, search, and view events** happening across cities.
Built using **React (frontend)** and **Node.js + Express (backend)**.

---

## 🧩 Overview

This project is part of a mini full-stack challenge to test backend-frontend integration, REST API design, and rapid development with AI-assisted tools.

Users can:

* ✏️ Create new events
* 🔍 Search events by city
* 📄 View event details
* ⚙️ Manage event data via REST API

---

## 🚀 Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React, Fetch API, CSS               |
| Backend    | Node.js, Express.js                 |
| Database   | In-memory (can switch to MongoDB)   |
| Tools      | npm, Create React App               |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## ⚙️ Setup Instructions

### 🧱 Prerequisites

* Node.js (v18+)
* npm or yarn

### 📦 Installation

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/mini-event-finder.git
cd mini-event-finder
```

#### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder (see example below 👇)

Start the backend server:

```bash
node server.js
```

Runs at: [http://localhost:5000](http://localhost:5000)

#### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

Create a `.env` file in `/backend`:

```
PORT=5000
```

👉 Example provided in `.env.example`

---

## 🧠 API Documentation

| Method   | Endpoint          | Description        | Body                                                      |
| -------- | ----------------- | ------------------ | --------------------------------------------------------- |
| **GET**  | `/api/events`     | Fetch all events   | -                                                         |
| **GET**  | `/api/events/:id` | Get event by ID    | -                                                         |
| **POST** | `/api/events`     | Create a new event | `{ title, description, location, date, maxParticipants }` |

### 🧾 Sample Request

```bash
POST /api/events
Content-Type: application/json

{
  "title": "React Workshop",
  "description": "Hands-on React event",
  "location": "Mumbai",
  "date": "2025-12-01",
  "maxParticipants": 50
}
```

---

## 🖼️ Screenshots / Demo

**Homepage:**

```
🎉 Mini Event Finder
Create New Event
Event Title
Description
Location
dd-mm-yyyy
Max Participants
Add Event
Search events...
Available Events
– Tech Meetup 2025 (Pune)
– React Workshop (Mumbai)
```

(You can add screenshots or a Loom video link here later.)

---

## 🧠 Challenges Faced

| Challenge                          | Solution                                      |
| ---------------------------------- | --------------------------------------------- |
| Handling CORS between React & Node | Added `cors` middleware in backend            |
| Event data persistence             | Used in-memory storage for quick testing      |
| API-UI synchronization             | Used React state + re-fetch on event creation |
| Form validation                    | Added basic checks before submitting          |
| Deployment configuration           | Split frontend (Vercel) and backend (Render)  |

---

## 🤖 AI Tools Used

| Tool                       | Usage                                                               |
| -------------------------- | ------------------------------------------------------------------- |
| **ChatGPT (GPT-5)**        | Helped design API structure, write README, debug integration issues |
| **GitHub Copilot**         | Assisted in autocompleting repetitive React code                    |
| **Vercel CLI Suggestions** | Guided deployment setup                                             |

---

## 💻 Deployment Links (Optional)

| Service               | URL                                                                          |
| --------------------- | ---------------------------------------------------------------------------- |
| **Frontend (Vercel)** | [https://mini-event-finder.vercel.app](https://mini-event-finder.vercel.app) |
| **Backend (Render)**  | https:                                                                       |



"@ > README.md
