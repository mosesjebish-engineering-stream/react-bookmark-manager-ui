import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import BookMarkManager from './components/BookMarkManager';


function App() {
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
<Tabs>
    <TabList>
      <Tab>Bookmark Cards</Tab>
      <Tab>Create Cards</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
      <div>
          <BookMarkManager image={images}/>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    </Tabs>
    </div>
  );
}

export default App;
