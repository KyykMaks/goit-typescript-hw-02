import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({onClick}) => {
    return (
        <button onClick={onClick} className={css.button}>
            Load More
        </button>
    )
}