const convertToCelsius = function(temp) {
  celcius = (temp - 32) * 5/9;
  return  Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * 9/5) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
