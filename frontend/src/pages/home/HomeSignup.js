import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Signin from '../SigninForm'
import style from '../../styles/Home.module.css'
import logo from '../../assets/icon-above-font.png'
import Signup from '../SignupForm'


function HomeSignup() {
    return (
<div> 
    {/* <Header/>      */}
    <div className={style.homepage}>
        <div className= {style.accueil}>
            <img src={logo} alt='logo groupomania '></img>
      
        </div>
    
    <Signup/>
    </div> 
    {/* <Footer/> */}
</div>)


};

export default HomeSignup