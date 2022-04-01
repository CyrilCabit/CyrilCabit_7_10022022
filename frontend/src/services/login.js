import axios from 'axios'

function login() {
        
    axios.post('http://localhost:3000/api/auth/login',{"email": "gestion.cabit@gmail.com",
    "password": "test"
    })
    .then(response => console.log(response))
 }


 export {login}