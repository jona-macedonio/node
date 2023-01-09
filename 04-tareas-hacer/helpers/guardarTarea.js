const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = (data) => {

    
    // ?Escribiendo en un archivo
    fs.writeFileSync(archivo, JSON.stringify(data));

};

const lerrDB = () => {

    // !fs.existsSync(archivo) verifica que un archivo exista
    if(!fs.existsSync(archivo)){
        return null;
    };

    // ?leendo un archivo
    const info =  fs.readFileSync(archivo,{encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data;
};

module.exports = {

    guardarDB,
    lerrDB

};