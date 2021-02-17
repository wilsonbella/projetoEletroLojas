const app = require('./src/config/server')
const connection = require('./src/config/connection')
const Comentarios = require('./src/models/ComentariosModel')

app.get('/', async (req, res) => {
  const resultado = await Comentarios.find()

  res.json(resultado)
})

app.post('/', async (req, res) => {
  const { nome, email, msg } = req.body

  let resultado = await Comentarios.create({ nome, email, msg })

  res.json(resultado)
})