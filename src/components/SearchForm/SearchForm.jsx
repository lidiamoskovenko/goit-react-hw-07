import { useId } from 'react';
import { useDispatch } from "react-redux";
import css from './SearchForm.module.css'
import { filterNumbers } from "../../redux/filterContacts/filterSlice";

export const SearchForm = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const handleFilterChange = (e) => dispatch(filterNumbers(e.target.value.trim()));
  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId} className={css.searchLabel}>Filter</label>
      <input className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        placeholder="Search"
        onChange={handleFilterChange}
      />
    </div>
  );
};

