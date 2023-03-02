const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const router = require('./router')

// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Your routes/router(s) should go here

// server.use('/theme', router)

server.get('/', (req, res) => {
  res.render('home')
})

module.exports = server