import style from './Footer.module.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer>
        <img src="icon-above-font.png" alt="logo groupomania"></img>
        <ul>
            <li><Link to ="" >
                    <img src='icon.png'></img>
                    <p>Boîte à idées</p>
                </Link>
            </li>
            <li><Link to ="" >
                <img src='icon.png'></img>
                <p>Le mot du Président</p>
                </Link>
            </li>
        </ul>
    </footer>
        
    )
    
}

export default Footer