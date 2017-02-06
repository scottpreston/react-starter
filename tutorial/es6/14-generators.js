// also function*
function* genFunc() {
  console.log('First');
  yield; // (A)
  console.log('Second'); // (B)
}

let genObj = genFunc();
genObj.next();
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
genObj.next();
