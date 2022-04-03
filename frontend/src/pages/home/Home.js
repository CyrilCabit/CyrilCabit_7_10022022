import Signin from '../Signin'
import style from './Home.module.css'


function Home() {
    return (
       
<div className={style.homepage}>
    <div className= {style.accueil}>
        <img src="icon-above-font.png" alt='logo groupomania '></img>
      
    </div>
    
    <Signin/>
</div>)


};

export default Home