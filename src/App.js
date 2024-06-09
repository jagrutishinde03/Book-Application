import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import HomePage from './components/HomePage/HomePage'; // Import HomePage component

import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> {/* Route to HomePage component */}
        <Route exact path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="*" element={<Navigate to="/books" />} />
      </Routes>
    </Router>
  );
};

export default App;
