// Returns the desired index in reverse order
function getDigit(num, dig) {
  const converted = num
    .toString()
    .split('')
    .reverse();
  return converted[dig];
}
// Returns number of digits in number
function digitCount(num) {
  const str = num.toString();
  return str.length;
}
// Returns digit length of longest number in array
function mostDigits(arr) {
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toString();
    if (str.length > max) {
      max = str.length;
    }
  }
  return max;
}
