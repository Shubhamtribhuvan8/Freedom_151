import React, {useContext} from "react";
import context from "../MyContext/Context";
import { Navigate } from "react-router-dom";
const PrivateComp = (props) => {
    const {isLoggedIn,setIsLoggedIn} = useContext(context);
    if (isLoggedIn){
        return props.children
    }else{
        return  <Navigate to="/login" />  
    }
};

export default PrivateComp;

