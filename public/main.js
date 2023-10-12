// const { header } = require("express/lib/request")



const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: ' ',
            // name: 'Fyodor Dostoevsky',
            quotes: ' g'
            // quotes: 'Beauty will save the world.'
            
        })
    })
})
