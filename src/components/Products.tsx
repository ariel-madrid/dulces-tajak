import React, { useState } from "react";


const Products = (props) =>
{
    const [product, setProduct] = useState('cuchufli')
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-4">
            <div className="flex flex-col gap-8 lg:flex lg:flex-row">
                <button onClick={() => {setProduct("cuchufli")}} className={product==="cuchufli" ? "flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-300 w-auto h-8 ":"flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-100 w-auto h-8 hover:bg-orange-200"}>
                    <h3 className="font-bold text-xl font-serif">Cuchuflis</h3>
                </button>
                <button onClick={() => {setProduct("alfajor")}} className={product==="alfajor" ? "flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-300 w-auto h-8 ":"flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-100 w-auto h-8 hover:bg-orange-200"}>
                    <h3 className="font-bold text-xl font-serif">Alfajores</h3>
                </button>
                {/**<button onClick={() => {setProduct("mermelada")}} className={product==="mermelada" ? "flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-300 w-auto h-8 ":"flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-100 w-auto h-8 hover:bg-orange-200"}>
                    <h3 className="font-bold text-xl font-serif">Mermeladas</h3>
                </button>**/}

                {/**<button onClick={() => {setProduct("paleta")}} className={product==="paleta" ? "flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-300 w-auto h-8 ":"flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-100 w-auto h-8 hover:bg-orange-200"}>
                    <h3 className="font-bold text-xl font-serif">Paletas</h3>
                </button>**/}

                <button onClick={() => {setProduct("otro")}} className={product==="otro" ? "flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-300 w-auto h-8 ":"flex flex-col items-center justify-center p-8 rounded-xl shadow-sm bg-orange-100 w-auto h-8 hover:bg-orange-200"}>
                    <h3 className="font-bold text-xl font-serif">Otros</h3>
                </button>
            </div>
            <div>{props.handleCallback(product)}</div>
        </div>        
    )
}

export default Products;