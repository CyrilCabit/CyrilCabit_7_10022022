import style from './Home.module.css'

function Main() {
    return (
       
<div>
    
    <h1>Forum des Employés</h1>
    <div className='newPost'> (+) créer un nouvelle publication</div>
    <div className='lastPosts'>Voir les dernières publications
        <div className='allPosts'>voir toutes les publications</div>
    </div>
    <label for='search_bar'>
        <input type="search" name='search' ></input>
        <button>Rechercher</button>
  
    </label>


  









</div>)
};

export default Main