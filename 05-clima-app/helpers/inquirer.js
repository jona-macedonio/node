require('colors');
const inquirer = require("inquirer");

const menu = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices:[
            {
                value: 1,
                name: `${'1.'.red} Buscar ciudad`,
            },
            {
                value: 2,
                name: `${'2.'.red} Historial`,
            },
            {
                value: 0,
                name: `${'0.'.red} Salir`,
            },
        ],
    },
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

    const { opcion } = await inquirer.prompt(menu);

    return opcion;

};

const pausa = async () => {

    await inquirer.prompt(btnEnter);

};

const leerInput = async (message) => {

    const question = [{

        type: 'input',
        name: 'introDate',
        message,
        validate(value) {

            if (value.length === 0) {
                return 'Por favor ingrese un valor';
            }
            return true;
        },

    },];

    const { introDate } = await inquirer.prompt(question);

    return introDate;

};

module.exports = {

    inquirerMenu,
    pausa,
    leerInput,

};

