const express = require('express')
const path = require('path')

const app = express()

// Database connection
require('./db/connection')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


// Model
const Dog = require('./models/Dog.model')

// routing
app.get('/', (req, res) => {

    Dog
        .find()
        .then(dogs => res.render('dogs-list', { dogs }))
        .catch(err => console.log('ERROR!:', err))
})

app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN 5005'))