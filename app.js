
const { option, boolean } = require('yargs');
const {multiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

console.log(argv.base,argv.listar,argv.hasta); 


multiplicar(argv.base, argv.listar, argv.hasta)
    .then((nombreArchivo) => {console.log(nombreArchivo,"creado") })
    .catch((err) => {console.log(err)});



