// src/components/Sidebar.js
import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ selectedEvent, onClear }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h1>Event Listing</h1>
        <h3>Event Listing</h3>
        <p  >
          To define an event website we could say whether you conduct in-person, virtual, or hybrid events, 
          an event website is essential for you to ensure that your target audiences do not need to pass 
          through a hassle to gather information about the events they are looking for.
        </p>
      </div>



      {selectedEvent ? (
        <div className = "selected-event">
          <h2>{selectedEvent.name}</h2>
          <p>{selectedEvent.description}</p>
          <img src={selectedEvent.image} alt={selectedEvent.name}  style={{ width: "200px",
    height: "200px", objectfit: "cover" }} className="event-image" />

          <p><strong>Time:</strong> {selectedEvent.time}</p>
          <p><strong>Location:</strong> {selectedEvent.location}</p>
          <div className="trash-icon" onClick={onClear} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      ) : (
        <p>Select an event to see details.</p>
      )}

    </div>
  );
};

export default Sidebar;
