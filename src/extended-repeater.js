const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const rep = options.repeatTimes || 1
  const sep = options.separator || '+'
  let add = options.addition
  const addRep = options.additionRepeatTimes || 1
  const addSep = options.additionSeparator || '|'

  //console.log(
  //  `= = = = = = = =\n[Options]\nRepeat Times : ${rep}\nSeparator : ${sep}\nAddition : ${add}\nAddition Repaet Times : ${addRep}\nAddition Separator : ${addSep}\n- - - - - - - -`
  //  + '\nString : ' + str
  //)
  //console.log('- - - - - - - -')
  //string check
  if(typeof(str) === 'undefined'){str = ''}
  if (typeof(str) !== 'string') {
    if(str === null){str = 'null'}
    if(str === true){str = 'true'}
    if(str === false){str = 'false'}
    str = str + ''
  }
  //addition check
  if(typeof(add) === 'undefined'){add = ''}
  if (typeof(add) !== 'string') {
    if(add === null){add = 'null'}
    if(add === true){add = 'true'}
    if(add === false){add = 'false'}
    add = add + ''
  }
  let addStr = `${add}${addRep > 1 ? addSep : ''}`.repeat(addRep)
  // cleaning up end of the string
  if (addSep.length > 0 && addRep > 1){ 
    addStr = addStr.split('')
    for (let i = 0; i < addSep.length; i++) { addStr.pop() }
    addStr = addStr.join('')
  }
  //console.log('Addition :',addStr)
  let newString = `${str}${addStr}${rep > 1 ? sep : ''}`.repeat(rep)
  // cleaning up end of the string
  if (sep.length > 0 && rep > 1){
    newString = newString.split('')
    for (let i = 0; i < sep.length; i++) { newString.pop() }
    newString = newString.join('')
  }
  //console.log('New String:',newString)
  return newString
}
