import React, { useState } from 'react';

const ShortForm = () => {


    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const submit =(event) =>{
        event.preventDefault();
        const data={
            firstName,
            lastName,
            email,
            password
        };
        console.log(data);
    }

    return (
        <div className='w-full max-w-xl  bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md'>
            <div className='bg-white rounded-md p-10'>
                <h1 className='text-center text-gray-400'>Short Form</h1>
                <form className='' onSubmit={submit}>
                    <div className="flex flex-col max-w-xs">
                        <label htmlFor='name'>First Name </label>
                        <input 
                        type="text" 
                        name='name' 
                        id='name'
                        onBlur={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="flex flex-col max-w-xs">
                        <label htmlFor='name'>Last Name </label>
                        <input 
                        type="text" 
                        name='name' 
                        id='name'
                        onBlur={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="flex flex-col max-w-xs">
                        <label htmlFor='name'>Email </label>
                        <input 
                        type="email" 
                        name='name' 
                        id='name'
                        onBlur={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col max-w-xs">
                        <label htmlFor='name'>Password </label>
                        <input 
                        type="password" 
                        name='name' 
                        id='name'
                        onBlur={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="flex  py-2 gap-5">
                        <button type='submit'  className='px-3 py-2  bg-purple-200 rounded-lg'> Submit</button>
                    
                    </div>
                </form>

                
            </div>
        </div>
    );
};

export default ShortForm;