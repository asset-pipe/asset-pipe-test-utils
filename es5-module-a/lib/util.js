'use strict';

var isPrime = require('asset-pipe-test-es5c');

function hello() {
    return 'Hello world!';
}

function numb(num) {
    if (isPrime(num)) {
        return 'Not a prime number';
    }
    return 'A prime number';
}

module.exports.helloWorld = hello;
module.exports.helloNumber = numb;
