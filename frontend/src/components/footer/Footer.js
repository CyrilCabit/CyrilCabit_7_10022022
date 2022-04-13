import style from '../../styles/Footer.module.css'
import { Link } from "react-router-dom";
import logo1 from '../../assets/icon.png'
import logo2 from '../../assets/icon-above-font.png'
function Footer() {
    return (
    <footer>
        <img src={logo2} alt="logo groupomania"></img>
        <ul>
            <li><Link to ="" >
                    <img src={logo1}></img>
                    <p>Boîte à idées</p>
                </Link>
            </li>
            <li><Link to ="" >
                <img src={logo1}></img>
                <p>Le mot du Président</p>
                </Link>
            </li>
        </ul>
    </footer>
        
    )
    
}

export default Footer