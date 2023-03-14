import {Link} from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Adminnav() {
  return (
    <div style={{ width: '100%' }}>
    <Box
        sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
       spacing:"2",
       gap:"10px"
        }}
      >
        <Button variant="contained" size="large">
        <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
        </Button>
        <Button variant="contained" size="large">
        <Link to="/data" style={{textDecoration:"none"}}>Data</Link>
        </Button>
        <Button variant="contained" size="large">
        <Link to="/report" style={{textDecoration:"none"}}>Reports</Link>
        </Button>
      </Box>
       
    </div>
  )
}
