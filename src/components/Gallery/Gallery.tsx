import './Gallery.css';
import { ProductsImg } from '../../types/ProductsImg';
import { Dispatch, SetStateAction } from 'react';

interface GalleryProps {
    mainImgUrl: string;
    imgsRow: ProductsImg[];
    setCurrentImg: Dispatch<SetStateAction<string>>;
    openModal: () => void;
}

function Gallery(props: GalleryProps): JSX.Element {
    return (
        <div className="gallery-box">
            <img className='main-img' src={props.mainImgUrl} alt="Gallery Image" onClick={props.openModal}/>



            <div className="thumbnails-row">
                {props.imgsRow.map((img, index) => (
                    <img
                        key={index}
                        src={img.thumbnailUrl}
                        className={`thumbnails ${img.mainImgUrl === props.mainImgUrl ? 'selected' : ''}`}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => props.setCurrentImg(img.mainImgUrl)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;