const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async ()=>{

    const busquedas = new Busquedas();

    let opcionSelet;

    do {
        opcionSelet = await inquirerMenu();

        switch (opcionSelet) {
            case 1:
                
                // ? Mostrar mensaje
                const lugar = await leerInput("Lugar: ");
                await busquedas.ciudad(lugar);
                
                // ? Buscar los lugares

                // ? Seleccionar el lugar 

                // ? Datos del clima
                break;
            case 2:
                
                break;
        
            default:
                break;
        };

        if(opcionSelet !== 0) await pausa();

    } while (opcionSelet !== 0);

};

main();