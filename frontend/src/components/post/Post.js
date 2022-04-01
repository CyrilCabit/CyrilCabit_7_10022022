
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

export default NewPost
