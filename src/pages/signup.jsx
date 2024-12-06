import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [userDetails,setUserDetails] = useState({email:"",password:"",confirmPassword:""});
  const [Error,setError]= useState({emailError:"",passwordError:"",confirmPasswordError:""});
  console.log(userDetails.email)
  // handle input values 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit=()=>{

  }
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className='signup-header'>
          <img  src='/Expense_logo.jpg'></img>
          <p><span style={{color:'orange'}}>E</span><span style={{color:'SlateBlue'}}>xpense</span> <span style={{color:'orange'}}>Record</span></p>
        </div>
        <h1>Sign Up</h1>
        <div className='signup-input'>
          
          {
            Error.emailError.length>0?  
            <TextField
            error
            id="outlined-error-helper-text"
            label="Email"
            name='email'
            value={userDetails.email}
            onChange={handleChange}
            helperText="Incorrect entry."
          /> :
          <TextField
           id="outlined"
           label="Email"
           name='email'
           value={userDetails.email}
           onChange={handleChange}
          />
          }
          {
            Error.passwordError.length>0?
            <TextField
            error
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            name='password'
            value={userDetails.password}
            onChange={handleChange}
            autoComplete="current-password"
            helperText="Incorrect entry."
            />:
            <TextField
             id="outlined-password-input"
             label="Password"
             type="password"
             name='password'
             value={userDetails.password}
             onChange={handleChange}
             autoComplete="current-password"
            />
          }
          {
            Error.confirmPasswordError.length>0?
            <TextField
            error
            id="outlined-error-helper-text"
            label="Confirm Password"
            type="password"
            name='confirmPassword'
            value={userDetails.confirmPassword}
            onChange={handleChange}
            autoComplete="current-password"
            helperText="Incorrect entry."
            />:
            <TextField
             id="outlined-password-input"
             label="ConfirmPassword"
             type="password"
             name='confirm Password'
             value={userDetails.confirmPassword}
             onChange={handleChange}
             autoComplete="current-password"
            />
          }
          <Button variant="contained" type='submit'>SIGN UP</Button>
          
        </div>
        <p style={{textAlign:'center'}}>--- or signup with ---</p>
        <Button variant="outlined"><img style={{width:'25px',height:'25px',margin:"3px"}} src='google_logo.png'/>SIGN UP WITH GOOGLE</Button>
        <p>Already have an Account? Sign in </p>
      </form>
    </FormContainer>
  )
}

const FormContainer=styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .signup-header{
    display:flex;
    
    align-items:center;
    gap:0.5em;
    img{
    height:2rem;
    width:2rem;
    border-radius:8px;
    }
    p{
      font-height:3rem;
      font-weight:500;
      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); 
    }
  }
  .signup-input{
    display:flex;
    flex-direction:column;
    gap:1.5rem
  }

`

export default SignUp