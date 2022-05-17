import React, { useState } from "react";

const Counter = () => {
    const [count,setCount]=useState(0)

    const Increment=()=>{
        setCount(count+1)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h1 style={{color:count%2===0? "green":"red"}}>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}
export default Counter;