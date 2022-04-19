import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import style from '../styles/Comment.module.css'

import CommentList from '../components/CommentList';
import React, { useState, useEffect } from 'react';
import CommentForm from '../components/CommentForm';
import { useParams, useNavigate } from 'react-router-dom';
import { getOnePost } from '../services/getOnePost';
import { deletePost } from '../services/deletePost';
import{ updatePost} from '../services/updatePost';
import{ updateComment} from '../services/updateComment';
import { deleteComment} from '../services/deleteComment'
import { isOwner } from '../services/owner';


function Comment() {

    const [post, setPost] = useState(null);
    const [modifComment, setModifComment] = useState({})
    const [comments, setComments] = useState([]);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const navigate =useNavigate()
    const {id} = useParams();

    const validate =()=>{
     
        if(!title.trim()){
            setTitle("")
            alert("Le champs Titre est vide")
            return false
        } 
 
        if(!text.trim()){
            setText("")
            alert("La zone de texte est vide")
            return false
        } 
        return true
        
    }

    //AJOUTER UN COMMENTAIRE
    function addComment(comment){
        // console.log(comment);
        const allComments = comments;
        
        allComments.unshift(comment)
        setComments([...allComments])

    }
function updateComment(text,id) {

    const index = comments.findIndex(comment=>comment.id == id)
    const findComment = comments [index];
    findComment.text = text;
    comments[index] = findComment
    setComments([...comments])
    setModifComment({text:'', id: undefined})

}

    //MODIFIER UN POST
    function changePost(){
        setEdit(true);
        setTitle(post.title);
        setText(post.text);
    }

    function cancelModif() {
        setEdit(false);
    }

    function handleUpdate(e) {
        e.preventDefault()

        if(!validate()){
            return;
        }

        updatePost(id, title, text)
        .then(()=>{
            setEdit(false)
            setPost({...post, title: title, text: text}) /*la fonction va écraser les anciennes données en passant a nouveau title et text*/
        })
        }


     //MODIFIER UN COMMENTAIRE
    function changeComment(id){
        const findComment = comments.find(comment=> comment.id == id)
        // console.log(findComment);
        setModifComment(findComment)      
           
        }

    //SUPPRIMER UN POST
    function clearPost() {

        if (window.confirm('Voulez vous vraiment supprimer ce post ?') ==true) {
            // console.log('post supprimé');
            deletePost(id)
            
            .then(()=>          
            { alert('Le post a été supprimé'); 
            navigate('/')})
            .catch((error)=>console.log(error))
            
        } else {
            console.log('annulation');
            
        }
    }

    function deleteComment(id) {
        const filterComments = comments.filter(comment=> comment.id != id)
        setComments(filterComments)
    }

    useEffect(()=>{
        function init(){

            getOnePost(id)
            .then((res)=>{
                let onePost = res.data
                console.log(onePost);
                setPost(onePost);    
                setComments(onePost.Comments);
                setTitle(onePost.title);
                setText(onePost.text);
            })


        }
        init()
    
    },[])


    
    return (
       
<div>
  
    <div>
        

    <Header/>
        {post?<div className={style.session_page}>
        
        <div className={style.post_body}>
            <div className={style.post_header}>Publication n° {post.id} par {post.User.pseudo}</div>
            <div className={style.post_title}>{post.title}</div>
            <div className={style.post_text}>{post.text}</div>
            <div className={style.post_owner}>
            {isOwner(post.User.pseudo)?<button onClick={changePost}>modifier mon post</button>:<></>}
            {isOwner(post.User.pseudo, true)?<button onClick={clearPost}>supprimer mon post</button>:<></>}
            </div>

            
            
            
        </div>
            
            {/* FORMULAIRE DE MODIFICATION D'UN POST */}
            {edit?<div>
                <form className={style.hidden_form} onSubmit={handleUpdate} >
                <label htmlFor="title">MODIFIER UN POST</label> 
                <input type="text" name="title" required onChange ={(e)=>setTitle(e.target.value)} value= {title}  placeholder="Titre"  minLength="2"  size="10"></input>
                <textarea name="text" required onChange ={(e)=>setText(e.target.value)}value= {text}  placeholder="Modifier votre publication"></textarea>
            <button type='submit'>POSTER</button>
            <button onClick={cancelModif}type='button'>ANNULER</button>
            </form>
            </div>:<></>}
            <CommentForm addComment={addComment} updateComment = {updateComment} postId= {post.id} comment={modifComment} />

            <CommentList pseudo = {post.User.pseudo} comments={comments} change = {changeComment} delete = {deleteComment} />
        </div>:<></>}
        

      
    </div>
    <Footer/>
    
    
</div>)



};

export default Comment