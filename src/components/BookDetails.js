import React from 'react';

const BookDetails = ({ book }) => (
  <div className="book-details">
    <h1>{book.title}</h1>
    <p><strong>ISBN:</strong> {book.isbn}</p>
    <p><strong>Page Count:</strong> {book.pageCount}</p>
    <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
  </div>
);

export default BookDetails;
