import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// ✅ Use the same backend URL as in App.js
const API_BASE_URL = "https://mini-event-finder-backend.onrender.com/api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/events/${id}`);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Event not found");
          }
          throw new Error("Failed to fetch event details");
        }
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!event) return <p>No event details available.</p>;

  return (
    <div className="details-container">
      <h2>{event.title}</h2>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
      <p><strong>Current Participants:</strong> {event.currentParticipants}</p>
      <Link to="/">← Back to Events</Link>
    </div>
  );
}

export default EventDetails;
