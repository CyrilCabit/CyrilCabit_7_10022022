import axios from 'axios'

function createpost() {
        
    axios.post('http://localhost:3000/api/post',{"title": "test","UserId":2, "text":"meow"
    })
    .then(response => console.log(response))
 }


 export {createpost}