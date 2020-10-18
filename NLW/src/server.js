//importar dependencia
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//inciando o express
const server = express()
server
    //utilizar body da required
    .use(express.urlencoded({extended: true}))
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //rotas da aplicação
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanages)
    .get('/read-more', pages.readMore)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar servidor
server.listen(5500)