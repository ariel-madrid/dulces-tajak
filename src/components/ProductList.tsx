import React, { useState } from "react";

import ProductItem from "../components/ProductItem";
const ProductList = (props) =>
{
    const [listOfProducts, setListOfProducts] = useState([])
    
    const handleDataToShow = () =>
    {
        alert(props.dataToSend)
    }

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-4 items-center justify-center w-screen">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
            
    )
}

export default ProductList;