const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/hello/:name', function (req, res) {
  const { params: { name } } = req
  res.send(`Hello ${name}!`)
})

module.exports.handler = serverless(app)
