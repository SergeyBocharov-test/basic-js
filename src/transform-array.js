const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)){throw new Error('Input is not an arrayay')}
  if (array.length === 0){return array}
  const reConSeq = new RegExp ('(--discard-next)+|(--discard-prev)+|(--double-next)+|(--double-prev)+','g') // RegExp any Control Sequence
  if (array.toString().search(reConSeq) === -1){
    //console.log('test :',array.toString().search(reConSeq))
    //console.log('No Control Sequences was found')
    return array
    }

  let newArray = []

  function executeConSeq(i){
    switch (array[i]){
      case '--discard-prev':
        console.log('Executing Control Sequence "discard-prev"')
        if (i>1){
          // special skip
          if (typeof(array[i-2]) === 'string'){
            if (array[i-2] === '--discard-next'){
              //console.log('Previous value was discarded\nSkipping')
              return i
            }
            //if (array[i-2] === '--double-next'){
            //  console.log('Previous value was doubled')
            //  newArray.pop()
            //  return i
            //}
          }
        }
        if (i>0) {
          newArray.pop()
        }
        else {
          //console.log('i <= 0 \nDoing nothing')
        }
        return i
        break
      case '--double-prev':
        //console.log('Executing Control Sequence "double-prev"')
        if (typeof(array[i-2]) === 'string'){
          if (array[i-2] === '--discard-next'){
            //console.log('Previous value was discarded\nSkipping')
            return i
          }
        }
        if (i>0) {newArray.push(array[i-1])}
        else {
          //console.log('i <= 0 \nDoing nothing')
        }
        return i
        break
      case '--discard-next':
        //console.log('Executing Control Sequence "discard-next"')
        if (i<array.length) {}
        else {
          //console.log('i is at the end of Array \nDoing nothing')
        }
        //console.log('i + 1')
        return ++i // making it skip next element
        break
      case '--double-next':
        //console.log('Executing Control Sequence "double-next"')
        if (i<array.length-1) {newArray.push(array[i+1])}
        else {
          //console.log('i is at the end of Array \nDoing nothing')
        }
        return i
        break
      default:
        //console.log('"' + array[i] + '" is not a valid Control Sequence')
        return i
    }
  }
  let i = 0
  do {
    const element = array[i]
    //console.log('- - -\n' + i,':',element)
    if(typeof(element) === 'string' && (element.includes('--'))){
      i = executeConSeq(i)
      //console.log('Recieved i = ' + i)
    }
    else if (element !== 'undefined') {newArray.push(element)}
    else {
      //console.log('!Element is undefined!\nPushing undefined.')
      newArray.push([])
    }
    i++
  } while (i < array.length);
  // Why "do while" instead of "For"? I had some odd problems with "For" and I went for this.
  return newArray
}
