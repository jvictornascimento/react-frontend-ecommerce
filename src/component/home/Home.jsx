import React, {useState} from 'react';
import Hero from "../hero/Hero.jsx";
import Paginator from "../commom/Paginator.jsx";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductImage from "../utils/ProductImage.jsx";

const Home = () => {
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    const [currentPage, setCurrentPage] = useState([]);
    const itemsPerPage = 10;

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
                {product.map((product) => (
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