// Composant qui affiche la liste de tous les coms d'un post GRACE A LA BOUCLE MAP
import CommentView from './CommentView'


function CommentList(props) {

    return (
        <>
        {props.comments.map((comment) => (
         
         <CommentView pseudo={comment.User.pseudo} date={comment.updatedAt} text={comment.text}  />
        )
        
        )}
        
        </>
    )
    
}

export default CommentList