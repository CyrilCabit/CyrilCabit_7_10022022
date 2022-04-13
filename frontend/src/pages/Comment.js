import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import style from '../styles/Comment.module.css'

import CommentList from '../components/CommentList';
import React, { useState, useEffect } from 'react';
import CommentForm from '../components/CommentForm';
import { useParams, useNavigate } from 'react-router-dom';
import { getOnePost } from '../services/getOnePost';
import { deletePost } from '../services/deletePost';



function Comment() {

    const [post, setPost] = useState(null);

    const [comments, setComments] = useState([]);
    const navigate =useNavigate()
    const {id} = useParams();

    function addComment(comment){
        // console.log(comment);
        const allComments = comments;
        
        allComments.unshift(comment)
        setComments([...allComments])

    }

    function clearPost() {

        
        
        if (window.confirm('Voulez vous vraiment supprimer ce post ?') ==true) {
            // console.log('post supprimé');
            deletePost(id)
            .then(()=>navigate('/'))
            .catch((error)=>console.log(error))
            
        } else {
            console.log('annulation');
            
        }
    }

    useEffect(()=>{
        function init(){

            getOnePost(id)
            .then((res)=>{
                let onePost = res.data
                console.log(onePost);
                setPost(onePost)    
                setComments(onePost.Comments)
            })


        }
        init()
    
    },[])


    
    return (
       
<div>
  
    <div>
        

    <Header/>
        {post?<div className={style.session_page}>
        <button onClick={clearPost}>supprimer</button>
            <div>{post.title}</div>
            <CommentForm addComment={addComment} postId= {post.id}/>
            <CommentList pseudo ={post.User.pseudo} comments={comments} />
        </div>:<></>}
        

      
    </div>
    <Footer/>
    
    
</div>)



};

export default Comment