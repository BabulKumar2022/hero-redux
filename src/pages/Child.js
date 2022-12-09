import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';


const Child = () => {
    const {count, setCount} = useContext(COUNTER_CONTEXT)

    return (
        <div className='w-full max-w-xl  bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md'>
            <div className='bg-white rounded-md p-10'>
                <h1 className='text-center text-gray-400'>Child</h1>
                <h1 className=' mb-5 text-center text-2xl'>{count}</h1>
                <div className="flex justify-center gap-5">
                    <button onClick={()=>setCount(count-1)} className='px-3 py-2  bg-purple-200 rounded-lg'> Decrease</button>
                    <button onClick={()=> setCount((prState)=>prState+1)} className='px-3 py-2  bg-cyan-200 rounded-lg'>Increase</button>
                </div>
                
            </div>
        </div>
    );
};

export default Child;