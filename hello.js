//const {add, sub} = require('./math.js'); // for access math files 
const math = require('./math'); // for access math files
//console.log("math value is ", add(2,5), sub(4,5)); this is one way to calculate the value

console.log("math value is ",math);
console.log("math value is ",math.add(2,5),math.sub(4,5));
