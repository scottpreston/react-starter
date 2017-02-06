//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// symbols
var a = Symbol();
var b = Symbol();
console.log(a,b,a===b);

// unique over integer or string

var size = Symbol('size');
class Shape {
    constructor() {
        this[size] = 123;
    }
}

// metadata
var s = new Shape();
console.log(s, s.hasOwnProperty(size), s[size]);


// proxy

var target = {
  hello: function() {
    console.log('TARGET, hello world');
  }
};
var handler = {};

var proxy = new Proxy(target, handler);

proxy.hello = function () {
  console.log('PROXY, HELLO WORLD!');
};

target.hello();

// reflect

class Hello {
  set name  (name)  {
    this._name = name;
  }
  get name  ()       {
    return this._name;
  }
  hello() {
    console.log(`hello ${this._name}!`);
  }
}

let a2 = new Hello();
a2.name = "scott";
a2.hello();
console.log(a2.name);

var name = Reflect.get(a2, "name");
console.log(name);

Reflect.defineProperty(a2, "formalName", {value: "Mr. " + a2.name });

console.log(a2.formalName);
