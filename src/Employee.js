import React from "react";

function Employee(props){
    return(
        <div>
            Name: {props.Name}<br/>
            Salary: {props.salary}
        </div>
    )
}

export default Employee