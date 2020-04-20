fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(res => {
    for (i in res){
        var inHTML = `
        <h2>${res[i]['title']}</h2>
        <p>${res[i]['body']}</p>
        <hr>`
        document.getElementById('test').innerHTML += inHTML
    }
})