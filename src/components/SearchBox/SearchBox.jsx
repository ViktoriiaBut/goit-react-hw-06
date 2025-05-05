import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"; 
import s from "./SearchBox.module.css";

const SearchBox = () => {
    const searchFieldId = useId();
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter.status); 

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={s.searchContainer}>
            <label htmlFor={searchFieldId}>Find contacts by name</label>
            <input
                className={s.searchField}
                type="text"
                id={searchFieldId}
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default SearchBox;
