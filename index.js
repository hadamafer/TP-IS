'use strict';

var holam = require('./app/holamundo');

const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,res) => res.send(holam.holaTest()))

app.listen(port, () => console.log(port))