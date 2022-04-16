import axios from "axios";

function updatePost(id, title, text) {
    const access_token = localStorage.getItem('token');
   
    return axios.put(`http://localhost:3000/api/post/${id}`, {

    'title': title,
    'text': text
    },
    
    {
        headers: {
          'Authorization': `bearer ${access_token}`
        }
      })
      
 }


 export { updatePost }