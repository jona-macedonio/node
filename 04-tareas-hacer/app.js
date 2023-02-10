require("colors");

const { 
    inquirerMenu,
    pausa,
    leerInput,
    listDelete,
    confirmacionBorrar,
    completarTareas
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

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
            
                const des = await leerInput('Descriccion:'); 
                tareas.crearTarea(des);
                break;
            case '2':
                tareas.listado_Completo();
               /*  console.log(tareas._listado); */
                break;
            case "3":
                tareas.listadoEstado();
                break;
            case "4":
                tareas.listadoEstado(null);
                break;
            case "5":
               const  ids = await completarTareas(tareas.listadoArr);
               /* console.log(ids); */
               tareas.toggleTareas(ids);
            break;
            case "6":
                const id = await listDelete(tareas.listadoArr);
                if(id !== '0'){
                    const validar = await confirmacionBorrar();
                    if (validar) {
                        tareas.borrarTarea(String(id));
                        console.log('Tarea borrada');
                    };

                };
            break;
        };

        guardarDB(tareas.listadoArr);
        // console.log({opt});
        // console.log('\n');

        
        // const tarea = new Tarea('Comprar comida');
        
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);
        
        await pausa();
    
    } while (opt !== "0");


};

main();