import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventDetails from "./EventDetails";

function EventList() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    maxParticipants: "",
  });

  const fetchEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/events");
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      if (!res.ok) throw new Error("Failed to add event");
      setNewEvent({
        title: "",
        description: "",
        location: "",
        date: "",
        maxParticipants: "",
      });
      fetchEvents();
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const filteredEvents = events.filter((event) => {
    const term = searchTerm.toLowerCase();
    return (
      (event.title && event.title.toLowerCase().includes(term)) ||
      (event.location && event.location.toLowerCase().includes(term))
    );
  });

  return (
    <div className="container">
      <h1>🎉 Mini Event Finder</h1>

      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newEvent.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="maxParticipants"
          placeholder="Max Participants"
          value={newEvent.maxParticipants}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <h2>Available Events</h2>
      {loading && <p>Loading events...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredEvents.length === 0 && !loading ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>
                <strong>{event.title}</strong> – {event.location} ({event.date})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
