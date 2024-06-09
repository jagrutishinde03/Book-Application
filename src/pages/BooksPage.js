import React, { useState, useEffect, useCallback } from 'react';
import { getBooks } from '../api';
import BookList from '../components/BookList';
import LoadingSpinner from '../components/LoadingSpinner';
import Error from '../components/Error/Error';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(() => {
    setLoading(true);
    getBooks('')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <h1>Books</h1>
      {loading ? <LoadingSpinner /> : <BookList books={books} />}
      {error && <Error message={error} />}
    </div>
  );
};

export default BooksPage;
