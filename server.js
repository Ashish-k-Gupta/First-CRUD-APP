console.log('Hello, World!')

const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://theashukumar007:jcdQmKqjp58Ma56b@cluster0.j8mfafe.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(connectionString, {useUnifiedTopology: true})
.then(client =>{
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('public'))

    // ************************************ 
    app.use(bodyParser.json())
    // ************************************ 
    
    app.get('/', (req, res) => {
        quotesCollection.find().toArray()
        .then(result => { 
            // console.log(result)
            res.render('index.ejs', {quotes: result})
        })
        .catch(error => console.error(error))
    })
    
    app.post('/quotes', (req, res) =>{
        quotesCollection.insertOne(req.body)
        .then(result =>{
            res.redirect('/')
        })
        .catch(error => console.log(error))
    })

    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
            { name: 'Marcus Aurlius'},
            {
                $set: {
                    name: req.body.name,
                    quotes: req.body.quote
                }
            },
            {
                upsert: true
            }
        )
    })

    

    app.listen(3000, function(){
        console.log('listening on 3000')
    })

})
.catch(error => console.log(error))





  