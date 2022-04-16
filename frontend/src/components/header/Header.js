import React from 'react'
import style from '../../styles/Header.module.css'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon-left-font.png";
import { deleteAccount } from '../../services/deleteAccount';



function Header(props) {
    const id = props.id
    const navigate = useNavigate();
    
    const logout = ()=>{
        localStorage.removeItem("token") 
        localStorage.removeItem("pseudo")
        navigate('/login')       
    }
    const home =()=>{
        navigate('/')
    }

    function handleDelete() {
        if(window.confirm('Confirmer la suppression du compte ?')) 
        {
            deleteAccount().then(()=>{logout()})
        }
    }

    return (
        <header>
            <img src={logo} alt='logo groupomania vertical'></img>
            <nav>
                <ul>
                    <li><button onClick={home}>Accueil</button></li>
                    <li><button onClick={logout}>({localStorage.getItem('pseudo')})  Se déconnecter</button></li>
                    <li><button onClick={handleDelete}>Supprimer le compte</button></li>                         
                </ul>
            </nav>
        </header>
        
        
    )
}


export default Header
