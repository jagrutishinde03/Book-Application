import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <div className="text-content">
          <h1>Welcome to Book Application</h1>
          <p>This is a simple book application where you can browse and view details of various books.</p>
          <Link to="/books" className="view-books-link">
            View All Books <span className="arrow">&rarr;</span>
          </Link>
        </div>
        <div className="image-content">
          <img className="bookshelf-image" src="/1.jpg" alt="Bookshelf" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
