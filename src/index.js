const serverless = require('serverless-http');
const express = require('express');

const app = express()
 
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/test', function (req, res) {
    res.send('Hello World Test!')
})

module.exports.handler = serverless(app);