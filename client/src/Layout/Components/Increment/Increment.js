import React, { useEffect, useState } from 'react'

export default function Increment({ owners }) {

    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1) };
    const decrement = () => {
        if (count === 0)
            return;
        setCount(count - 1)
    };

    return (

        <div className='flex flex-col space-y-4'>
            <label htmlFor="custom-input-number" className="flex w-full justify-center text-gray-700 dark:text-stone-50 text-sm md:text-2xl font-semibold"># of Approvers
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    onClick={decrement}>
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input readOnly className="outline-none cursor-pointer focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-2xl flex items-center text-gray-700" name="custom-input-number" value={count}></input>
                <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    onClick={increment}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>

    )
}
