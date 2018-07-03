'use strict'
const http = require('http')
const path = require('path')
const express = require('express')
const chalk = require('chalk')
const socket = require('socket.io')
const debug = require('debug')('front-end-siies:web')
const app = express()
const www = http.createServer(app)
const port = process.env.PORT || 3000
const io = socket(www)

io.on('connect', socket => {
  debug(`Socket .IO Client ${chalk.green.bold('connected')} with id: ${chalk.yellow.bold(socket.io)}`)
})

app.use(express.static(path.join(__dirname, '../public')))

function handleFatalError(){
  console.log(`${chalk.red.bold('Error Fatal: ')} ${chalk.red(err.message)}`)
  console.log('Error Stack', err.stack)
  process.exit(1)
}

process.on('uncauthtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

www.listen(port, () =>{
  console.log(`Servidor Web Express escuchando peticiones en puerto ${port}`)
})
