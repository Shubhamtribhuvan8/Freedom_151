import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 const UserSignup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [profession, setProfession] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
          const data = {
            Name: name,
            Age:age,
            Gender:gender,
            Country:country,
            Profession:profession,
          };
          try {
            await axios.post('https://freedom-151.onrender.com/posts', data);
            toast.success("successfully registered")
            const successs = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
            successs.play();
            setTimeout(() => {
              navigate('/admin');
            }, 3000);
          } catch (error) {
            toast.error(error);
          }
        }
        const commonStyles = {
          bgcolor: 'background.paper',
          // m: 1,
          margin: "auto",
          top:1,
          borderColor: 'text.primary',
          width: '29rem',
          height: '31rem',
        };
  return (
    <div>
      <ToastContainer/>
         <h1>Registration Form</h1>
      <Box sx={{ ...commonStyles, border: 1 }} >
        <br/> 
      <form onSubmit={handleSubmit}>
        <TextField required type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <br /> <br /> 
        <TextField required  type="number" value={age} onChange={handleAgeChange} placeholder="Age" />
      <br /> <br />  
      <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
      <InputLabel id="demo-select-small">Gender</InputLabel>
        <Select value={gender} onChange={handleGenderChange} placeholder="Gender" label="Gender" defaultValue='Gender'>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
        </FormControl>
        <br /> <br />
        <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
        <InputLabel id="demo-select-small">Select Country</InputLabel>
        <Select value={country} onChange={handleCountryChange} label="Select Country">
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </Select>
        </FormControl>
      <br /> <br /> 
      <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
      <InputLabel id="demo-select-small">Select Profession</InputLabel>
        <Select value={profession} onChange={handleProfessionChange} label="Select Profession">
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Employed">Employed</MenuItem>
        </Select>
        </FormControl>
      <br />  <br /> 
      <Button variant="outlined" type="submit"> Submit</Button>
     </form>
       </Box>
    </div>
  );
  };

export default UserSignup;

