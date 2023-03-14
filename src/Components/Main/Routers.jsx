import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminLogin from '../Admin/Adminsignup'
import Adminsignup from '../Admin/Adminsignup'
import Data from '../Admin/Data'
import Reports from '../Admin/Reports'
import Admin from '../HomeCompo/Admin'
import User from '../HomeCompo/User'
import UserSignup from '../User/UserSignup'
import PrivateComp from '../PrivateRoute/PrivateRoute'
export default function Routers() {
  return (
    <div>
      <Routes>
            <Route path="/admin" element={<Admin/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/adminsignup" element={<Adminsignup/>} />
            <Route path="/usersignup" element={<UserSignup/>} />
            <Route path="/login" element={<AdminLogin/>} />
            <Route path="/data" element={<PrivateComp > <Data/></PrivateComp>}></Route>
            <Route path="/report" element={<PrivateComp > <Reports/></PrivateComp>}></Route>
        </Routes>
    </div>
  )
}
