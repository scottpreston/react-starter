let s = new Set()
s.add("hello").add("world").add("hello")
console.log(s.size)
console.log(s);

let m = new Map()
m.set("hello", new Date());
m.set("world", new Date())
console.log(m)
