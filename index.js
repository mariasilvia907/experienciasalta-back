const express = require("express");
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require("./database/config");

const app = express();

dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use(cors())

//app.use('/experiencias', require('./routes/experiencias.js'));
app.use('/contacto', require('./routes/contacto.js'));


app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`);
})
