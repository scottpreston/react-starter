function foo() {
  return a+b;
}

function bar(a=0,b=0) {
  return a+b;
}

function barbar(...args) {
  console.log(args.length);
  console.log(args);
}
//oldway
function old(options) {
  var a = options.a || 0;
}

//console.log(foo(1));
//console.log(bar(1));
barbar(1,3,3,4,5);
