'use strict';

 function prime (num) {
    if (num < 4) {
        return true;
    }
    var max = Math.ceil(Math.sqrt(num));
    for (var i = 2; i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

module.exports = prime;
