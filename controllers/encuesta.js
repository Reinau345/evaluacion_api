const encuesta = require('../models/encuesta')

const getEncuesta = async (req,res) =>{
    const encuesta1 = await encuesta.find()
    // const {placa, color, precio} = req.query
    res.json({
        msg: 'ENCUESTA GET API',
        encuesta1
    })
}

const postEncuesta = async(req,res) =>{
    //Desestructuración de parámetros 
    const {nombreEncuesta, fecha,documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    //Crear el objeto
    const encuesta1 = new encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuesta1.save() //Guardar en mongodb 
    res.json({
        msg: 'ENCUESTA POST API',
        encuesta1,
    })
}

//Put actualiza todo 
const putEncuesta= async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero,empleado} = req.body
    const encuesta1 = await encuesta.findOneAndUpdate({documentoEncuestado: documentoEncuestado}, {nombreEncuesta:nombreEncuesta, fecha : fecha, documentoEncuestado : documentoEncuestado, nombreEncuestado:nombreEncuestado, edad :edad, genero : genero, empleado: empleado})
    res.json({
        msg: 'ENCUESTA API PUT',
        encuesta1
    })
}

//modificación parcial
const patchEncuesta= async(req,res) => {
    const {nombreEncuesta,documentoEncuestado} = req.body
    const encuesta1 = await encuesta.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {documentoEncuestado : documentoEncuestado})
    res.json({
        msg: 'ENCUESTA API PATCH',
        encuesta1
    })
}

//Eliminar
const deleteEncuesta = async(req, res)=>{
    const {nombreEncuesta} = req.query
  
    //Buscar y borrar
    const encuesta1= await encuesta.findOneAndDelete({ nombreEncuesta : nombreEncuesta}) //Antes de las llaves es el atributo 
    res.json({
        msg:'ENCUESTA DELETE API',
        encuesta1
    })
}

module.exports = {
    getEncuesta, 
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta
}