function roundedtenth(num){
  Math.round(num * 10) / 10;
};

const convertToCelsius = function(temp) {
  let celsius = (5/9)*(temp-32);
  return roundedtenth(celsius);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp*(9/5)+32);
  return roundedtenth(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
