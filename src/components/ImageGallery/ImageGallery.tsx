import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface Image {
  id: string;
  urls:{
    small:string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (item: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.galleryList}>
        {items.map((item, index) => (
          <li className={css.galleryItem} key={`${item.id}_${index}`}>
            <ImageCard item={item} onClick={() => onImageClick(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery