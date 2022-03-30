import React from "react";

function Register(){
    return(
        <div className="d-flex">
            <div className="w-50 m-3 p-3 bg-dark rounded border border-5 border-dark">
              <h1 className="text-light"><center>Register new Account</center></h1>
              <form className="row">
                <div className="col-6 mt-1">
                    <input type="text" className="form-control" placeholder="First Name"></input></div>
                <div className="col-6 mt-1">
                    <input type="text" className="form-control" placeholder="Last Name"></input></div>
                <div className='col-12 mt-4'>
                    <input type="text" className="form-control" placeholder="Name"></input></div>
                <div className='col-12 mt-4'>
                    <input type="text" className="form-control" placeholder="City"></input></div>
                <div className='col-12 mt-4'>
                    <input type="text" className="form-control" placeholder="Phone Number"></input></div>
                <div className='col-12 mt-4'>
                    <input type="email" className="form-control" placeholder="Email"></input></div>
                <div className=" justify-content-md-end">
                    <center><button className='btn btn-success me-md-2 mt-3' onClick="submit">Create Account</button></center></div>
                </form>
                </div>
        </div>
    )
}

export default Register