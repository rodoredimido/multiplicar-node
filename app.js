//const fs = require('expres'); las lib externas
//const fs = require('./path'); nosotros escribimis

// const multiplicar = require('./multiplicar/multiplicar')


const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


// console.log(process.argv);

// let argv2 = process.argv;
/// console.log(argv.limite);
let commando = argv._[0];

switch (commando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(dato => console.log(dato))
            .catch(e => console.log(e))
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('command no reconocido');
        break;
}
//console.log(argv2);
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];





// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// console.log(module);