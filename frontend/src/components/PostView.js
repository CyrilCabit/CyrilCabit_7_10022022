//COMPOSANT QUI DEFINIT LE FORMAT D'UN POST
import style from '../styles/Post.module.css'
import { Link } from "react-router-dom";


function PostView(props) {

    const formatDate = props.date;

    return (
        <div className={style.post} >
            <div className={style.post_info}>

                <h2>{props.pseudo}</h2>
                <p>Le {(new Date(formatDate)).toLocaleDateString("fr")} à {(new Date(formatDate)).toLocaleTimeString("fr")}</p>
                
            </div>
            <div className={style.post_body}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>   
                
            </div>
            
            <div className={style.post_react}>
                {/* <button>J'aime</button> */}                
                <button><Link to={`/post/${props.id}`}>voir les commentaires</Link></button>
                
            </div>
            
        </div>
        
        
    )
}

export default PostView