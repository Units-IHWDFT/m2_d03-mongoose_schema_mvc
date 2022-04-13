// DB connection
require('./0_database-connection')

// Model
const Dog = require('./Models/Dog.model')


Dog
    .find()                         // query
    .select('name age')              // projection
    .sort({ name: 1 })              // sorting query
    .limit(10)                      // limit number
    .skip(1)                        // skip number
    .then(dogs => console.log('Los nombres y edades de los perros ordenados alfabéticamente son:', dogs))
    .catch(err => console.log(err))


Dog
    .countDocuments()
    .then(numberOfDOgs => console.log('Tenemos un total de', numberOfDOgs, 'perros'))
    .catch(err => console.log(err))