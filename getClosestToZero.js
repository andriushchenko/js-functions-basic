function getClosestToZero() {
var closest = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (Math.abs(arguments[i]) < closest) {
      closest = arguments[i];
    }
  }
return closest;
}
module.exports = getClosestToZero;
