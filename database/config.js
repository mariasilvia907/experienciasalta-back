const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);

const URI = process.env.MONGO_URI; 

const dbConnection = async () => {
    try {
        mongoose.connect(URI, {
            useNewUrlParser: true,
        })

    console.log('Database connection successful');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectarme a la DB')
    }
}

module.exports ={
    dbConnection
}