const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(resultado))
            .catch(err => console.log(err))
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo.green))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv.base);
//console.log('Limite ', argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(archivo))
//     .catch(err => console.log(err))