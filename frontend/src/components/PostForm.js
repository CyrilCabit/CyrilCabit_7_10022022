//COMPOSANT POUR LA CREATION D'UN NOUVEAU POST

import style from '../styles/NewPost.module.css';
import React, { useState } from 'react';
import {createPost} from '../services/createPost';



function PostForm(props) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const submit=(e)=>{ 
        e.preventDefault()
        createPost(title, text)
        .then((res)=>{
            props.addPost(res.data.post)
            setTitle('')
            setText('')
            alert ('publication envoyée !')
            
        })
    }
    return (
        <form onSubmit={submit} className={style.new_post}>
            <label htmlFor="title">Créer une nouvelle publication</label> 
            <input type="text" name="title" required onChange ={(e)=>setTitle(e.target.value)} value= {title} placeholder="Titre"  minLength="2"  size="10"></input>
            <textarea name="text" required onChange ={(e)=>setText(e.target.value)} value= {text} placeholder="Ecrivez votre publication"></textarea>
            <button type='submit'>POSTER</button>
        </form>
        
        
    )
}

export default PostForm