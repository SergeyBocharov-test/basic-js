const CustomError = require("../extensions/custom-error");

// This is a mess; I'm very tired; I want to sleep; but it kinda works and I have no idea what is this 'very tricky moment', I have 7 more parts of this task and ~16 hours...

//const linebreakBig = '================'
//const linebreakSmall = '----------------'
module.exports = function getSeason(date) {
  //console.log (linebreakBig)
  //console.log ('Date is (' + typeof(date) + ')\nWith value : (' + date + ')')
  season = ['Unable to determine the time of year!', 'spring', 'summer', 'autumn', 'winter']
  //console.log (linebreakSmall)

  function determineSeason(month){
    //console.log (linebreakSmall)
    switch(month){
      case 11 :
      case 0 :  
      case 1 :   
        //console.log('Season : ' + season[4])
        return season[4]
        break;
      case 2 :
      case 3 :
      case 4 :
        //console.log('Season : ' + season[1])
        return season[1]
        break;
      case 5 :
      case 6 :
      case 7 :
        //console.log('Season : ' + season[2])
        return season[2]
        break;
      case 8 :
      case 9 :
      case 10 :
        //console.log('Season : ' + season[3])
        return season[3]
        break;
      default:
        //console.log('!Throwing Error!')
        throw new Error(season[0])
        return season[0]
    }
  }
  if(typeof(date) === 'undefined' || date === 'undefined'){
    return season[0]
  }

  if(date === null){ determineSeason() }

  //console.log('Is date instance of Date?')
  //console.log(date instanceof Date)
  if (date instanceof Date) {
    //console.log('Month is : ' + date.getMonth() + '\nDeterminating the season...')
    return determineSeason(date.getMonth())
  }
  //console.log (linebreakSmall)

  function dateString(date){
    //console.log(linebreakSmall + '\ndate = ' + date)
      let month = date.match(/\d{2}$/) * 1
      //console.log('Determinating Season\nMonth is : ' + month)
      return determineSeason(month)
  }

  //console.log('Is date a String?')
  //console.log(typeof(date) === 'string')
  if (typeof(date) === 'string') {
    if (!(/[A-Za-z]/g).test(date)) {return dateString(month)}
    else return season[0]
  }
  //console.log (linebreakSmall)
  //console.log('Is date a Number?')
  //console.log(typeof(date) === 'number')
  if (typeof(date) === 'number') {
    return dateString(month.toString())
  }
  //console.log (linebreakSmall)
  //console.log('Is date an Object?')
  //console.log(typeof(date) === 'object')
  if (typeof(date) === 'string' && !(/[A-Za-z]/g).test(date)) {
    return dateString(month.flat(Infinity).toString())
  }
};