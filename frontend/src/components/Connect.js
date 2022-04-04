import React from 'react'
import { Navigate } from 'react-router-dom';


function Connect(props) {

    const token = localStorage.getItem('token');
    return (
        token? props.children :<Navigate to ="/login"></Navigate> 
    )
    }

export default Connect
