import axios from 'axios'

function signup() {
        
    axios.post('http://localhost:3000/api/auth/signup',{ 
        "email": "cabitcyril@yahoo.fr",    
        "pseudo": "cylou",
        "firstName": "testprénom",
        "lastName": "testnom",
        "password": "test"
        })
    .then(response => console.log(response))
 }


 export {signup}