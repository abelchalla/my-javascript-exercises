const add = function(a , b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multi = 1;
  for(let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  return multi;
};

const power = function(num, pow) {
  let i = 0;
  let answer = 1;
	while(i < pow){
    answer *= num;
    i++;
  }
  return answer;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
