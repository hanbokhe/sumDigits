function sumDigits(num) {
  // your code here
  var stringArray = num.toString();
  var sum= 0;
  for (var i = 0; i < stringArray.length; i++)
  {
      if (stringArray[i]=== "-")
      {
          sum += (-1 * Number(stringArray[i+1]));
          i++;
      }else if (typeof Number(stringArray) === 'number'){
          sum += Number(stringArray[i]);
      }
  }
  return sum;
}
