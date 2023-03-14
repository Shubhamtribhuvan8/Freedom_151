import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
export default function User() {
  return (
    <div>
      <h1>USER PORTAL </h1>
    <Button variant="contained" size="large"><Link to="/usersignup" style={{textDecoration:"none"}}>Signup</Link></Button>
    </div>
  )
}
