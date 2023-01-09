require("colors");

const { 
    inquirerMenu,
    pausa,
    leerInput
} = require("./helpers/inquirer");
// const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

const { guardarDB, lerrDB } = require("./helpers/guardarTarea");

/* const { mostrarMenu, pausa } = require("./helpers/mensajes"); */



const main = async()=>{

    let opt = "";
    const tareas = new Tareas();

    const tareasDB = lerrDB();

    if(tareasDB){

        tareas.cargarTareasFromArray(tareasDB);

    };

    await pausa();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
            
                const des = await leerInput('Descriccion:'); 
                tareas.crearTarea(des);
                break;
            case '2':
                console.log(tareas._listado);
                break;
        };

        /* guardarDB(tareas.listadoArr); */
        // console.log({opt});
        // console.log('\n');

        
        // const tarea = new Tarea('Comprar comida');
        
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);
        
        await pausa();
    
    } while (opt !== "0");


};

main();