// backend/server.js
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();

// ✅ Allow CORS from your deployed frontend (Vercel + local dev)
app.use(
  cors({
    origin: [
      "https://mini-event-finder-dun.vercel.app", // your deployed frontend 
      "http://localhost:3000", // local frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// ✅ In-memory storage
let events = [
  {
    id: uuidv4(),
    title: "Tech Meetup 2025",
    description: "Networking event for developers.",
    location: "Pune",
    date: "2025-11-10",
    maxParticipants: 100,
    currentParticipants: 0,
  },
  {
    id: uuidv4(),
    title: "React Workshop",
    description: "Hands-on React session for beginners.",
    location: "Mumbai",
    date: "2025-12-01",
    maxParticipants: 50,
    currentParticipants: 0,
  },
];

// ✅ POST /api/events - Create new event
app.post("/api/events", (req, res) => {
  const { title, description, location, date, maxParticipants } = req.body;

  if (!title || !description || !location || !date || !maxParticipants) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newEvent = {
    id: uuidv4(),
    title,
    description,
    location,
    date,
    maxParticipants: Number(maxParticipants),
    currentParticipants: 0,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

// ✅ GET /api/events - List all events
app.get("/api/events", (req, res) => {
  const { location } = req.query;
  let filtered = events;
  if (location) {
    filtered = events.filter((e) =>
      e.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  res.json(filtered);
});

// ✅ GET /api/events/:id - Get event by ID
app.get("/api/events/:id", (req, res) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
});

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🚀 Mini Event Finder Backend is running!");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
