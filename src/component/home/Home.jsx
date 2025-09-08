import React, {useEffect, useState} from 'react';
import Hero from "../hero/Hero.jsx";
import Paginator from "../commom/Paginator.jsx";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductImage from "../utils/ProductImage.jsx";
import {getDistinctProductByName} from "../services/ProductService.js";
import {toast, ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);
    const {searchQuery, selectedCategory} = useSelector((state) => state.search)


    const [currentPage, setCurrentPage] = useState([]);
    const itemsPerPage = 10;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await  getDistinctProductByName();
                setProducts(response.data);

            }catch (error){
                setErrorMessage(error.message)
                toast.error(errorMessage)
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        const results = products.filter((product) =>{
            const matchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "all" ||
                product.category.name.toLowerCase().includes(selectedCategory.toLowerCase())
            return matchQuery && matchesCategory;
        })
        setFilteredProducts(results);
    }, [searchQuery, selectedCategory, products]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastProduct = currentPage + itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    return (
        <>
            <Hero/>
            <div className='d-flex flex-wrap justify-content-center p-5'>
                <ToastContainer/>
                {currentProducts &&
                    currentProducts.map((product) => (
                    <Card key={product.id} className='home-product-card'>
                        <Link to={"#"} className='link'>
                            <div className='image-container'>
                                {product.images.length > 0 && (
                                    <ProductImage productId={product.images[0].id}/>
                                )}
                            </div>
                        </Link>
                            <Card.Body>
                                <p className="product-description">
                                    {product.name} - {product.description}
                                </p>
                                <h4 className='price'>{product.price}</h4>
                                <p className='text-success'>{product.inventory} in stock.</p>
                                <Link to={`/products/${product.name}`} className='shop-now-button'>
                                    {" "}
                                    Shop now
                                </Link>
                            </Card.Body>
                        </Card>
                ))}

                        <Paginator
                            itemsPerPage={itemsPerPage}
                            totalItems={filteredProducts.length}
                            currentPage={currentPage}
                            paginate={paginate}
                        />

            </div>
        </>
    );
};

export default Home;