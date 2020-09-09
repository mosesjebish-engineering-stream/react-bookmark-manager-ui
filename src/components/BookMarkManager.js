import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

const BookMarkManager = ({ teamName }) => {

 {/* write a fetch method here base on the parameter passed through the teamName parameter and call it from inside the component */}   
 const [images, setImages] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [term, setTerm] = useState('');
 useEffect(() => {
  fetch(`http://localhost:7443/api/bookmarks/fetchCardsBy`)
    .then(res => res.json())
    .then(data => {
      setImages(data.cardDetailDtoList);
      console.log("API return value is",images)  

      setIsLoading(false);
    })
    .catch(err => console.log(err));
}, [term]);

//  componentDidMount() {
//   fetch("http://localhost:7443/api/bookmarks/fetchCardsBy"")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.cardDetailDtoList
//         });
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }

return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

     <div className="grid grid-cols-3 gap-4">
        {/*iterate the objects from backend and create tiles of Image Card*/}
        {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
      </div>
    </div>
  );
}

export default BookMarkManager;