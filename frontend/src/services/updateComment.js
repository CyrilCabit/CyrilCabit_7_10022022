import axios from "axios";

function updateComment(text,id) {
    const access_token = localStorage.getItem('token');
   
    return axios.put(`http://localhost:3000/api/comment/${id}`, {

      'text': text

    },
    {
        headers: {
          'Authorization': `bearer ${access_token}`
        }
        
      })
      
 }


 export { updateComment }