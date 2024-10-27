// src/components/EventCard.js
import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event, onEventClick }) => {
  return (
    <motion.div className="event-card" whileHover={{ scale: 1.05 }}>
      <div className="event-button" onClick={() => onEventClick(event)}>
        Event
      </div>

      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-details">
        <h3>{event.name}</h3>
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
      <div className="pin-icon"></div>
      <div className="link-icon">+</div>
    </motion.div>
  );
};

export default EventCard;
