//COMPOSANT QUI DEFINIT LE FORMAT D'UN COM
import { Link, useParams } from "react-router-dom";
import style from '../styles/Comment.module.css'


function CommentView(props) {

    const {id} = useParams();

    function clearComment() {
        
        
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
                <button /*onClick={changeComment}*/>modifier mon commentaire</button>
                <button onClick={clearComment}>supprimer mon commentaire</button>
            </div>      
        </div>
        
        
    )
}

export default CommentView