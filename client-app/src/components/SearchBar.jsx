import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ search, setSearch, onSearchSubmit }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderRadius: '2rem',
      boxShadow: '0 2px 8px rgba(60,64,67,.15)',
      padding: '0.5rem 1rem',
      width: '450px',
      maxWidth: '90%'
    }}>
      {/* Search Icon */}
      <FaSearch style={{ color: '#9aa0a6', fontSize: '1.2rem', marginRight: '0.7rem' }} />
      {/* Input */}
      <input
        type="text"
        placeholder="ask a question..."
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '1.1rem',
          flex: 1,
          background: 'transparent',
        }}
      />
      {/* Placeholder for other icons (mic, lens) */}
      <span style={{ marginLeft: '0.7rem', color: '#4285f4', fontSize: '1.2rem', opacity: 0.5 }}>
        {/* Add mic/lens icons here if needed */}
      </span>
    </div>
  );
}

export default SearchBar;
