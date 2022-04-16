//COMPOSANT QUI DEFINIT LE FORMAT D'UN COM
import { useParams } from "react-router-dom";
import style from '../styles/Comment.module.css'
import { deleteComment } from '../services/deleteComment'
import { isOwner } from "../services/owner";


function CommentView(props) {

    function changeComment() {
        props.change(props.id)
        
    }

    function clearComment() {
        if (window.confirm('Voulez vous vraiment supprimer ce commentaire ?')== true) {
            deleteComment(props.id)
            .then(()=> props.delete(props.id))
            .catch((err)=>(console.log(err)))
        }
        else{
            console.log('action annulée');
        }
        
    }
    return (
        <div className={style.comment} >
            <div className={style.comment_info}>
                <h1>{props.pseudo}</h1>
                <p>{props.date}</p>                
            </div>
            <div className={style.comment_body}>            
                <p>{props.text}</p>                   
            </div>  
            <div className={style.comment_react}>              
            {isOwner(props.pseudo)?<button onClick={changeComment}>modifier mon commentaire</button>:<></>}
            {isOwner(props.pseudo, true)?<button onClick={clearComment}>supprimer mon commentaire</button>:<></>}
            </div>      
        </div>
        
        
    )
}

export default CommentView