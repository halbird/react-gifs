// import './GifItem.css'
import React from 'react';

const GifItem = ({ gif }) => {

  return (
    <div>
      <div className="ui embed gif-div">
        <iframe className="gif-frame" title="gif" src={gif.embed_url} width="100" height="100%" />
      </div>
    </div>
  )
};

export default GifItem;