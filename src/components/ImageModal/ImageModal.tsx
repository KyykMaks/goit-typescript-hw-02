import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoIosCloseCircle } from 'react-icons/io';


interface Image {
  urls:{
    regular:string;
  };
  alt_description: string;

}
interface ImageModalProps {
  isOpen: boolean;
  image:Image | null;
  onRequestClose: () => void;
}

const customStyles:Modal.Styles = {
  content: {
    padding: '0',
    background: 'unset',
    overflow: 'unset',
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onRequestClose }) => {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={css.overlay}
      style={customStyles}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        <IoIosCloseCircle className={css.icon} />
      </button>
      <div className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;