import style from './Forms.module.css'
import { Link } from "react-router-dom";
import {login} from '../services/login'

function Signin() {

  
     login()
    return (
       
<div className={style.form_sign}>
    
    <h1>Connectez vous </h1>

    <form>
        <input type="email" name="email" required
        placeholder="Email"></input>
        <input type="password" name="password" required
        placeholder="Password"></input>
        <button type="button">Connexion</button>   
    </form>
    <p className={style.switch_page}>Pas encore inscrit ? <Link to= "/signup">Créez votre compte</Link></p>

    









</div>)
};







export default Signin