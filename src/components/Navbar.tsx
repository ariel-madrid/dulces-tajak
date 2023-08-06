import React from 'react'
import logo from '/public/assets/TAJAK.svg'
import { Link } from 'react-router-dom'
const Navbar = () => 
{
    return (
        <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        
        <h1 className="w-3/12 font-bold text-2xl">
            <a href="#/inicio">
              <img className='h-24 w-24 m-2' src={logo}/>
            </a>
        </h1>

        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
                <li className="ml-6 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                  <Link to="inicio"><a>Inicio</a></Link>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                  <Link to="productos"><a>Productos</a></Link>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                  <Link to="contacto"><a>Contacto</a></Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar;