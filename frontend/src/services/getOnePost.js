import axios from 'axios'

function getOnePost(id) {
    const access_token = localStorage.getItem('token');

    return axios.get(`http://localhost:3000/api/post/${id}`,
    
    {
        headers: {
            'Authorization': `bearer ${access_token}`
          }
    })
    
}

export {getOnePost}