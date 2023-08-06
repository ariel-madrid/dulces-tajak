import React, { useState } from "react";

import ProductItem from "../components/ProductItem";
const ProductList = (props) =>
{
    const [listOfProductsCuchufli, setListOfProductsCuchufli] = useState(
        [{id:1, titulo:"Caja 35 unidades cuchufli", prop1:"Rellenos de manjar", prop2:"Bañados en chocolate blanco",prop3:"Entrega a domicilio", ima:"/public/assets/cuch-rosado.png"},
         {id:3, titulo:"Caja 35 unidades cuchufli", prop1:"Rellenos de manjar", prop2:"Chocolate blanco y negro con rayas",prop3:"Entrega a domicilio", ima:"/public/assets/banados.png"},
         {id:4, titulo:"Caja 35 unidades cuchufli", prop1:"Rellenos de manjar", prop2:"Manjar sin azucar",prop3:"Entrega a domicilio", ima:"/public/assets/normal-sin-azucar.png"},
         {id:5, titulo:"Caja 40 unidades cuchufli", prop1:"Rellenos de manjar", prop2:"Bañados en chocolate negro",prop3:"Entrega a domicilio", ima:"/public/assets/cuch-choc.png"}])
    
    const [listOfProductsAlfajor, setListOfProductsAlfajor] = useState(
        [{id:1, titulo:"Caja 15 unidades alfajor", prop1:"Contienen nueces y almendras", prop2:"2 capas",prop3:"Entrega a domicilio", ima:"/public/assets/alfajores.png"},]
    )

    const [listOfProductsMermelada, setListOfProductsMermelada] = useState(
        [{id:1, titulo:"Mermelada Frutilla 200 ml", prop1:"Artesanal", prop2:"Con azucar",prop3:"Entrega a domicilio"},
        {id:2, titulo:"Mermelada Durazno 400 ml", prop1:"Artesanal", prop2:"Con azucar",prop3:"Entrega a domicilio"},
        {id:3, titulo:"Mermelada Sandia 200 ml", prop1:"Artesanal", prop2:"Sin azucar",prop3:"Entrega a domicilio"}]
    )
    
    const handleDataToShow = () =>
    {
        alert(props.dataToSend)
    }

    const productsCuchufli = listOfProductsCuchufli.map(prod => <ProductItem data={prod}/>)
    const productsAlfajor = listOfProductsAlfajor.map(prod => <ProductItem data={prod}/>)
    const productsMermelada = listOfProductsMermelada.map(prod => <ProductItem data={prod}/>)

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-4 items-center justify-center w-screen">
            {props.dataToSend === "cuchufli" ? productsCuchufli:null}
            {props.dataToSend === "alfajor" ? productsAlfajor:null}
            {props.dataToSend === "mermelada" ? productsMermelada:null}
        </div>
            
    )
}

export default ProductList;