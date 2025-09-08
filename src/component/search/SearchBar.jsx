import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../store/features/categorySlice.js";

const SearchBar = ({ onchange, onCategoryChange, onClear }) => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.category.categories)
    const {selectedCategory, searchQuery } = useSelector(
        (state) => state.search)
    const handleCategoryChange = (e) =>{
        onCategoryChange(e.target.value);
    }

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);
    return (
        <div className='search-bar input-group input-group-sm'>
            <select
                value={selectedCategory}
                onChange={handleCategoryChange} className='form-control-sm'>
                <option value='all'>All Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                    ))}
            </select>
            <input
                type='text'
                value={searchQuery}
                onChange={onchange}
                className='form-control-sm'
                placeholder='search for product(e.g. whatch...)'/>
            <button className='search-button' onClick={onClear}>
                Clear Filter
            </button>
        </div>
    );
};

export default SearchBar;