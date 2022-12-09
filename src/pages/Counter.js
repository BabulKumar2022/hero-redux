import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) =>{
        console.log(action)
        if(action.type === "INCREMENT"){
            return  state + action.payload;
        }else if(action.type === "DECREMENT"){
            return state - action.payload;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='w-full max-w-xl  bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md'>
            <div className='bg-white rounded-md p-10'>
                <h1 className='text-center text-gray-400'>Counter</h1>
                <h1 className=' mb-5 text-center text-2xl'>{state}</h1>
                <div className="flex justify-center gap-5">
                    <button onClick={()=>dispatch({type: "DECREMENT", payload: 5})} className='px-3 py-2  bg-purple-200 rounded-lg'> Decrease</button>
                    <button onClick={()=> dispatch({type:"INCREMENT", payload: 5})} className='px-3 py-2  bg-cyan-200 rounded-lg'>Increase</button>
                </div>
                
            </div>
        </div>
    );
};

export default Counter;