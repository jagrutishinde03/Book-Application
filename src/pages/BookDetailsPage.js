import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../api';
import BookDetails from '../components/BookDetails';
import LoadingSpinner from '../components/LoadingSpinner';
import Error from '../components/Error/Error';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;
