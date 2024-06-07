import React, { useState, useEffect, useCallback } from 'react';
import { getBooks } from '../api';
import BookList from '../components/BookList';
import LoadingSpinner from '../components/LoadingSpinner';
import Error from '../components/Error';
import SearchBar from '../components/SearchBar';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback((query) => {
    setLoading(true);
    getBooks(query)
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
    fetchBooks('');
  }, [fetchBooks]);

  const handleSearch = (query) => {
    fetchBooks(query);
  };

  return (
    <div>
      <h1>Books</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <LoadingSpinner /> : <BookList books={books} />}
      {error && <Error message={error} />}
    </div>
  );
};

export default BooksPage;
