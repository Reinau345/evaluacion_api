const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const {dbConnection} = require('../database/config') //Vincular la conexión

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.port //Puerto de la aplicación
        this.clientesPath = '/api/encuesta'
        this.middlewares() //Para incluir funcionalidades a la api
        this.routes() //Para incluir la ruta
        this.conectarDB() 
    }

    conectarDB() { //Esperando la respuesta del servidor
        dbConnection() //Sin await no espera respuesta
    }

    middlewares() { //Otras funcionalidades
        this.app.use( cors() )
        this.app.use( express.static('public') )
        this.app.use( express.json() ) //Permite recibir peticiones de tipo json

    }

    routes() { //Rutas de la aplicación
        this.app.use(this.clientesPath, require('../routes/encuesta'));
    }

    listen() {
        this.app.listen(this.port, (req, res) => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

}

//Exportar las funciones
module.exports = Server 
