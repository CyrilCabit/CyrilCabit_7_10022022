import axios from 'axios'

function getAllPosts() {
    const access_token = localStorage.getItem('token');
   
    return axios.get('http://localhost:3000/api/post', {
        headers: {
          'Authorization': `bearer ${access_token}`
        }
      })
      
 }


 export { getAllPosts}


