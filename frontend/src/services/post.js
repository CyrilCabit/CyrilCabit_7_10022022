import axios from 'axios'

function createpost() {
        
    axios.post('http://localhost:3000/api/post',{"title": "test","UserId":2, "text":"meow"
    })
    .then(response => console.log(response))
 }

function getAllPosts() {
    const access_token =localStorage.getItem('token');
   
    return axios.get('http://localhost:3000/api/post', {
        headers: {
          'Authorization': `bearer ${access_token}`
        }
      })
      
 }


 export {createpost, getAllPosts}


