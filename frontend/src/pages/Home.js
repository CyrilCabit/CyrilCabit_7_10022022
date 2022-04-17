import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { GetOnePost } from '../components/PostView';
import style from '../styles/Home.module.css';
import PostView  from '../components/PostView';
import {getAllPosts} from '../services/getAllPosts'
import PostList from '../components/PostList';
import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';




function Home() {


    const [posts, setPosts] = useState([]);

    function addPost(post){
        // console.log(post);
        const allPosts = posts;
        
        allPosts.unshift(post)
        setPosts([...allPosts])

    }

    useEffect(()=>{
        function init(){

            getAllPosts()
            .then((res)=>{
                let postList = res.data
                console.log(postList);
                setPosts(postList)    
            })


        }
        init()
    
    },[])


    
    return (
       
<div>
    <Header/>
    <div>
        
    <h1>Forum des Employés</h1>
    
     <div className={style.session_page}>
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
    </div>
        

      
    </div>
    <Footer/>
    
    
</div>)



};

export default Home