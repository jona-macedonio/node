const Tarea = require("./tarea");

class Tareas {

    _listado = {'abc': 123};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => {

            /* console.log(key),'\n'; */

            const tarea = this._listado[key];

            listado.push(tarea);

        });

        return listado;
    };

    constructor() {

        this._listado = {};

    };

    cargarTareasFromArray(tareas = []){

        /* for (let x of tareas) {
            const {id} = x;

            this._listado[id] = x;
          }; */

        /* const tareasArr = Object.values(tareas);
        tareasArr.forEach(tarea=>{

            this._listado[tarea.id] = tarea;

        }); */

        this._listado = tareas;

        
    };

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    };

};


module.exports = Tareas;