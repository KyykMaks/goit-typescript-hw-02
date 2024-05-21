import React from 'react';
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import css from './SearchBar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const inputElement = form.elements.namedItem("searchInput") as HTMLInputElement;

        if (!inputElement || !inputElement.value.trim()) {
            toast.error('Please fill in the fields');
            return;
        }

        onSearch(inputElement.value);
        form.reset();
    }

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="searchInput"
                />
                <button className={css.button} type="submit">
                    <FaSearch />
                </button>
            </form>
        </header>
    );
};
