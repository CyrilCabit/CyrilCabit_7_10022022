import axios from "axios";

function deleteAccount() {
    const access_token = localStorage.getItem('token');

    return axios.delete('http://localhost:3000/api/auth/me',{
        headers: {
            'Authorization': `bearer ${access_token}`
        }
    }
    
    
    )
    
}

export {deleteAccount}