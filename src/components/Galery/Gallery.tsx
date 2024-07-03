import './Gallery.css';
import { ProductsImg } from '../../types/ProductsImg';
import { Dispatch, SetStateAction } from 'react';

interface GalleryProps {
  mainImgUrl: string;
  imgsRow: ProductsImg[];
  setCurrentImg: Dispatch<SetStateAction<string>>; 
}

function Gallery(props: GalleryProps): JSX.Element {
  return (
    <div className="current-img">
      <img className='main-img' src={props.mainImgUrl} alt="Gallery Image" />

      <div className="thumbnails">
        {props.imgsRow.map((img, index) => (
          <img 
            key={index} 
            src={img.thumbnailUrl} 
            alt={`Thumbnail ${index + 1}`}
            onClick={() => props.setCurrentImg(img.mainImgUrl)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;