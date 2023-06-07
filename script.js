let numOrStr = prompt('input number or string');
console.log(numOrStr)

//if(numOrStr === null) {
  //  console.log('ви відмінили')
//} else if( numOrStr.trim() === '' ) {
  //  console.log('Empty String');
//} else if( isNaN( +numOrStr ) ) {
//    console.log(' number is Ba_NaN')
//} else {
//    console.log('OK!')
//}


switch (numOrStr) {
    case null: 
    console.log('ви відмінили');
    break;
    case "": 
    console.log('Empty String');
    case isNaN( +numOrStr ):
    console.log('number is Ba_NaN');
    default:
    console.log('OK!');
}