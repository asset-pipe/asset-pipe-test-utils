'use strict';

var fizzbuzz = require('./');

fizzbuzz({s: 4, e: 20}, function (msg) {
    console.log(msg);
});
