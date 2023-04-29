import React, { useState } from "react";
import Information from "../components/Information";
import Products from "../components/Products";
import ProductList from "../components/ProductList";
const HomePage = () => 
{
    const [data,setData] = useState('')
    const Callback=(product)=>{
        setData(product)
    }
    return (
        <div className="flex flex-col items-center w-screen ml-4 mr-4 h-screen">
            <Products handleCallback={Callback}/>
            <ProductList dataToSend={data}/>
        </div>
    )
}

export default HomePage;