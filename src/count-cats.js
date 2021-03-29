const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const matrixFlat = matrix.flat(Infinity)
  //console.log ('Backyard overview :\n' + matrixFlat.toString().replace(/[,]/g,' '))
  //console.log ('= = = = = = = = = = = = = = = =')
  let acc = 0 // accomulator
  matrixFlat.forEach(element => {
    //console.log('Element : ' + element)
    if (element === '^^') {
      acc++
      //console.log('Caught a cat!\nTotal cats caught : ' + acc)
    }
    //console.log ('- - - -')
  })
  //console.log(`Caught ${acc} cats in total.\n`)
  return acc
};