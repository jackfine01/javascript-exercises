function roundedtenth(num){
  Math.round(num * 10) / 10;
};

const convertToCelsius = function(temp) {

  return roundedtenth(temp);
};

const convertToFahrenheit = function(temp) {
  
  return roundedtenth(temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
