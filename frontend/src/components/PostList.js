//COMPOSANT QUI AFFICHE TOUS LES POSTS GRACE A LA BOUCLE MAP
import style from '../styles/Home.module.css';
import {getAllPosts} from '../services/getAllPosts'
import PostView from './PostView'
//On créé une fonction  qui affichera tous les post présents dans la BDD sous forme de liste ou tableau
function PostList(props) {
    
        return (
            <>
                {props.posts.map((post, id) => (
                    <PostView id={post.id} title={post.title} pseudo={post.User.pseudo} text={post.text} image={post.User.image} date={post.updatedAt}/>
                ))}
            </>
        )
    
    
    


    }

    export default PostList