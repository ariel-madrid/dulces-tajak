import React from 'react'
import logo from '../assets/TAJAK.svg'

const Navbar = () => 
{
    return (
        <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        
        <h1 className="w-3/12 font-bold text-2xl">
            <a href="">
              <img className='h-20 w-20 m-2' src={logo}/>
            </a>
        </h1>

        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
                <li className="ml-6 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                  <a href="">Inicio</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                  <a href="">Productos</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                  <a href="">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar;