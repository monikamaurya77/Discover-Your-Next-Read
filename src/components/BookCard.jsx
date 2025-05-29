import React from 'react';

const BookCard = ({ book }) => {
  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x220?text=No+Cover';

  return (
    <div className="book-card">
      <img src={imageUrl} alt={book.title} className="book-cover" />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
        <p><strong>Year:</strong> {book.first_publish_year || 'N/A'}</p>
      </div>
    </div>
  );
};

export default BookCard;
