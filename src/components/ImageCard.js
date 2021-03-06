import React from 'react';

import CardManagement from './CardManagement';

const ImageCard = ({image}) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img src={image.webformatURL} alt="" className="w-full"/> */}
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    {image.application}
                </div>
                <ul>
                    <li>
                        <strong>Url: </strong>
                        {image.shortUrl}
                    </li>
                    <li>
                        <strong>Tribe: </strong>
                        {image.tribe}
                    </li>
                    <li>
                        <strong>Application: </strong>
                        {image.application}
                    </li>
                    <li>
                        <strong>Platform: </strong>
                        {image.platform}
                    </li>
                    <li>
                        <strong>Description: </strong>
                        {image.description}
                    </li>
                    <li>
                        <strong>Created By: </strong>
                        {image.userId}
                    </li>
                </ul>
            </div>
{/*            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={<CardManagement image={"Bookmark 1"}/>}>
                Button
            </button>*/}

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
