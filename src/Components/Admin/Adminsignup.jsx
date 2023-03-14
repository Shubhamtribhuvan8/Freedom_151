import React, { useContext } from 'react'
import { useState } from 'react';
import { Button, Input } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import context from '../MyContext/Context';
export default function AdminLogin() {
const [email, setemail] = useState('');
const [password, setpassword] = useState('');

  const handleNameChange = (event) => {
    setemail(event.target.value);
  };
const { isLoggedIn, setIsLoggedIn }= useContext(context);

  const handleAgeChange = (event) => {
    setpassword(event.target.value);
  };
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
          const data = {
            email: email,
            password:password,
          };
          try {
            let beta=await axios.post('https://reqres.in/api/login', data);
            setIsLoggedIn(true);
            toast.success("successfully Login!")
            const successs = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
            successs.play();
            setTimeout(() => {
              navigate('/data');
            }, 3000);
           } catch (error) {
            toast.error("Wrong Credentials!");
            const warningSound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a');
            warningSound.play();
          }
        }
        const commonStyles = {
          bgcolor: 'background.paper',
          // m: 1,
          margin: "auto",
          top:1,
          borderColor: 'text.primary',
          width: '29rem',
          height: '17rem',
        };
  return (
    <div>
      <ToastContainer/>
      <h1>Login Admin</h1>
      <Box sx={{ ...commonStyles, border: 1 }}>
        <br/>
      <form onSubmit={handleSubmit}>
        <TextField required type="text" value={email} onChange={handleNameChange} placeholder="Name/Email(eve.holt@reqres.in)" />
      <br /> <br /> 
        <TextField required  type="text" value={password} onChange={handleAgeChange} placeholder="Password" />
      <br /> <br />  
      <Button variant="outlined" type="submit"> Login</Button>
     </form>
       </Box>
    </div>
  )
}
