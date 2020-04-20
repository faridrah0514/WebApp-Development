var { fetch } = require('cross-fetch')

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(res => {
    
})