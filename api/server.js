const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('<h1>Heroku Deployment</h1>')
})

server.get('/node-env', (req, res) => {
  res.json({ NODE_ENV: process.env.NODE_ENV })
})

module.exports = server
