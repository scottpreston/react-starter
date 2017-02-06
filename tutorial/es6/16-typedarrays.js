// http://www.2ality.com/2015/09/typed-arrays.html

let u = new Uint8Array(1);
u[0] = 128;
console.log(u[0]);
u[0] = u[0] + 128;
console.log(u[0]);
