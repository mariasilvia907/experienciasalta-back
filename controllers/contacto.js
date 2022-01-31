const Contacto = require('../models/contacto')

const contactoFunciones = {};

contactoFunciones.crearContacto = async (req,res) => {
    const {empresa, correo, rubro, mensaje}= req.body;

    const nuevoContacto = new Contacto ({
        empresa: empresa,
        correo: correo,
        rubro: rubro,
        mensaje: mensaje,
    });
    await nuevoContacto.save();
    console.log(nuevoContacto);
    res.json ({message: 'Nuevo contacto creado'})
}


contactoFunciones.getContactos = async (req, res) => {
    const contact = await Contacto.find();
    res.json(contact);
};


module.exports = contactoFunciones;

