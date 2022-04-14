import axios from "axios";

function deleteComment() {
    const access_token = localStorage.getItem('token');

    return axios.delete(`http://localhost:3000/api/comment/${id}`,
    {
        headers: {
            'Authorization': `bearer ${access_token}`
          }
    })
}

export {deleteComment}