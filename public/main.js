// const { header } = require("express/lib/request")



const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Albert Camus',
            quote: 'In the midst of winter, I found there was, within me, an invincible summer.'
        })
    })
})