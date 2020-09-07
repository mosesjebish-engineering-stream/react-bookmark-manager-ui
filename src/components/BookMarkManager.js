import React from 'react';
import ImageCard from './ImageCard';

const BookMarkManager = ({ teamName }) => {

 {/* write a fetch method here base on the parameter passed through the teamName parameter and call it from inside the component */}   

return (
    <div className="container mx-auto">
      {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}

      {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

     <div className="grid grid-cols-3 gap-4">
        {/*iterate the objects from backend and create tiles of Image Card*/}
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
        
      </div>
    </div>
  );
}

export default BookMarkManager;