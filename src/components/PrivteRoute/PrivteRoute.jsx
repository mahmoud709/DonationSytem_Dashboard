import React from 'react'
import { Navigate } from 'react-router-dom';
export default function PrivateRoute(props) {
    // console.log(props);

if(!localStorage.getItem('token')){
    alert("You must be logged in to view this page");
    return <Navigate to='/login'/>
    
}
else{
    return props.children ;
}
}