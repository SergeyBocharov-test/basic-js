const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || sampleActivity.match(/\D/g)) return false
  // I have no idea, will get to it later if possible
}

//console.log(dateSample('1'),'// Should be : ' + 22387 + ' or ' + 22392)
//console.log(dateSample('WOOT!'),'// Should be : ' + false)