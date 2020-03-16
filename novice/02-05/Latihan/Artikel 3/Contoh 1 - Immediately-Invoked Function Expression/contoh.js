//Module starts
(function (window) {
    
    var sum = function (x, y) {
        return x + y;
    }

    var sub = function(x, y) {
        return x - y;
    }

    var math = {
        findSum: function(a, b) {
            return sum(a ,b);
        },
        findSub: function(a, b) {
            return sub(a, b);
        }
    }

    window.math = math;
})(window);

//module ends
console.log(math.findSum(1, 2));
console.log(math.findSub(1, 2));


