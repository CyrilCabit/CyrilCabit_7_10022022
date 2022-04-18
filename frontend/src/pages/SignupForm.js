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

    //verifie si les champs sont corrects
    const validate =()=>{
        if(!pseudo.trim()){
            setPseudo("")
            alert("Le champs pseudo est vide")
            return false
        } 
        if(!email.trim()){
            setEmail("")
            alert("Le champs E-mail est vide")
            return false
        } 
        if(!lastName.trim()){
            setLastName("")
            alert("Le champs Nom est vide")
            return false
        } 
        if(!firstName.trim()){
            setFirstName("")
            alert("Le champs Prénom est vide")
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
        signup(email, pseudo, firstName, lastName, password)
        .then((res)=>{
            
            navigate('/login')
        })
        .catch((err)=>{
            alert(err.response.data.error)
        })
    }
    
    return (
<div className={style.form_sign}>
    <h1>Créez votre compte</h1>
    <form onSubmit={submit}>
        <input type="text" name="pseudo" required onChange ={(e)=>setPseudo(e.target.value)} value= {pseudo} minLength="4" maxLength="10" placeholder="Pseudo"></input>
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


