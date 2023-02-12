require('dotenv').config(); // Configuramdo las variables de entorno
require('colors');
const {

    inquirerMenu,
    pausa,
    leerInput,
    ciudadList

} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

    const busquedas = new Busquedas();

    let opcionSelet;

    do {
        opcionSelet = await inquirerMenu();

        switch (opcionSelet) {
            case 1:

                // ? Mostrar mensaje

                const termino = await leerInput("Lugar: ");

                // ? Buscar los lugares

                const dataLugar = await busquedas.ciudad(termino);

                // ? Seleccionar el lugar 

                const lugarSeleccionado = await ciudadList(dataLugar);
                if (lugarSeleccionado === 0) continue;
                const showLugar = dataLugar.find(l => l.id === lugarSeleccionado);

                busquedas.agregarHistorial(showLugar.nombre);
                // ? Peticion a openWhater

                const dataclima = await busquedas.traerClima(showLugar.lat, showLugar.lng);


                // ? Datos del clima
                console.clear();
                console.log('\nInformacion de la ciudad\n'.white);
                console.log('Ciudad:', showLugar.nombre);
                console.log('Lat:', showLugar.lat);
                console.log('Lng:', showLugar.lng);
                console.log('Clima:',dataclima.desc);
                console.log('Temperatura:',dataclima.temp);
                console.log('Minima:',dataclima.min);
                console.log('Maxima:',dataclima.max);
                
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i)=>{

                    const idx = `${i + 1}.`.red;

                    console.log(`${idx} ${lugar}`);

                });
                break;

            default:
                break;
        };

        if (opcionSelet !== 0) await pausa();

    } while (opcionSelet !== 0);

};

main();