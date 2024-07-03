import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Details from './components/Details/Details';
import { ProductsImg } from './types/ProductsImg';

const productsImgsUrl: ProductsImg[] = [
  {
    mainImgUrl: "./products/image-product-1.jpg",
    thumbnailUrl: "./products/image-product-1-thumbnail.jpg"
  },
  {
    mainImgUrl: "./products/image-product-2.jpg",
    thumbnailUrl: "./products/image-product-2-thumbnail.jpg"
  },
  {
    mainImgUrl: "./products/image-product-3.jpg",
    thumbnailUrl: "./products/image-product-3-thumbnail.jpg"
  },
  {
    mainImgUrl: "./products/image-product-4.jpg",
    thumbnailUrl: "./products/image-product-4-thumbnail.jpg"
  },
];

function App() {
  const [currentMainImg, setCurrentImg] = useState(productsImgsUrl[0].mainImgUrl)

  return (
    <>
      <Header />
      <main className='main-content'>
        <Gallery 
        mainImgUrl={currentMainImg} 
        imgsRow={productsImgsUrl} 
        setCurrentImg={setCurrentImg}/>
        <Details/>
      </main>
    </>
  );
}

export default App;