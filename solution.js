//THIS STRING BEARS REPEATING
//repeat the string n times
const repeatStringNumTimes = (str, num) => {
    if (num < 0) return ""
    if (num === 1) return str // base case
    return str + repeatStringNumTimes(str, num - 1)
  }
  console.log(repeatStringNumTimes("abc", 3))
  
 