const express = require("express");
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require("./database/config");

const app = express();

dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use(cors())

app.use('/contacto', require('./routes/contacto.js'));


app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
