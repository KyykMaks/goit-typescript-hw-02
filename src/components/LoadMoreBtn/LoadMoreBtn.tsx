import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onClick}) => {
    return (
        <button onClick={onClick} className={css.button}>
            Load More
        </button>
    )
}