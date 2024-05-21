
import css from './ImageCard.module.css';

interface Image {
    urls: {
        small: string;
    };
alt_description: string;
}

interface ImageCardProps {
    item: Image;
    onClick: (item: Image) => void;
}
 const ImageCard: React.FC<ImageCardProps> = ({ item, onClick}) => {
    const handleClick = () => {
        onClick(item);
    };

    return (
        <div className={css.photoCard}>
            <img 
                className={css.photo}
                src={item.urls.small}
                alt={item.alt_description}
                onClick={handleClick}
            />
        </div>
    );
}  
export default ImageCard;