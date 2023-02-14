
const http = require('http');

// ? Creando servidor

const server = http.createServer((request/*Lo que estan solicitando por el cliente*/, response /*  La respuesta del servidor*/)=>{

    console.log(request)

    // ! Content-Type especifica el tipo de respuesta
    // response.writeHead(200,{'Content-Type':'application/json'}); tipo json
    response.setHeader('Content-Disposition',' attachment; filename=lista.csv');
    response.writeHead(200,{'Content-Type':'application/csv'}); 


    /* const persona = {

        id:1,
        nombre: 'Jonathan',
        
    }; */

    // !Escribiendo un texto para la respuesta
    /* response.write(JSON.stringify(persona)); */
    response.write('id, nombre\n');
    response.write('1, Pedro\n');
    response.write('2, Miguel\n');
    response.write('3, Tomas\n');
    response.write('4, Jose\n');
    response.write('5, Luis\n');
    // ! Terminado la respuesta del servidor
    response.end();


});

// Corriwen
server.listen( 8080 );

console.log('escuchando el puerto', 8080);