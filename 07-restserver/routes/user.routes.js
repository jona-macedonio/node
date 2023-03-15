
const {Router} = require('express');
const { check } = require('express-validator');
const { userGet, 
        userPut,
        userPost,
        userDelete,
        userPatch } = require('../controllers/user.control');
const { validarCampos } = require('../middlewares/validar_campos');
const Role = require('../models/rol');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

// ! Validando que el correo sea un correo 

router.post('/',[
        check('nombre','El nombre es obligatorio').not().isEmpty(),//! El nombre no debe de ser vacio
        check('password','La contraseña tiene que tener una longitud mayor de 6 caracteres').isLength({min:6}),
        check('correo',"El correo no es valido").isEmail(),
        // check('role','No es un rol permitido').isIn('ADMIN_ROLE','USER_ROLE'),
        check('role').custom(async(role = "") =>{

                const existerRol = await Role.findOne({role});

                if (!existerRol) {
                  throw new Error(`el rol ${role} no esta registrado en la base de datos`);      
                };

        }),
        validarCampos
       
], userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);

module.exports = router;