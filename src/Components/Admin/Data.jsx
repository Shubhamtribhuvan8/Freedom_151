import React, { useEffect } from 'react'
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { Action } from '../Redux/Action';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch,useSelector } from 'react-redux';
import "../CSS/Data.css"
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
export default function Data() {
  const [age, setAge] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [name, setName] = useState('');
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const dispatch=useDispatch();
  const mrequest = async (url) => {
    try {
      let res = await axios.get(url);
      console.log(res);
      Action(dispatch,res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleFilter = (event) => {
    const selectedAge = event.target.value;
    setAge(selectedAge); 

    if (selectedAge === "Male" || selectedAge === "Female" || selectedAge === "Others") { 
      mrequest(`https://freedom-151.onrender.com/posts?Gender=${selectedAge}`);
    } else {
      console.log("Invalid age option selected");
    }
  };

  const HandleFilterCountry=(event)=>{
    const countryselect = event.target.value;
    setCountry(countryselect); 
    if (countryselect === "India" || countryselect === "UK" || countryselect === "USA" || countryselect === "Canada" || countryselect === "Australia") { 
      mrequest(`https://freedom-151.onrender.com/posts?Country=${countryselect}`);
    } else {
      console.log("Invalid age option selected");
    }
  }

  const handleSearch = (event) => {
    const query = event.target.value;
    console.log(query)
    setName(query);
    searchName(query);
  }

  const searchName = (query) => {
    mrequest(`https://freedom-151.onrender.com/posts?Name=${query}`)
  }

  let data = useSelector((store)=>{
    return store.products;
  })

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  const handleKeyDown = (event) => {
    const printable = /[A-Za-z0-9-_ ]/;
    if (!printable.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Search>
        <SearchIconWrapper>
          <SearchRoundedIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…By Using Whole Name"
          value={name}
          type="text"
          onChange={handleSearch}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
       <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
       <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Gender"
        defaultValue="Male"
        onChange={HandleFilter}
      >
        <MenuItem value="None">None</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Others">Other</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
      <InputLabel id="demo-select-small">Country</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={country}
        label="Country"
        onChange={HandleFilterCountry}
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="Australia">Australia</MenuItem>
      </Select>
    </FormControl>
    </Box>
      <br/>
       <Grid container spacing={3}>
      {data.length > 0 ? data.map(user => (
        <Grid item xs={12} sm={6} md={3} key={user.id}>
      <Card>
      <CardMedia component="img" height="fit-content" image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={user.name} />
      <CardContent>
        <Typography variant="h6">{user.Name}</Typography>
        <Typography variant="body1" color="textSecondary">{user.Age}</Typography>
        <Typography variant="body1" color="textSecondary">{user.Gender}</Typography>
        <Typography variant="body1" color="textSecondary">{user.Country}</Typography>
        <Typography variant="body1" color="textSecondary">{user.Profession}</Typography>
      </CardContent>
    </Card>
        </Grid>
        )): <Box> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress variant="determinate" value={progress} />
        </div>
        </Box>
    }
    </Grid>
    </div>
  )
}
