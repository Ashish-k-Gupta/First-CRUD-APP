// const { header } = require("express/lib/request")

// const { response } = require("express")



const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')



update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Franz Kafka',
            // quotes: '“In the midst of winter, I found there was, within me, an invincible summer inside me.”'
            quotes: 'What the heck, I just turned into cockroach'
            
        })
        
    })
    .then(res => {

        if (res.ok) return res.json()
    })
    .then(response => {
        console.log(response)
        window.location.reload(true)
        })
    .catch(error =>{
        console.log('Error:', error)
    })
})

deleteButton.addEventListener('click', _ =>{
    fetch('/quotes',{
        method: 'delete',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Franz Kafka'
        })
    })
     .then(res => {
        if(res.ok) return res.json()
     })
    .then(data => {
        window.location.reload()
    })
})


