import style from './Forms.module.css'


function Signup() {
    function handleClick() {
        console.log('Ceci est un clic')
    }
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
        <button type="button" onClick={handleClick}>Sign in</button>    
    </form>
    <p className={style.switch_page}>Déjà inscrit ? <a href="">Connectez-vous !</a></p>
</div>);
};


export default Signup


// comment faire pour ecouter le onClick????????????????