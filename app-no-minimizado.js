
//RECIBO UN OBJETO Y LO PODEMOS DESESTRUCTURAR
const { crearArchivoTabla } = require('./helpers/multiplicar');

const argv = require('yargs')
.option('b', 
    {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
.option('l', 
    {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,

    })
.check( (argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que se un número';
    }
    return true; //SI, NO HAY ERROR 
})
.argv;



console.clear();
console.log(argv);



crearArchivoTabla( argv.b, argv.l)
    .then( (nombreArchivoTabla) => {
        console.log(nombreArchivoTabla, 'creado');
    }).catch(err => console.log(err));




































////////// CODIGO FUNCIONA PERO NO ES RECOMENDABLE HACER
// const base = 5;
// //NO SE RECOMIENDA TRABAJAR CON EL SIGUIENTE CODIGO POR LA VOLATIBILIDAD
// // TRABAJAR CON LOS ARGUMENTOS QUE VIENEN DESDE LA CONSOLA
// // console.log(process.argv);
// //TOMANDO EL 3er ARGUMENTO ( DESESTRUCTURACION DE ARREGLOS.)
// const [, , arg3 = 'base=5'] = process.argv; 
// //EXTRAER EL NUMERO 
// const [, base = 5] = arg3.split('=');
// // console.log(base);

// // crearArchivoTabla( base )
// //     .then( (nombreArchivoTabla) => {
// //         console.log(nombreArchivoTabla, 'creado');
// //     }).catch(err => console.log(err));

