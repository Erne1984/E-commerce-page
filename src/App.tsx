import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';
import Gallery from './components/Gallery/Gallery';
import Details from './components/Details/Details';
import { ProductsImg } from './types/ProductsImg';
import Modal from './components/Modal/Modal';

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
  const [currentMainImg, setCurrentImg] = useState(productsImgsUrl[0].mainImgUrl);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 885);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 885);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Modal
        mainImgModalUrl={currentMainImg}
        isModalOpen={isModalOpen}
        imgsRow={productsImgsUrl}
        setCurrentImg={setCurrentImg}
        closeModal={closeModal}
      />
      <div>
        {isMobile ? <HeaderMobile /> : <Header />}
        <main className='main-content'>
          <Gallery
            mainImgUrl={currentMainImg}
            imgsRow={productsImgsUrl}
            setCurrentImg={setCurrentImg}
            openModal={openModal}
            isMobile={isMobile}
          />
          <Details />
        </main>
      </div>
    </>
  );
}

export default App;
