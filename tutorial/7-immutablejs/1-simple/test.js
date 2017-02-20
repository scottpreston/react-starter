var Immutable = require('immutable');

let s = new Set()
s.add("hello").add("world")
console.log(s.size)
console.log(s);
s.add("hello1")
console.log(s.size)
console.log(s);

console.log('---- immutable set ----');
var set2 = Immutable.Set(['hello','world']);
console.log(set2.size)
console.log(set2);
set2.add('hello1');
console.log(set2.size)
console.log(set2);

console.log('---- maps ----');
let m = new Map()
m.set("hello", new Date());
console.log(m)
m.set("world", new Date())
console.log(m)

console.log('---- immutable maps ----');
let map2 = Immutable.Map({hello:new Date()});
console.log(map2);
map2.set("world", new Date());
console.log(map2);
