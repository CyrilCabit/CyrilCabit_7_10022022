
import style from './Post.module.css'
function NewPost() {
    return (
        <div>
            <label for="title">Créer un Post</label> 
            <input placeholder="Mettez votre titre ici"type="text" name="title" required minlength="2" maxlength="8" size="10"></input>
            <textarea maxlength= "150"></textarea>
            <button>POSTER</button>
        </div>
        
        
    )
}
function GetOnePost(props) {
    return (
        <div className={style.post}>
            <h1>pseudo du user</h1>
            <h2>{props.title}</h2>
            <p>L'image ou le texte s'afficheront ici</p>   
            <p> le bouton like</p>
            <textarea maxlength= "20" placeholder='Commentez'></textarea>
            <p> le bouton like</p>
        </div>
        
        
    )
}

export {GetOnePost,NewPost} 