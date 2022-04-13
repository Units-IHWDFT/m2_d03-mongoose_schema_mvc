const mongoose = require('mongoose')

// Conexión BBDD
require('./0_database_connection')


// Modelo
const Dog = require('./models/SuperDog.model')



// .create()
// argumento: objeto a crear en la BBDD
// retorno: objeto creado en BBDD

Dog
    .create({ name: 'popino', age: 9, color: 'Varios', chip: '3251C', email: 'popino@ironhack.com' })
    .then(newDog => console.log('El nuevo perro es', newDog))
    .catch(error => console.log('Hubo un error:', error))








// // // .create()
// // // argumento: array de objetos a crear en la BBDD
// // // retorno: array de objetos creados en BBDD

// Dog
//     .create([
//         { name: 'Lassie', age: 5, color: 'Negro', celiac: false },
//         { name: 'Popino', age: 14, color: 'Toffe y caramelo', celiac: false },
//         { name: 'Salchichonio', age: 14, color: 'Toffe y caramelo', celiac: true },
//         { name: 'Scooby Doo', age: 1, color: 'Marroncito', celiac: false },
//         { name: 'Pistachin', age: 16, color: 'Toffe y caramelo', celiac: false }
//     ])
//     .then(theNewDogs => theNewDogs.forEach(elm => console.log(`Este perro se llama ${elm.name}`)))
//     .catch(err => console.log('ERROR DE MONGOOSE ---- ', err))