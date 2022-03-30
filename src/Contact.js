import React from 'react';
function Contact(){
        return(
            <div className='d-flex'>
            <div className="w-50 m-3 p-3 rounded border border-5 border-dark">
                <h1><center>Contact Us</center></h1> 
                <form className='row'>             
                <div className='col-6'>
                    <label>First Name </label>
                    <input className='form-control' type = "text"></input>
                </div>
                <div className='col-6'>
                    <label>Last Name </label>
                    <input className='form-control' type = "text"></input>
                </div>            
                <div className='col-6'>
                    <label>Email </label>
                    <input className='form-control' type = "email"></input>
                </div>
                <div className='col-6'>
                    <label>Business Phone </label>
                    <input className='form-control' type = "number"></input>
                </div>               
                <div className='col-6'>
                    <label>Company Name </label>
                    <input  className='form-control'type = "text"></input>
                </div>
                <div className='col-6'>
                    <label>Job Title </label>
                    <input className='form-control' type = "text"></input>
                </div>          
                <div className='col-12'>
                    <label>Street1</label>
                    <input className='form-control' type = "text"></input>
                </div>                
                <div className='col-6'>
                    <label>City </label>
                    <input className='form-control' type = "text"></input>
                    </div>
                <div className='col-6'>
                    <label>State/Province </label>
                    <input className='form-control' type = "text"></input>
                    </div>               
                <div className='col-6'>
                    <label>ZIP/Poastal code </label>
                    <input className='form-control' type = "number"></input>
                </div>
                <div className='col-6'>
                    <label>Country/Region </label>
                    <input className='form-control' type = "text"></input>
                </div>             
                <div className='col-12'>
                    <label>Topic </label>
                    <input className='form-control' type = "text"></input>
                </div>
                </form>
                </div>
                </div>
        )
    }

export default Contact;