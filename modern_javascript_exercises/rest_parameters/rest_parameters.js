// Instructions can be found in rest_parameters.md

function add(...nums) {

  let total = 0;
  for (const addNum of nums) {
    total += addNum;
  }
  return total;
}


add(1, 2, 3, 4, 5);

module.exports = {add};
