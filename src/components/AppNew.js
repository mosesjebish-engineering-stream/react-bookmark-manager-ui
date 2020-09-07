import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function AppNew() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setImages(data.hits);
    //     setIsLoading(false);
    //   })
    //   .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}

      {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

     <div className="grid grid-cols-3 gap-4">
        
          <ImageCard/>
          <ImageCard/>
      </div>
    </div>
  );
}

export default App;
