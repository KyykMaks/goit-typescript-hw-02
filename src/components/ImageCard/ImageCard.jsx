
import css from './ImageCard.module.css';

export const ImageCard = ({ item, onClick}) => {
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