import { FaSearch } from "react-icons/fa";
import css from './SearchBar.module.css';
import toast from "react-hot-toast";


export const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const inputValue = form.elements["searchInput"].value;

    if(!inputValue.trim()) {
      toast.error('Please fill in the fields');
      return;
    }

    onSearch(inputValue);
    form.reset();
  }

return  (
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
      <FaSearch/>
    </button>
  </form>
</header>
)
}


