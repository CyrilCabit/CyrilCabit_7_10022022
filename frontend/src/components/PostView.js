//COMPOSANT QUI DEFINIT LE FORMAT D'UN POST
import style from '../styles/Post.module.css'
import { Link, useNavigate } from "react-router-dom";
import {deletePost} from "../services/deletePost"

function PostView(props) {

    

    return (
        <div className={style.post} >
            <div className={style.post_info}>

                <h1>{props.pseudo}</h1>
                <p>{props.date}</p>
                
            </div>
            <div className={style.post_body}>
                <h2>{props.title}</h2>
                <img src={props.image} ></img>
                <p>{props.text}</p>   
                
            </div>
            
            <div className={style.post_react}>
                <button>J'aime</button>
                <button><Link to={`/post/${props.id}`}>réagir</Link></button>
                
            </div>
            
        </div>
        
        
    )
}

export default PostView