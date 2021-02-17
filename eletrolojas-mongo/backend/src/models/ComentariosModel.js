const { Schema, model } = require('mongoose')

const ComentariosSchema = new Schema({
  nome: {
    type: String
  },
  email: {
    type: String
  },
  msg: {
    type: String
  },
  data: {
    type: Date,
    default: new Date()
  }
})

const modelo = model('comentario', ComentariosSchema)

module.exports = modelo