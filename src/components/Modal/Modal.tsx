import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { ProductsImg } from "../../types/ProductsImg";
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
    mainImgModalUrl: string;
    isModalOpen: boolean;
    imgsRow: ProductsImg[];
    setCurrentImg: Dispatch<SetStateAction<string>>;
    closeModal: () => void;
}

export default function Modal(props: ModalProps): JSX.Element {
    return (
        <dialog open={props.isModalOpen} className="modal">
            <div className="modal-container">
                <FontAwesomeIcon
                    icon={faX}
                    className="modal-close-icon"
                    onClick={props.closeModal}
                />
                <img
                    className="modal-main-img"
                    src={props.mainImgModalUrl}
                    alt="Modal Image"
                />

                <div className="modal-thumbnails-row">
                    {props.imgsRow.map((img, index) => (
                        <img
                            key={index}
                            src={img.thumbnailUrl}
                            className={`thumbnails-modal ${img.mainImgUrl === props.mainImgModalUrl ? 'selected' : ''}`}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => props.setCurrentImg(img.mainImgUrl)}
                        />
                    ))}

                </div>
            </div>
        </dialog>
    );
}
