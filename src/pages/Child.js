import React, { useState } from 'react';

const Child = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='container  justify-center items-center  flex'>
            <div className=' mt-52 rounded-lg bg-slate-300 w-64 h-64 border-solid border-black border-2 text-center '>
                <h1 className='mb-8 mt-10 text-2xl'>{count}</h1>
                <div className="d-flex">
                    <button onClick={()=>setCount(count-1)} className='mx-6 p-2  bg-lime-300 rounded-lg'> Decrease</button>
                    <button onClick={()=> setCount((prState)=>prState+1)} className='mx-6 p-2   bg-emerald-100 rounded-lg'>Increase</button>
                </div>
                
            </div>
        </div>
    );
};

export default Child;