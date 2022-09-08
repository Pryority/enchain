import React from 'react'
import { FaSignature, FaFileContract, FaGlobe, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MultiSign() {
    return (
        <div>
            <section className="dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-8 lg:px-4 xl:max-w-3xl">
                    <h1 className="text-3xl w-5/6 md:w-full md:text-5xl text-stone-900 dark:text-stone-50 font-bold leading-none animate-fade-in-up">A <a className='bg-gradient-to-r from-lime-400 via-teal-500 to-green-500 bg-[length:100%_6px] bg-no-repeat bg-bottom hover:text-stone-900/80 cursor-pointer'>Multi-Sign</a> wallet is a smart contract that requires multiple signatures to approve transactions.
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Create a <strong>Multi-Sign</strong> for your family or business to share.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/create' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-lime-400 border-2 hover:opacity-75 dark:bg-lime-400 dark:text-gray-900 focus:ring-offset-1  focus:outline-none focus:outline-lime-200">Get started</Link>
                        <button className="px-8 py-3 m-2 text-lg border bg-stone-200/60 rounded text-stone-900 dark:text-gray-50 hover:opacity-75 dark:border-green-700/80 focus:ring-offset-1  focus:outline-none focus:outline-green-500">Learn more</button>
                    </div>
                </div>
            </section >
            <section className="dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <div className='flex flex-col w-4/5 md:w-full items-center space-y-16 py-16 dark:bg-green-900 bg-gradient-to-br from-lime-500/90 via-lime-600/00 to-lime-400/90 p-4 rounded-lg text-stone-50 dark:text-stone-900 animate-slow-fade-in-up'>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaGlobe fontSize={'144px'} className='mb-4' />
                            <h1 className="text-3xl font-bold leading-none sm:text-5xl">1. Connect to Enchain.
                            </h1>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaWallet fontSize={'144px'} className='mb-4' />
                            <h1 className="text-3xl font-bold leading-none sm:text-5xl">2. Create at least 2 Ethereum wallets.
                            </h1>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaSignature fontSize={'144px'} />
                            <h1 className="text-3xl font-bold leading-none sm:text-5xl">3. Select the signers for each transaction.
                            </h1>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaFileContract fontSize={'144px'} className='mb-4' />
                            <h1 className="text-3xl font-bold leading-none sm:text-5xl">4. Deploy Multi-Sig.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
