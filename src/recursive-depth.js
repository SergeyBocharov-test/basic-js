const CustomError = require("../extensions/custom-error")

module.exports = class DepthCalculator {
  calculateDepth(array) {
    console.log('Array :\n'+array)
    return (Array.isArray(array) ? 1 : '')
    // Well, I hope i'll get back to it, because I've tried a few things without much success. Commiting this as init.
  }
}