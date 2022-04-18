import style from '../styles/Forms.module.css';
import { Link, useNavigate } from "react-router-dom";
import {login} from '../services/login';
import React, { useState } from 'react';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validate =()=>{
     
        if(!email.trim()){
            setEmail("")
            alert("Le champs E-mail est vide")
            return false
        } 
 
        if(!password.trim()){
            setPassword("")
            alert("Le champs Mot de passe est vide")
            return false
        } 
        return true
        
    }

    const submit=(e)=>{ 
        e.preventDefault()

        if(!validate()){
            return;
        }
        
        login(email, password)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("pseudo", res.data.pseudo)
            navigate('/')

        })
        .catch((err)=>{
            alert(err.response.data.error);
        })
    }

   
    return (
       
<div className={style.form_sign}>
    
    <h1>Connectez vous </h1>

    <form onSubmit={submit}>
        <input type="email" onChange ={(e)=>{setEmail(e.target.value)}} value= {email} name="email" required placeholder="Email"></input>
        <input type="password" name="password" required value= {password} onChange ={(e)=>{setPassword(e.target.value)}} placeholder="Password"
        autoComplete="on"></input>
        <button type="submit">Connexion</button>   
    </form>
    <p className={style.switch_page}>Pas encore inscrit ? <Link to= "/signup">Créez votre compte</Link></p>
</div>)
};


export default Signin