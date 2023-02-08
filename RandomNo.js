const numbers = [];

for (let i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 900) + 100;
  numbers.push(randomNum);
}

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(`The minimum value is: ${minValue}`);
console.log(`The maximum value is: ${maxValue}`);
