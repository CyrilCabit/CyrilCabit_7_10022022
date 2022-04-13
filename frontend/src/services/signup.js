import axios from 'axios'


function signup(email, pseudo, firstName, lastName, password) {

        
    return axios.post('http://localhost:3000/api/auth/signup',{ 
        "email": email,    
        "pseudo": pseudo,
        "firstName": firstName,
        "lastName": lastName,
        "password": password
        })
  
 }


 export {signup}