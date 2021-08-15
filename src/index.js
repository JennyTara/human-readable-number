module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numberString = number.toString();

  if (number === 0) {
      return 'zero';
  }
  if (number < 20) {
      return ones[number];
  }
  
  if (number >= 20 && number < 100) {
    if (number === 20, 30, 40, 50, 60, 70, 80, 90 && number % 10===0){
      return dozens[numberString[0]];
    } else {
        return dozens[numberString[0]] + ' ' + ones[numberString[1]];
      }
    }       
  
  
  if (number >= 100 && number < 1000) {
      if (numberString[1] === '0' && numberString[2] === '0') {
        return ones[numberString[0]] + ' hundred';
  } else {
        return ones[numberString[0]] + ' hundred' + ' ' + toReadable(+(numberString[1] + numberString[2]));
    
  }
}
}