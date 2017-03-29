'use strict';

var isPrime = require('asset-pipe-test-es5c');

/**
 * Run through FizzBuzz for n integers
 *
 * @param {Number} config.s The number to start at
 * @param {Number} config.e The number to end at
 * @param {function} callback
 */

function fizzbuzz (config, callback) {
    for (var i = config.s; i <= config.e; i++) {
        var prime = '';
        if (config.p && isPrime(i)) {
            prime = ' Prime';
        }

        if (!(i % 15)) {
            callback('FizzBuzz');
            continue;
        } else if (!(i % 3)) {
            callback('Fizz' + prime);
            continue;
        } else if (!(i % 5)) {
            callback('Buzz' + prime);
            continue;
        }
        callback(prime.trim() || i);
    }
};

module.exports = fizzbuzz;
