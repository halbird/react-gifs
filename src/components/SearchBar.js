import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit}) => {

  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    console.log("form submitted");
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input type="text" className="input" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;