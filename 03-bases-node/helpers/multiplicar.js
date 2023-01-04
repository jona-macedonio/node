const fs = require("fs");
const colors = require('colors');
const crearArchivoTabla = (base = 5,m,limite) =>{

    return new Promise((resolve, reject) => {

    if(isNaN(base)){return reject("el dato no es un numero")};

    

    let salida = "";
    let consola = ""; 
    for (let index = 1; index <= limite; index++) {
    
    salida += `${base} * ${index} = ${base * index}\n`;
    consola += colors.bgMagenta(`${base} ${colors.blue('*')} ${index} ${colors.green('=')} ${base * index}\n`);
    
    };
    if(m!==false){
    console.log(colors.red('============================='));
    console.log(colors.red(`     Tabla del ${base}`));
    console.log(colors.red('============================='));
    console.log(consola);
    };
    let res = fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    resolve(colors.rainbow(`tabla-${base}.txt creado`));

    })
    

    };

    module.exports = {

        crearArchivoTabla,

    };