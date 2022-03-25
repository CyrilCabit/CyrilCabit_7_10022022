import style from './Forms.module.css'

function Signin() {
    return (
       
<div className={style.form_sign}>
    
    <h1>Connectez vous</h1>

    <form>
        <input type="email" name="email" required
        placeholder="Email"></input>
        <input type="password" name="password" required
        placeholder="Password"></input>
        <button type="button">Sign in</button>   
    </form>
    <p className={style.switch_page}>Pas encore inscrit ? <a href="">Créez votre compte !</a></p>

    









</div>)
};







export default Signin