console.log('14-sum-of-arguments');

function sumOfArguments(...items){
  // rest operator converts anything passed as an array
  console.log('current items/values to add:', items);
  return items.reduce((n1, n2) => n1 +n2);
}

console.log('Sum:', sumOfArguments(10, 4, 8, 2, 6));
// console.log('Sum:', sumOfArguments([10, 4, 8, 2, 6]));