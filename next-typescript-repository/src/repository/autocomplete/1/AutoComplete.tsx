"use client"
import React, { useState,useEffect  } from 'react'
import './style.css';

interface Suggestion {
    id: number;
    value: string;
  }
  
  interface AutocompleteProps {
    suggestions?: Suggestion[];
  }

const AutoComplete:React.FC<AutocompleteProps> = ({suggestions = [] }) => {

  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.value.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsDropdownOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsDropdownOpen(false);
    }
  }, [query, suggestions]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    setIsDropdownOpen(false);
  };
    
  return (
    <div className="autocomplete-container">
    <input
      type="text"
      className="autocomplete-input"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
    {isDropdownOpen && (
      <ul className="autocomplete-dropdown">
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map(suggestion => (
            <li
              key={suggestion.id}
              className="autocomplete-item"
              onClick={() => handleSelect(suggestion.value)}
            >
              {suggestion.value}
            </li>
          ))
        ) : (
          <li className="autocomplete-item text-gray-500">No suggestions found</li>
        )}
      </ul>
    )}
  </div>
  )
}

export default AutoComplete  