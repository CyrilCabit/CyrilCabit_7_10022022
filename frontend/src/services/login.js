import axios from 'axios'

function login(email, password) {
        
    return axios.post('http://localhost:3000/api/auth/login',{
        "email": email,
        "password": password
    })
    
 }


 export {login}