import React, { useState, useCallback } from 'react';

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = useCallback(debounce((value) => {
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      const places = new window.kakao.maps.services.Places();
      places.keywordSearch(value, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const uniqueSuggestions = [...new Set(result.map(item => item.place_name))];
          setSuggestions(uniqueSuggestions.slice(0, 5));
          setShowSuggestions(true);
        }
      });
    }
  }, 300), []);

  return (
    <div style={{ position: 'absolute', top: '3.5rem', left: '10px', right: '10px', zIndex: 11 }}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="장소를 검색하세요"
          style={{ width: '100%', padding: '10px', borderRadius: '20px', border: '0px solid #222222', fontSize: '14px' }}
        />
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, backgroundColor: 'white', borderRadius: '0 0 20px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 11 }}>
          {suggestions.map((suggestion, index) => (
            <li 
              key={index}
              onClick={() => {
                setQuery(suggestion);
                onSearch(suggestion);
                setShowSuggestions(false);
              }}
              style={{ padding: '10px', cursor: 'pointer', borderBottom: index < suggestions.length - 1 ? '1px solid #eee' : 'none' }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;