import React from 'react'
import Header from './Components/Header'
import MultiSign from './Pages/MultiSign'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CreateForm from './Components/MultiSign/CreateForm';
import Staking from './Pages/Staking';
import Home from './Pages/Home';
import Marketplace from './Pages/Marketplace';

export default function Main() {
    return (
        <Router>
            <div className="flex flex-col w-full dark:bg-green-800 h-screen">
                <Header />
                <div className='flex flex-col items-center justify-start w-full h-screen overflow-y-scroll no-scrollbar mt-16'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/market' element={<Marketplace />} />
                        <Route path='/multi-sign' element={<MultiSign />} />
                        <Route path='/create' element={<CreateForm />} />
                        <Route path='/staking' element={<Staking />} />
                    </Routes>
                </div >
            </div>
        </Router>
    )
}
