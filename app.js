
//RECIBO UN OBJETO Y LO PODEMOS DESESTRUCTURAR
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs'); //IMPORTAMOS DE yargs.js
const colors = require('colors');

console.clear();


crearArchivoTabla( argv.b, argv.l, argv.h)
    .then( (nombreArchivoTabla) => {
        console.log(nombreArchivoTabla.rainbow, 'creado'.green);
    }).catch(err => console.log(err));




