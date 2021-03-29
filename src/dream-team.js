const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members === [] || 0) return false
  //console.log(members)
  let dreamTeam = members
    .map(item => { 
      if (typeof(item) === 'string'){
        item = item.match(/[A-Za-z]/)
        if (item !== null) return item.toString()
      } 
      })
    .toString()
    .toUpperCase()
    .split(',')
    .sort()
    .toString()
    .replace(/[,]/g,'')
  //console.log('Dream Team name : ' + (dreamTeam ))
  //console.log('= = = = = = = =\n')
  return dreamTeam ? dreamTeam : false
}

//console.log(createDreamTeam(['matt', 'ann', 'dmitry', 'max']), '// Should be ADMM')
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]), '// Should be LOO')
// console.log(createDreamTeam(123), '// Should be '+ false)
