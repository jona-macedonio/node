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

    borrarTarea(id=''){

        /* if(this._listado[id]){

            delete this._listado[id];

        }; */

        
        const new_Array = this._listado.filter(item => item.id !== id);
        
        this._listado = new_Array;

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

    listado_Completo(){

        
        let estado;
        this.listadoArr.forEach((t,index)=>{
            let iterador = index + 1;
            if(t.completadoEn == null){

                estado = "Pendiente" .red;
                console.log(`${String(iterador).magenta}. ${t.desc} :: ${estado}`);

            }else{

                estado = "Completada" .green;
                console.log(`${String(iterador).magenta}. ${t.desc} :: ${estado}`);

            };
        });

    };

    listadoEstado(completada = true){

        let iterador = 1;
       
        this.listadoArr.forEach((t)=>{

            const estado = (t.completadoEn) ? t.completadoEn : 'Pendiente'.red;
        
            if(t.completadoEn && completada){
                
                console.log(`\n${String(iterador++).magenta}. ${t.desc} :: ${estado}`);

            }else if(t.completadoEn == completada){

                
                console.log(`\n${String(iterador++).magenta}. ${t.desc} :: ${estado}`);
            };

        });

    };

};


module.exports = Tareas;