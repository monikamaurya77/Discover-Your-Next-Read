import React, { useEffect, useState } from 'react';
import BookList from './components/BookList';

const DEFAULT_QUERY = 'bestsellers';

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (q) => {
    setLoading(true);
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.docs.slice(0, 20));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks(DEFAULT_QUERY);
  }, []);

  const handleSearch = () => {
    const searchQuery = query.trim() === '' ? DEFAULT_QUERY : query;
    fetchBooks(searchQuery);
  };

  const handleSurpriseMe = () => {
    const prompts = [
      "magical realism", "classic horror", "books that make you laugh",
      "feel-good sci-fi from the 90s", "books like Sherlock Holmes",
      "romantic fantasy", "deep philosophical books"
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setQuery(randomPrompt);
    fetchBooks(randomPrompt);
  };

  return (
    <div className="container">
      <h1>📚 Discover Your Next Read</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Try 'Books like Harry Potter'..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button className="surprise" onClick={handleSurpriseMe}>Surprise Me!</button>
      </div>

      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
};

export default App;
