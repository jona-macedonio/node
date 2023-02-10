

require('colors');
const inquirer = require("inquirer");


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [

            {
                value: '1',
                name: `${'1.'.red} Crear tarea`,
            },
            {
                value: '2',
                name: `${'2.'.red} Listar tareas`,
            },
            {
                value: '3',
                name: `${'3.'.red} Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${'4.'.red} Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.red} Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.red} Borrar tarea`,
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`,
            },
        ],
    }
];

const btnEnter = [{
    type: "input",
    name: 'enter',
    message: `\nPresione ${'ENTER'.cyan} para continuar\n`,
},];

const inquirerMenu = async () => {

    console.clear();
    console.log("=========================".green);
    console.log("  Seleccione una opcion".yellow);
    console.log("=========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;


};

const pausa = async () => {

    await inquirer.prompt(btnEnter);

};
const leerInput = async (message) => {

    const question = [{

        type: 'input',
        name: 'desc',
        message,
        validate(value) {

            if (value.length === 0) {
                return 'Por favor ingrese un valor';
            }
            return true;
        },

    },];

    const { desc } = await inquirer.prompt(question);

    return desc;

};

const listDelete  = async (arrObjetc) => {

    const tareaModi = arrObjetc.map((t)=> {

        return {
            value: t.id,
            name: t.desc,
        };
    });

    tareaModi.unshift({

        value:'0',
        name:'Cancelar',
        
    });

    const listTareaDelete = [{

        type:'list',
        name:'id',
        message: '¿Seleccione la tarea borrar?',
        choices: tareaModi,
    }];


     const {id} = await inquirer.prompt(listTareaDelete);

     return id;

};

const confirmacionBorrar = async () =>{

    const confirmacion = [{

        type:'confirm',
        name:'confir',
        message: '¿Esta seguro de borrarlo?',
    }];

    const {confir} = await inquirer.prompt(confirmacion);
    
    return confir;
};

const completarTareas  = async (arrObjetc) => {

    const tareaModi = arrObjetc.map((t)=> {

            return {
                value: t.id,
                name: t.desc,
                checked:(t.completadoEn) ? true : false,
            };
    });



    const listTareaDelete = [{

        type:'checkbox',
        name:'ids',
        message: 'Selecciones',
        choices: tareaModi,
    }];


     const {ids} = await inquirer.prompt(listTareaDelete);
     
     return ids; 

};

module.exports = {

    inquirerMenu,
    pausa,
    leerInput,
    listDelete,
    confirmacionBorrar,
    completarTareas
};
