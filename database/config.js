const mongoose = require('mongoose')

//Establecer conexión con el servidor
const dbConnection = async() => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log('Estableciendo conexión con el servidor')
    } catch (error) {
        console.log('Conexión no establecida')
    }
}

module.exports = {
    dbConnection
}