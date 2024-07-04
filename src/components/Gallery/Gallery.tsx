import './Gallery.css';
import { ProductsImg } from '../../types/ProductsImg';
import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface GalleryProps {
    mainImgUrl: string;
    imgsRow: ProductsImg[];
    setCurrentImg: Dispatch<SetStateAction<string>>;
    openModal: () => void;
    isMobile: boolean;
}

function Gallery(props: GalleryProps): JSX.Element {
    const currentIndex = props.imgsRow.findIndex(img => img.mainImgUrl === props.mainImgUrl);

    const showNextImg = () => {
        const nextIndex = (currentIndex + 1) % props.imgsRow.length;
        props.setCurrentImg(props.imgsRow[nextIndex].mainImgUrl);
    };

    const showPrevImg = () => {
        const prevIndex = (currentIndex - 1 + props.imgsRow.length) % props.imgsRow.length;
        props.setCurrentImg(props.imgsRow[prevIndex].mainImgUrl);
    };

    return (
        <div className="gallery-box">
            {props.isMobile && (
                <>
                    <div className="nav-arrow left-arrow" onClick={showPrevImg}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="nav-arrow right-arrow" onClick={showNextImg}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </>
            )}
            <img className='main-img' src={props.mainImgUrl} alt="Gallery Image" onClick={!props.isMobile ? props.openModal : () => {}}  />
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
