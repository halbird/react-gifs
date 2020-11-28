import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    onTermSubmit('happy');
  }, []);

  const onTermSubmit = async term => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        q: term,
        limit: 20
      }
    });

    console.log(response.data.data);
    setGifs(response.data.data);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui one column centered grid">
        <div className="column">
          <GifList gifs={gifs} />
        </div>
      </div>
    </div>
  );
};



export default App;

// gif app
// components: searchbar, gifList, gifItem
// list of items that could be clicked on? like photo app
// props- term, results
// 
// api.giphy.com/v1/gifs/search

