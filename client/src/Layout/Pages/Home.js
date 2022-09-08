import React from 'react'
import ill from '../../assets/images/home.svg'
import vault from '../../assets/images/vault.svg'
function Home() {
    return (
        <div>
            <section className="dark:text-gray-100">
                <div className="container mx-auto flex flex-col justify-center items-center px-4 py-16 text-center md:py-32 md:px-8 lg:px-4 xl:max-w-3xl">
                    <div className='flex flex-col items-center justify-between h-full space-y-16'>
                        <h1 className="text-3xl w-5/6 md:w-full md:text-5xl text-stone-900 dark:text-stone-50 font-bold leading-none animate-fade-in-up">An All-In-One Blockchain Utility Platform
                        </h1>
                        <p className="px-16 mt-8 mb-12 text-sm leading-4">Create multi-signature contracts, stake your crypto, browse NFT collections.</p>
                        <div className="flex flex-wrap justify-center">
                            <button className="flex space-x-2 items-center px-8 py-3 m-2 text-lg border bg-stone-200/60 rounded text-stone-900 dark:text-gray-50 hover:opacity-75 dark:border-green-700/80 focus:ring-offset-1  focus:outline-none focus:outline-green-500">
                                <p>Ethereum</p>
                                <div className='bg-slate-600 text-stone-50 rounded-full flex h-4 w-4 justify-center items-center font-bold text-xs'>i</div>
                            </button>
                        </div>
                        {/* <img src={ill} className='w-2/3' alt='' /> */}
                        <img src={vault} className='w-2/3' alt='' />
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Home