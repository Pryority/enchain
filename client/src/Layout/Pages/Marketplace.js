import React from 'react'

export default function Marketplace() {
    return (
        <div>
            <section className="dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-8 lg:px-0 xl:max-w-3xl">
                    <h1 className="text-3xl w-5/6 md:w-full md:text-5xl text-stone-900 dark:text-stone-50 font-bold leading-none animate-fade-in-up">An NFT <a className='bg-gradient-to-r from-lime-400 via-teal-500 to-green-500 bg-[length:100%_6px] bg-no-repeat bg-bottom hover:text-stone-900/80 cursor-pointer'>Marketplace</a> is a blockchain-based online platform to sell and buy <strong>non-fungible tokens</strong> (<strong>NFTs</strong>)
                    </h1>
                    <div className="flex flex-col justify-center mt-8 space-y-8 items-center">
                        <p className='mt-32 font-bold text-4xl text-lime-500 animate-pulse uppercase'>Coming soon</p>
                        <div to='/create' className="px-8 py-3 w-2/3 m-2 text-lg font-semibold rounded bg-lime-400 border-2 cursor-not-allowed dark:bg-lime-400 dark:text-gray-900 focus:ring-offset-1  focus:outline-none focus:outline-lime-200 opacity-25">Join Waitlist</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
