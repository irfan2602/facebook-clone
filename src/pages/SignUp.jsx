import { TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import './signup.css'
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';

const SignUp = () => {
  const [userValue,setUserValue] = useState({
    name:"",email:"",mobile:"",password: "",cpassword:""
  })
  
  let name,value
  const userInput = (e) => {
    // console.log(e)
    name = e.target.name
    value = e.target.value
    setUserValue({...userValue, [name]:value})
  }

  const onRegisterClick = () =>{
    console.log({...userValue})
  }

  return (
    <div className='container'>
      <div className='left_side'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='col-md-12'>

            </div>
          </div>
        </div>
      </div>
      <div className='right_side'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='col-md-12'>
              <Typography variant='h5'>
                Please Register
              </Typography>
            </div>
            <div className='col-md-12' htmlFor="Name">
              <TextField variant='standard' name='name' value={userValue.name} onChange={userInput} label="Name" required />
            </div>
            <div className='col-md-12' htmlFor="Email">
              <TextField variant='standard' label="Email" value={userValue.email} name='email' onChange={userInput} type="email" required />
            </div>
            <div className='col-md-12' htmlFor="Mobile">
              <TextField variant='standard' label="Mobile" value={userValue.mobile} name='mobile' onChange={userInput} type="number" required />
            </div>
            <div className='col-md-12' htmlFor="Password">
              <TextField variant='standard' label="Password" value={userValue.password} name='password' onChange={userInput} type="password" required />
            </div>
            <div className='col-md-12' htmlFor="CnfPassword">
              <TextField variant='standard' label="Confirm Password" value={userValue.cpassword} name='cpassword' onChange={userInput} type="password" required />
            </div>
            <div className='col-md-12' htmlFor="RegisterBtn" id='registerBtn' >
              <Button variant='contained' onClick={onRegisterClick}>Register</Button>
            </div>
            <div className='col-md-12' id="alreadyRegisterLink" >
              <a href='#' id='alreadyRegisterLink'>Already Register,Please Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp