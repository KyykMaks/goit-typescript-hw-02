import css from './ImageGallery.module.css';
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ items, onImageClick }) => {
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
