import React, { useState } from "react";

function Vote(props){
    const[count, setCount]=useState(0)
    const handleCount=()=>{
        setCount(count+1)
    }
    return(
        <div>
            {props.subject}<span>{count}</span>
            <button className="btn btn-primary" onClick={handleCount}>Vote</button>
        </div>
    )
}

export default Vote