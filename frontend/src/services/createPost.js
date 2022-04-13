import axios from 'axios'

function createPost(title, text) {
    const access_token = localStorage.getItem('token');
        
    return axios.post('http://localhost:3000/api/post',{

        "title": title, 
        "text":text,
        
    },
    {
        headers: {
            'Authorization': `bearer ${access_token}`
          }
    })
  
 }

 export {createPost}