'use strict';

var calculator = require('./app/calculator');

var a = 3;
var b = 5;

var v1 = `Add ${a} + ${b} = ${calculator.add(a,b)}`;
var v2 = `Minus ${a} + ${b} = ${calculator.minus(a,b)}`;
var v3 = `Multiply ${a} + ${b} = ${calculator.multiply(a,b)}`;
var v4 = `Divide ${a} + ${b} = ${calculator.divide(a,b)}`;

const express = require('express')

const app = express()

const port = 8000

app.get('/', (req,res) => res.send(v1+ "<br/>" +v2+ "<br/>"+v3 +"<br/>"+v4))

app.listen(port, () => console.log(port))