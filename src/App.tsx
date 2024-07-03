import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Gallery from './components/Galery/Gallery';
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
      <main>
        <Gallery 
        mainImgUrl={currentMainImg} 
        imgsRow={productsImgsUrl} 
        setCurrentImg={setCurrentImg}/>
      </main>
    </>
  );
}

export default App;
