const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

let max = result1;
let min = result1;

if (result2 > max) {
  max = result2;
}
if (result3 > max) {
  max = result3;
}
if (result4 > max) {
  max = result4;
}

if (result2 < min) {
  min = result2;
}
if (result3 < min) {
  min = result3;
}
if (result4 < min) {
  min = result4;
}

console.log(`Max: ${max}`);
console.log(`Min: ${min}`);
