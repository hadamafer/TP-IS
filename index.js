'use strict';

var calculator = require('./app/calculator');

var a = 3;
var b = 5;

var v1 = `Suma ${a} + ${b} = ${calculator.suma(a,b)}`;


const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,res) => res.send(v1))

app.listen(port, () => console.log(port))