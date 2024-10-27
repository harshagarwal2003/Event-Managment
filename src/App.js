// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar"; // Ensure the import path is correct
import EventGrid from "./components/EventGrid";
import { FaTimes } from "react-icons/fa";

import { events } from "./data/mockData";
import "./style.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event); // Set the selected event when an event card is clicked
  };

  const handleClearEvent = () => {
    setSelectedEvent(null); // Clear the selected event when the trash icon is clicked
  };

  

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar 
          selectedEvent={selectedEvent} // Pass selected event to Sidebar
          onClear={handleClearEvent}     // Pass clear function to Sidebar
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <EventGrid 
          events={filteredEvents} 
          onEventClick={handleEventClick} // Pass event click handler to EventGrid
        />
         {selectedEvent && (
          <div className="modal-overlay" onClick={handleClearEvent}>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
            >
            <div className="close-icon" onClick={handleClearEvent}>
        <FaTimes /> {/* Close icon */}
           </div>
           <img src={selectedEvent.image} alt={selectedEvent.name} style={{ width: "450px",
    height: "250px", objectfit: "cover" }} />

              <h2>{selectedEvent.name}</h2>
              <p>{selectedEvent.date}</p>
              <p>{selectedEvent.location}</p>
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
