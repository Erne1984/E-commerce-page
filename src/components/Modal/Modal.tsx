import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    mainImgModalUrl: string;
    isModalOpen: boolean;
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
            </div>
        </dialog>
    );
}
