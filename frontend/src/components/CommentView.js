//COMPOSANT QUI DEFINIT LE FORMAT D'UN COM
import { Link } from "react-router-dom";
import style from '../styles/Comment.module.css'


function CommentView(props) {
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
              
                <button><Link to="/">...</Link></button>
            </div>      
        </div>
        
        
    )
}

export default CommentView