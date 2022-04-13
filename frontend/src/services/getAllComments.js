import axios from 'axios'

function getAllComments(id) {
    const access_token = localStorage.getItem('token');
   
    return axios.get(`http://localhost:3000/api/comment`, {
        headers: {
          'Authorization': `bearer ${access_token}`
        }
      })
      
 }


 export { getAllComments}
