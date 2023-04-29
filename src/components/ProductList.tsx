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
        <div className="grid grid-cols-4 items-center justify-center w-screen overflow-y-scroll">
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