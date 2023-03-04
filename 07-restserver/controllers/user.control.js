
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

const userPost =  (req, res) => {

    // ! Pasar los parametros que vienen hacia al baked
    const {nombre,edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad,
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