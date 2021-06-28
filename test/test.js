'use strict';

var chai = require("chai");
var assert = chai.assert;
var holam = require('../app/holamundo');

describe('Testeando: ', function() {
    describe('Checkeando la funcion holaTest', function(){
        it('Checkeo del valor retornado usando: assert.equal ', function(){
            var result = holam.holaTest();
            assert.equal(result, 'hola mundo!');
        });
    });
})