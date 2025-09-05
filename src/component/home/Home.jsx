import React, {useState} from 'react';
import Hero from "../hero/Hero.jsx";
import Paginator from "../commom/Paginator.jsx";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
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
        <div>
            <Hero/>

            <Card className='home-product-card'>
                <Link to={"#"}>Product image will be were...</Link>
                <Card.Body>
                    <p className="product-description">
                        product name and description will be were...
                    </p>
                    <h4 className='price'>product price</h4>
                    <p className='text-success'>Product inventory in stock.</p>
                    <Link to={"#"} className='shop-now-button'>
                        {" "}
                        Shop now
                    </Link>
                </Card.Body>
            </Card>
            <Paginator
                itemsPerPage={itemsPerPage}
                totalItems={filteredProducts.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
};

export default Home;