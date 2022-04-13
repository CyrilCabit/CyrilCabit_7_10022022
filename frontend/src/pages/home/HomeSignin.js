import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Signin from '../SigninForm'
import style from '../../styles/Home.module.css'
import logo from '../../assets/icon-above-font.png'


function HomeSignin() {
    return (
<div> 
    {/* <Header/>      */}
    <div className={style.homepage}>
        <div className= {style.accueil}>
            <img src={logo} alt='logo groupomania '></img>
      
        </div>
    
    <Signin/>
    </div> 
    {/* <Footer/> */}
</div>)


};

export default HomeSignin