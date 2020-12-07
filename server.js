// importar o express
const express = require ('express')
const bodyParser = require('body-parser')

//importando as rotas de aviso
const routerAvisos = require('./components/avisos/AvisosController')


// inicializar o express
const app = express()

// configurar a view engine e pasta publica
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// rotas
app.use(routerAvisos)

//configuração da porta
app.listen(3000)