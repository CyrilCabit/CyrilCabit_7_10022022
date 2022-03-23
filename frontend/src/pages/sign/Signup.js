import Header from "../../components/header/Header"
import style from './Sign.module.css'

// function Signup() {
//     return ( 
//     <div>
//         <Header/> 
//         <div className={style.color+' '+style.bold}>Login</div>
//     </div>
    
//     )

// };



function Signup() {
    return (
<div className={style.form_sign}>
    

    <h1>Créez votre compte</h1>

    <form>
        <input type="text" name="pseudo" required
       minlength="4" maxlength="10" placeholder="Pseudo"></input>
       <input type="email" name="email" required
        placeholder="Email"></input>
        <input type="password" name="password" required
        placeholder="Password"></input>  
        <button type="button">Sign in</button>    
    </form>
    <p className={style.switch_page}>Déjà inscrit ? <a href="">Connectez-vous !</a></p>

</div>)
};


export default Signup