import React from 'react';

import BookMarkManager from './BookMarkManager';

// const ImageCard = ({ image }) => {
//   const tags = image.tags.split(',');
const ImageCard = () => {
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img src={image.webformatURL} alt="" className="w-full"/> */}
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Title
        </div>
        <ul>
          <li>
            <strong>Title: </strong>
            Bookmark 1
          </li>
          <li>
            <strong>Description: </strong>
            Description of url
          </li>
          <li>
            <strong>Created on: </strong>
            Creation Date
          </li>
        </ul>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick={<BookMarkManager image={"Bookmark 1"}/>}>
        Button
      </button>
      
      <div className="px-6 py-4">
        {/* {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))} */}
      </div>
    </div>
  )
}

export default ImageCard;
