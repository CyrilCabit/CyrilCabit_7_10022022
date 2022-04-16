import style from '../styles/Forms.module.css';
import { Link, useNavigate } from "react-router-dom";
import {login} from '../services/login';
import React, { useState } from 'react';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit=(e)=>{ 
        e.preventDefault()
        login(email, password)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("pseudo", res.data.pseudo)
            navigate('/')
        })
    }

   
    return (
       
<div className={style.form_sign}>
    
    <h1>Connectez vous </h1>

    <form onSubmit={submit}>
        <input type="email" onChange ={(e)=>setEmail(e.target.value)} value= {email} name="email" required placeholder="Email"></input>
        <input type="password" name="password" required value= {password} onChange ={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
        <button type="submit">Connexion</button>   
    </form>
    <p className={style.switch_page}>Pas encore inscrit ? <Link to= "/signup">Créez votre compte</Link></p>
</div>)
};


export default Signin