// an immediately resolved promise
var p2 = Promise.resolve("foo");

// callback version
p2.then(function(res) {
  console.log(res);
});

// arrow function version
p2.then((res) => console.log(res));

var p = new Promise(function(resolve, reject) {
    //setTimeout(() => resolve(4), 2000);
    setTimeout(function(){
      resolve(4)
    }, 2000);
});

// arrow
p.then((res) => console.log(res));

// callback
p.then(function(res){
  console.log("hi this is res:" + res);
} );
