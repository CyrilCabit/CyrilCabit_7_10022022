import React from 'react'
import style from '../../styles/Header.module.css'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon-left-font.png";


function Header() {

    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("token") 
        navigate('/login')       
    }
    const home =()=>{
        navigate('/')
    }


    return (
        <header>
            <img src={logo} alt='logo aligné groupomania '></img>
            <nav>
                <ul>
                    <li><button onClick={home}>Accueil</button></li>
                    <li><button onClick={logout}>Se déconnecter</button></li>
                    <li><button>Supprimer son compte</button></li>                         
                </ul>
            </nav>
        </header>
        
        
    )
}


export default Header
