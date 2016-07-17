function isPrime(a) {
  for (var i = 2; i <= Math.sqrt(a); i++) {
    if (a%i == 0) {
      return false;
    }
  }
  return true;
}
module.exports = isPrime;
