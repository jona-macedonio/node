const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // conectar a base de datos

        this.conectarDB();

        //Middlewares
        this.middlewares();
        this.routes();
    };

    async conectarDB(){

        await dbConection();

    };

    middlewares(){

        // ! CORS
        this.app.use(cors());
        // ! Parseo y lectura del body
        this.app.use(express.json());
        // ! Directorio Publico
        this.app.use(express.static('public')); 

    };

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user.routes'));

    };

    listen(){

        this.app.listen(this.port);

    };
};

module.exports = Server;