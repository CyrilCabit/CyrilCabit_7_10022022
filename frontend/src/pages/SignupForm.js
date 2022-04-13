import { Link, useNavigate } from 'react-router-dom';
import {signup} from '../services/signup';
import style from '../styles/Forms.module.css';
import React, { useState } from 'react';

function Signup() {

    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit=(e)=>{ 
        e.preventDefault()
        signup(email, pseudo, firstName, lastName, password)
        .then((res)=>{
            
            navigate('/login')
        })
    }
    
    return (
<div className={style.form_sign}>
    <h1>Créez votre compte</h1>
    <form onSubmit={submit}>
        <input type="text" name="pseudo" required onChange ={(e)=>setPseudo(e.target.value)} value= {pseudo} minlength="4" maxlength="10" placeholder="Pseudo"></input>
        <input type="email" onChange ={(e)=>setEmail(e.target.value)} value= {email} name="email" required placeholder="Email"></input>
        <input type="text" onChange ={(e)=>setLastName(e.target.value)} value= {lastName} name="lastname" required placeholder="Nom"></input>
        <input type="text" onChange ={(e)=>setFirstName(e.target.value)} value= {firstName}name="firstname" required placeholder="Prénom"></input>
        <input type="password" onChange ={(e)=>setPassword(e.target.value)} name="password" required value= {password} placeholder="Password"></input>  
        <button type="submit">S'inscrire</button>   
    </form>
    <p className={style.switch_page}>Déjà inscrit ? <Link to="/login">Connectez-vous !</Link></p>
</div>);
};


export default Signup


