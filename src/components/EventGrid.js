// src/components/EventGrid.js
import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events, onEventClick }) => {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onEventClick={onEventClick} /> // Pass click handler to each EventCard
      ))}
    </div>
  );
};

export default EventGrid;
