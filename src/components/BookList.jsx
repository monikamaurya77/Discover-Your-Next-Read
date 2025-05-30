import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (books.length === 0) return <p>No books found.</p>;

  return (
    <div className="book-list">
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </div>
  );
};

export default BookList;
