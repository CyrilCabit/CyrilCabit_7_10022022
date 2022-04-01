import React from 'react'
import style from './Header.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src="icon-left-font.png" alt='logo aligné groupomania '></img>
            <nav>
                <ul>
                    <li><Link to="/signup">Créer un compte</Link></li>
                    <li><Link to="/login">S'identifier</Link></li>
                    <li><Link to="#">Se déconnecter</Link></li>
                    <li><Link to="#">Supprimer son compte</Link></li>                         
                </ul>
            </nav>
        </header>
        
        
    )
}

export default Header
