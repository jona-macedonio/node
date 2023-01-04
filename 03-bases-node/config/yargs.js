const colors = require('colors');
const argv = require("yargs")
    .option('b',{
         alias:"base",
         type:"number",
         demandOption: true,
         describe:"Es la base de la tabla de multiplicar".red

    })
    .option('l',{

        alias:"listar",
        type:"boolean",
        default:false,
        describe:"Muestra por impresion de pantalla la tabla a crear".red

    })
    .option("h",{
        alias:"hasta",
        type:"number",
        default:10,
        describe:"Estable el limite de la multiplicacion".red
    })
    .check((argv,options)=>{
        if( isNaN( argv.b ) ){

            throw 'La base tiene que ser un numero';
        };

        return true;

    }).argv;

//! Exportando el const argv por defecto
module.exports = argv;