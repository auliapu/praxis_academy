var shape = {
    type : '',
    getType : function() { 
        return this.type;
    }
};

function Triangle(a,b,c) {
     this.type = 'triangle';
     this.a = a;
     this.b = b;
     this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
t.constructor === Triangle;
       
shape.isPrototypeOf(t);
//t.getPerimeter();
//t.getType();

for (let t in Triangle) {
    if (Triangle.hasOwnProperty(t)) {
      console.log(t);
    }
  }

[1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();
