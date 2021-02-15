const argv = require('yargs')
                    .options('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    })
                    .options('l',{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false
                    })
                    .options('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10
                    })
                    .check((argv,options) =>{
                        if ( isNaN(argv.b)) {
                            throw 'La base no es numerica'
                        }
                        return true
                    })
                    .argv

module.exports = argv;