// src/components/Navbar.js
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { events } from "../data/mockData";
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Filter events based on the search term
    if (term) {
      const results = events.filter(event =>
        event.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredEvents(results);
    } else {
      setFilteredEvents([]); // Clear results if search term is empty
    }
  };
  return (
    <nav className="navbar">
      {/* Left Side: Logo and Links */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <span className="logo-icon">🎉</span> {/* Use an emoji or an image here for the logo */}
          <span className="logo-text">EventSpot</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </div>

      {/* Right Side: Search and Social Media Icons */}
      <div className="navbar-right">
      <form onSubmit={(e) => e.preventDefault()} className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">🔍</button>

          </form>
      {/* <form className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form> */}
        {filteredEvents.length > 0 && (
          <div className="search-results">
            <ul>
              {filteredEvents.map((event, index) => (
                <li key={index} className="search-result-item">
                  {event.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
