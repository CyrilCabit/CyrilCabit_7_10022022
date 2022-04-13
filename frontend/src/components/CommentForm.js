//COMPOSANT POUR LA CREATION D'UN NOUVEAU COM

import style from "../styles/Comment.module.css"
import { createComment } from "../services/createComment";

import React, { useState } from 'react';



function CommentForm(props) {

    const [text, setText] = useState('');
    const submit=(e)=>{ 
        e.preventDefault()
        createComment(text, props.postId)
        .then((res)=>{
            props.addComment(res.data.comment)
            
            setText('')
            alert ('commentaire publié !')
            
        })
    }
    return (
        <form onSubmit={submit} className={style.new_comment}>
            <label for="title">Commenter cette publication</label> 
            <textarea name="text" required onChange ={(e)=>setText(e.target.value)} value= {text}maxLength= "150" placeholder="Commentez"></textarea>
            <button type='submit'>PUBLIER</button>
        </form>
    )
    
}
export default CommentForm


