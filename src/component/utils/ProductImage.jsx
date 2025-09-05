import React, {useEffect, useState} from 'react';

const ProductImage = ({productId}) => {
    const [productImg, setProductImg] = useState(null)


    useEffect(() => {
        const fetchProductImage = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:9090/api/v1/images/download/${id}`
            );
            const blob = await response.blob();
            const render = new FileReader();
            render.onloadend = () => {
                setProductImg(render.result);
            };
            render.readAsDataURL(blob);
        }catch (error){
            console.error("Error fetching image", error);
        }
    };
        if(productId) {
            fetchProductImage(productId);
        }
    },[productId]);
    if(!productImg) return null;
    return (
        <div>
            <img src={productImg} alt='Product Image' />
        </div>
    );
};

export default ProductImage;