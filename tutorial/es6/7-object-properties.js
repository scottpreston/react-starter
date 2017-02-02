var x=0, y=0, z=0;
var a = {x,y,z};
var b = {
  foo : function(a,b) {
    return a+b;
  }
}

var c= {
  foo(a,b) {
    return a+b;
  }
}

console.log(b.foo(1,1));
console.log(c.foo(1,1));
