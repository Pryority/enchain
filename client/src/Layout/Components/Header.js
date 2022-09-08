import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <nav className="flex w-full fixed bg-stone-50 px-2 sm:px-4 py-2.5 dark:bg-green-900 border-b border-lime-400 shadow-md z-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center space-x-1">
                    <FaLink className='text-lime-500 dark:text-white md:text-2xl lg:text-3xl text-xl' />
                    <span className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-lime-500 to-teal-500 dark:from-lime-400 dark:to-yellow-300'>Enchain</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 bg-gradient-radial text-sm from-teal-300 to-lime-400 hover:bg-lime-300 text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-500/50" aria-expanded="false"
                    onClick={() => setShow(!show)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="dark:#ebffde" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill='#12b551' fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-green-900 dark:border-green-700">
                        <Link to='/'>
                            <div className="block py-2 pr-4 pl-3 text-white bg-green-600 md:text-lg rounded md:bg-transparent md:text-green-600 md:p-0 dark:text-white" aria-current="page">Home</div>
                        </Link>
                        <Link to='/market'>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Marketplace</div>
                        </Link>
                        <Link to='/multi-sign'>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Multi-Sign</div>
                        </Link>
                        <Link to='/staking'>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Staking</div>
                        </Link>
                        <Link to='/about'>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</div>
                        </Link>
                        <Link to='/contact'>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</div>
                        </Link>
                    </ul>
                </div>
                {show && (<div className=" w-full md:block md:w-auto z-100">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-green-900 dark:border-green-700">
                        <Link to='/'
                            onClick={() => setShow(!show)}>
                            <div className="block py-2 pr-4 pl-3 text-white bg-green-600 md:text-lg rounded md:bg-transparent md:text-green-600 md:p-0 dark:text-white" aria-current="page">Home</div>
                        </Link>
                        <Link to='/market'
                            onClick={() => setShow(!show)}>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Marketplace</div>
                        </Link>
                        <Link to='/multi-sign'
                            onClick={() => setShow(!show)}>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Multi-Sign</div>
                        </Link>
                        <Link to='/staking'
                            onClick={() => setShow(!show)}>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Staking</div>
                        </Link>
                        <Link to='/about'
                            onClick={() => setShow(!show)}>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</div>
                        </Link>
                        <Link to='/contact'
                            onClick={() => setShow(!show)}>
                            <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:text-lg md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</div>
                        </Link>
                    </ul>
                </div>)}

            </div>
        </nav>
    )
}
