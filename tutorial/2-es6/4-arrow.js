// old way
function adder(i) {
  return i + 1;
}
console.log(adder(1));

// as callback
function ajax(cb) {
  setTimeout(function() {
    console.log(cb(1));
  },1000);
}

// //invoke old way
ajax(adder);

// anon function
ajax(function(i) {  
  return i+1;
});

// // arrow version
ajax(i => i + 1);
