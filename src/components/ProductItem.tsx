import React from "react";

const ProductItem = (props) => 
{
    const item = props.data
    return (
        <div className="h-auto w-full bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
            <div className="max-w-sm border-2 border-gray-200 px-6 pt-6 pb-2 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">Producto con azúcar</h3>
                <div className="relative">
                    <img className="w-full rounded-xl" src="https://endulzatuvida.cl/wp-content/uploads/2020/08/12.Cuchufli-x90.png" alt="Colors" />
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{item.titulo}</h1>
                <div className="my-4">
                    <div className="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-indigo-600 mb-1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <p>{item.prop1}</p>
                    </div>
                <div className="flex space-x-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-indigo-600 mb-1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <p>{item.prop2}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-indigo-600 mb-1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </span>
                    <p>{item.prop3}</p>
                </div>
                    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;