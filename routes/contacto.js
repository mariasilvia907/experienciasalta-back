const {Router} = require ('express');
const router = Router();
const {getContactos, crearContacto} =require('../controllers/contacto');

router.route('/')
    .post(crearContacto)
    .get(getContactos)

module.exports = router;