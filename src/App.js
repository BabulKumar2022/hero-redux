// import { createContext, useState } from 'react';
// import Child from './pages/Child';
// import Counter from './pages/Counter';
// import Parent from './pages/Parent';
// import ShortForm from './pages/ShortForm';

import LongForm from "./pages/LongForm";



// export const COUNTER_CONTEXT =  createContext();

function App() {
  // const [count, setCount] = useState(0);

  // const value = {count, setCount}
  return (
    // <COUNTER_CONTEXT.Provider value={value}>
    // <div  className='h-screen items-center justify-center flex '>
    //   {/* <ShortForm></ShortForm> */}
    //   {/* <Child></Child> */}
    //   {/* <Parent></Parent> */}
    //   <Counter></Counter>
    // </div>
    // </COUNTER_CONTEXT.Provider>

<div  className='h-screen items-center justify-center flex '>
{/* <ShortForm></ShortForm> */}
{/* <Child></Child> */}
{/* <Parent></Parent> */}
{/* <Counter></Counter> */}
<LongForm></LongForm>
</div>

  );
}

export default App;
