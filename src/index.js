module.exports = function reverse (n) {
  let result = '';
  for (let i = 0; i < String(n).length; i++) {
    if(String(n)[i] !== '-') result = String(n)[i] + result;
  }
  console.log(result)
  return +result;
}
