import React, {useState} from 'react';
import HeroSlider from "./HeroSlider.jsx";
import SearchBar from "../search/SearchBar.jsx";
import {useDispatch} from "react-redux";
import {clearFilters, setSearchQuery, setSelectedCategory} from "../../store/features/searchSlice";

const Hero = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => dispatch(setSearchQuery(e.target.value));
    const handleClearFilters = () => {
        dispatch(clearFilters());
    }


    const [currentSlide] = useState(0)
    return (
        <div className='hero'>
            <HeroSlider setCurrentSlide={currentSlide}/>
            <div className='hero-content'>
                <h1>Welcome to <span className='text-primary'>buyNow</span>.com</h1>
                <SearchBar
                    onchange={handleChange}
                    onCategoryChange={(category) => dispatch(setSelectedCategory(category))}
                    onClear={handleClearFilters}
                />
                <div className="home-button-container">
                    <a href="#" className='home-shop-button'>
                        Shop Now
                    </a>
                    <button className='deals-button'>Today's Deal</button>
                </div>

            </div>

        </div>
    );
};

export default Hero;