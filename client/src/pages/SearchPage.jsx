import React, { useState } from 'react';
import './SearchPage.css';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults([]);
    try {
      const response = await fetch(
        `${API_URL}/cop/search?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      alert('Search error');
    }
    setLoading(false);
  };

  return (
    <div className="searchpage-root">
      <aside className="searchpage-sidebar">
        <div className="searchpage-sidebar-header">
          <span>Past Chats</span>
          <span className="searchpage-sidebar-icon">&#128269;</span>
        </div>
        <a href="/signin" className="searchpage-signin-link">
          <span>Sign in to see<br />past chats</span>
        </a>
      </aside>
      <main className="searchpage-main">
        <div className="searchpage-switch-row">
          Switch to Search Mode <span className="searchpage-switch-icon">&#128269;</span>
        </div>
        <div className="searchpage-chat">
          <div className="searchpage-botmsg">
            <span className="searchpage-botdot"></span>
            <span>Hi! How can I help you?...</span>
          </div>
          <form className="searchpage-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Chat with our AI..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="searchpage-form-btn" tabIndex={-1}>
              <span role="img" aria-label="search">&#128269;</span>
            </button>
          </form>
          {loading && <div className="searchpage-loading">Loading...</div>}
          {results.length > 0 && (
            <div className="searchpage-results">
              {results.map((item, idx) => (
                <div key={item.id || idx} className="searchpage-result-item">
                  <h4>{item.title}</h4>
                  <div><b>Authority:</b> {item.authority}</div>
                  <p>{item.description}</p>
                  {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default SearchPage;