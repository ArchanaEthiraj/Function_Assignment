import React, { useState } from "react";

function Student(){
    const[name, setName]=useState("Archana")
    const[age, setAge]=useState(21)
    return(
         <div>
             <h2>Name: <span className="text-danger"><u>{name}</u></span></h2>
             <h2>Age: <span className="text-primary">{age}</span></h2>
         </div>
    )
}

export default Student