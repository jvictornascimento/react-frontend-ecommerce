import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../store/features/categorySlice.js";

const SearchBar = ({value, onchange, onCategoryChange }) => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.category.categories)
    const handleCategoryChange = (e) =>{
        onCategoryChange(e.target.value);
    }

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);
    return (
        <div className='search-bar input-group input-group-sm'>
            <select onChange={handleCategoryChange} className='form-control-sm'>
                <option value='all'>All Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                    ))}
            </select>
            <input
                type='text'
                value={value}
                onChange={onchange}
                className='form-control-sm'
                placeholder='search for product(e.g. whatch...)'/>
            <button className='search-button'>Clear Filter</button>
        </div>
    );
};

export default SearchBar;