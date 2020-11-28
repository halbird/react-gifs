import './GifList.css';
import React from 'react';
import GifItem from './GifItem';

const GifList = ({ gifs }) => {
  const renderedList = gifs.map(gif => {
    return <GifItem key={gif.id} gif={gif} />
  });
  return <div className="gif-list">{renderedList}</div>
};

export default GifList;