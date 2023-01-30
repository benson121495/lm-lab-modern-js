// Instructions can be found in rest_parameters.md

function add(...nums) {
  // Add a loop here
  let total = 0;
  for (const addNum of nums) {
    total += addNum;
  }
  return total;
  // return a + b;
}
// add(1, 2);

// add(1, 2, 3, 4, 5);

// module.exports = add;
