//COMPOSANT POUR LA CREATION D'UN NOUVEAU COM

import style from "../styles/Comment.module.css"
import { createComment } from "../services/createComment";

import React, { useEffect, useState } from 'react';
import { updateComment } from "../services/updateComment";



function CommentForm(props) {

    const [text, setText] = useState(props.comment.text);
    const [id ,setId] = useState(props.comment.id)

    useEffect(()=>{
        function name() {
            // console.log(props.comment);
            setText(props.comment.text)
            setId(props.comment.id)
        }
        name()
    },[props.comment])

    const submit=(e)=>{ 
        e.preventDefault()
        if(id){
            update()
        }
        else{
            create()
        }
        
    }
function create() {
    createComment(text, props.postId)
        .then((res)=>{
            props.addComment(res.data.comment)
            
            setText('')
            alert ('commentaire publié !')
            
        })
}

function update() {
    updateComment(text, id)
    .then ((res)=>{
        props.updateComment(text, id)

        alert('commentaire modifié')
        
    })
}

    return (
        <form onSubmit={submit} className={style.new_comment}>
            <label htmlFor="title">Commenter cette publication</label> 
            <textarea name="text" required onChange ={(e)=>setText(e.target.value)} value= {text}maxLength= "150" placeholder="Commentez"></textarea>
            <button type='submit'>PUBLIER</button>
        </form>
    )
    
}
export default CommentForm


