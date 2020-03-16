(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        //CommonJS
        module.exports = factory();
    } else {
        // Script tag import i.e., IIFE
        root.returnExports = factory();
  }
}(this, function () {
    var sum = function(x, y){
        return x + y;
    }

    var sub = function(x, y){
        return x - y;
    }

    var math = {
        findSum: function(a, b){
            return sum(a,b);
        },

        findSub: function(a, b){
            return sub(a, b);
        }
    }

    return math;
}));