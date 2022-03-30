import React, {useState} from "react";

function Hide(){
    const[name, setName]=useState('Welcome')
    const handleHide=()=>{
        if(name === 'Welcome')
        setName('Hello World!')
        else
        setName('Welcome')
    }
    return(
        <div>
            {name}<br/>
            <button className="btn btn-warning" onClick={handleHide}>Change</button>
        </div>
    )
}

export default Hide