import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { GetOnePost } from '../components/post/Post';
import style from './Session.module.css';
import { getAllPosts } from '../services/post';

function Session() {

    getAllPosts()
    .then((res)=>{
        console.log(res.data);
    })
    return (
       
<div>
    <Header/>
    <div>
        
    <h1>Forum des Employés</h1>
    <div className='newPost'> (+) créer un nouvelle publication</div>
    <div className='lastPosts'>Voir les 3 publications les plus récentes 
        <div className='allPosts'>voir toutes les publications</div>
    </div>
    <div className={style.search_bar}>
        <label for='search_bar'></label>
        <input type="search" name='search'></input>
        <button>Rechercher</button>  
    
    </div>
     

        <GetOnePost title = "salut"/>

      
    </div>
    <Footer/>
    
    
</div>)



};

export default Session