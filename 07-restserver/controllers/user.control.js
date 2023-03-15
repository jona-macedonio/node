
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const userGet = (req, res) => {

    const {q,apikey,p = 1,limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        apikey,
        p,
        limit

    });
};

const userPut = (req, res) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id,
    });
};

const userPost =  async(req, res) => {


    // ! Pasar los parametros que vienen hacia al baked

    const {nombre,correo,password,role} = req.body;

    // !Haciendo una instacia del modelo de usuario pasando por parametro el body 

    const usuario = new Usuario({
        nombre,correo,password,role
    });

    // ! Verificar si el correo existe

    const existeEmail = await Usuario.findOne({correo});

    if (existeEmail) {
        return res.status(404).json({
            msg: "Ese correo ya esta registrado"
        });
    }

    // ! Encriptando la contraseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);

    // ! Guardando los datos enviado en la base datos
    await usuario.save();


    res.json({
        ok: true,
        msg: 'post API - controlador',
        usuario
    });
};

const userDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
};

const userPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
};



module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
};