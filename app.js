'use strict'
const color = require('chalk')
const debug = require('debug')('front-end-siies:demo')

let msg = 'hola mundoooo'
debug(`El mensaje es ${color.yellow.bold(msg)}`)
