import React from 'react';
import { useState, useEffect } from 'react';
import BooksList from '../../components/Books/BooksList';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response);
    };
    getBooks();
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <BooksList books={books} />
    </div>
  );
}
