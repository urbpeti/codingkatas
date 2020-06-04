function narcissistic(value) {
  const sValue = value.toString()
  return Array.from(sValue).reduce((a, c) => a + Math.round(Math.pow(parseInt(c), sValue.length)), 0) === value;
}

module.exports = narcissistic;
