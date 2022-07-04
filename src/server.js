require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express();
server.use(cors())
server.use(bodyParser.urlencoded({extends:false}))


server.use('/api', routes)
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: "http://localhost:${process.env.PORT}"`)
})
//bodyParser modulo para converter uma requisição para varios formatos

//arquivo para ler a variavel de ambiente do sistema