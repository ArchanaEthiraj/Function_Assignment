import React, { useState } from "react";

function Count(){
    const[count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <h2>Count: {count}</h2>
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-warning" onClick={handleDecrement}>Decrement</button>
        </div>

    )
}

export default Count