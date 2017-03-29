'use strict';

var fizzbuzz = require('asset-pipe-test-es5b');
var util = require('./util.js');

console.log(util.helloWorld());
console.log(util.helloNumber());
fizzbuzz({s:4, e:20}, function (mgs) {
    console.log(mgs);
});
