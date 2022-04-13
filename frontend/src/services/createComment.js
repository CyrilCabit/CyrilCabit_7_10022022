import axios from 'axios'

function createComment(text,PostId) {
    const access_token = localStorage.getItem('token');
        
    return axios.post(`http://localhost:3000/api/comment`,{

       
        "text":text,
        "PostId": PostId,
        
    },
    {
        headers: {
            'Authorization': `bearer ${access_token}`
          }
    })
  
 }

 export {createComment}