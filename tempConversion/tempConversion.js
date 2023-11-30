const convertToCelsius = function(temp) {
  let celcius = 0;

  celcius = (temp-32)*5/9;

  if(celcius === 0 ) return Math.round(celcius);
  else return Math.round(celcius*10)/10 ;
};

const convertToFahrenheit = function(temp) {
  let far = 0;

  far = (temp*9/5+32);

  if(far === 0) return far;
  else return Math.round(far*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
