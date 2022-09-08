import React, { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import Increment from '../Increment/Increment';

export default function CreateForm() {
    const [owner, setOwner] = useState('');
    const [selectedOwner, setSelectedOwner] = useState('');

    const [owners, setOwners] = useState([{}]);

    const handleChange = (e) => {
        const newInput = e.target.value;
        setOwner(current => ({ ...current, address: newInput }));
    }
    console.log(owner)

    const addOwner = (e) => {
        e.preventDefault()
        console.log('Before add:', owners)
        console.log('Adding member')
        console.log('After add:', owners)
        // setOwners(owners.concat(owner))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        console.log(data.getAll())
        console.log('Creating Multi-Sig!')
        // setOwners(prev => ({ ...prev, owners }))
        // console.log(owners)
    }

    // ✅ Add an object to a state array
    const addObjectToArray = obj => {
        setOwners(current => [...current, obj]);
    };

    // ✅ Update one or more objects in a state array
    const updateObjectInArray = () => {
        setOwners(current =>
            current.map(obj => {
                if (obj.id === 2) {
                    return { ...obj, name: 'Sophia', country: 'Sweden' };
                }

                return obj;
            }),
        );
    };

    // ✅ Remove one or more objects from state array
    const removeObjectFromArray = () => {
        setOwners(current =>
            current.filter(obj => {
                return obj.id !== 2;
            }),
        );
    };

    useEffect(() => {
    }, [])

    return (
        <div className='flex flex-col w-full h-full'>
            <section className="dark:text-gray-100 h-full">
                <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <div className='flex flex-col w-full items-center space-y-4 '>
                        <h1 className='text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-lime-400 to-yellow-300 animate-slow-fade-in-up uppercase tracking-tighter'>Create
                        </h1>
                        <div className='border-b border-lime-400/40 flex w-5/6' />
                        <div className='flex flex-col justify-start w-5/6 p-1 text-stone-900 bg-stone-300/20 rounded-lg px-2 overflow-auto pb-2'>
                            {owners.map((owner, i) => (
                                // <p className='flex w-full'>Address 1: {owner}</p>
                                <div className='flex flex-col w-full'>
                                    <p className=''>{owner.address}</p>
                                    {/* <p className=''>0x<strong>5f</strong>bd<strong>b2</strong>31<strong>56</strong>78<strong>af</strong>ec<strong>b3</strong>67<strong>f0</strong>32<strong>d9</strong>3f<strong>64</strong>2f<strong>64</strong>18<strong>0a</strong>a3</p> */}
                                    <div className='border-b flex w-screen' />
                                </div>
                            ))}
                        </div>
                        <form className='flex flex-col space-y-4 items-center w-full'>
                            <div className="flex flex-col space-y-2 items-center h-full w-full justify-center">
                                {owners.map((owner, i) => (
                                    <input key={i} name='address' type='text' className='p-1 py-4 flex w-5/6 md:w-full text-center rounded-md focus:outline-lime-400 text-slate-900 border' placeholder={`Enter approved wallet address: ${i + 1}`}
                                        onChange={(e) => {
                                            handleChange(e)
                                        }} />))
                                }
                            </div>

                            <div className='flex items-center justify-center'>
                                <button className='flex p-[1.62px] px-1 items-center space-x-2 rounded-sm bg-lime-300 dark:bg-lime-900 dark:hover:bg-lime-800 border-lime-500/40 border-[1.62px] dark:border-lime-600 dark:hover:border-lime-300 dark:text-stone-50 focus:ring-offset-1 focus:ring-1 focus:ring-lime-400 focus:outline-none focus:outline-lime-200 text-green-900 mb-40'
                                    onClick={addOwner}>
                                    <p className='font-medium text-sm'>Add Member</p>
                                    <FaUserPlus />
                                </button>
                            </div>
                        </form>

                    </div>
                </div >
            </section >
            <div className='flex fixed bottom-0 bg-lime-50/40 dark:bg-green-900 w-full items-center border-t border-lime-400/20'>
                <div className='flex w-full h-full justify-between items-center p-2'>
                    <div className='flex w-1/3 items-center justify-center h-full'>
                        <Increment ownerCount={owners.length} />
                    </div>
                    <div className='flex w-2/ h-full justify-center items-center'>
                        <button className="flex p-2 text-md font-semibold rounded bg-lime-400/90 dark:text-gray-900 focus:ring-offset-1 focus:ring-1 focus:ring-lime-400 focus:outline-none focus:outline-lime-200"
                            onClick={handleSubmit}>
                            Create {owners.length}-Way MultiSig
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
