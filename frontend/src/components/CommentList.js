// Composant qui affiche la liste de tous les coms d'un post GRACE A LA BOUCLE MAP
import CommentView from './CommentView'
import React, { useState, useEffect } from 'react';

function CommentList(props) {

    const [comments ,setComments] = useState(props.comments);

    useEffect(()=>{
        function x() {
            setComments(props.comments)
        }

        x()
    },[props.comments]) //dans ce tableau se trouve les éléments qui vont déclencher le useEffect

    function deleteComment(id) {
        props.delete(id)
    }

    function changeComment(id) {
        // console.log(id);
        props.change(id)
        
    }
    return (
        <>
        {comments.map((comment) => (
         
         <CommentView key={comment.id} pseudo={comment.User.pseudo} date={comment.updatedAt} text={comment.text} id={comment.id} change={changeComment} delete={deleteComment} />
        )
        
        )}
        
        </>
    )
    
}

export default CommentList