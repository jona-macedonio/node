/* Manejador de archivos */


const {crearArchivoTabla} = require("./helpers/multiplicar");
const argv = require('./config/yargs');
console.clear();


// ! Extrauendo argumentos pasasdos por consolas

//console.log(process.argv);

//? => process.argv extrae los argumentos pasados por consola

/* const [,,arg3="base=5"] = process.argv;
const [,base] = arg3.split("=");
console.log(base); */

/* console.log(process.argv); */
/* console.log(argv); */
console.log("base: yargs", argv.b);


// ! Extrauendo argumentos pasasdos por consolas
/* const num = "kdhskl";*/

crearArchivoTabla(argv.b,argv.l,argv.h)
.then(r=>{

    console.log(r);

})
.catch(err=>{

    console.log(err);

}); 

/* fs.writeFile(`tabla-${num}.txt`, salida,(err)=>{

    if(err) throw err;

    console.log(`tabla-${num}.txt creado`);

}); */

