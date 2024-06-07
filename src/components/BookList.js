import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id} className="book-list-item">
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </li>
    ))}
  </ul>
);

export default BookList;
