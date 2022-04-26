/* Exercise 1:
  ============
  Write a JS program to check two numbers and return true if one of the number is 100
  or if the sum of two numbers is 100
*/

function checker (a, b) {
  if (a===100 || b === 100) {
    return true
  } else if (a+b===100) {
    return true
  } else {
    return false
  }
}

let x = 133, y = 45
if (checker(x, y)) {
  console.log('True <3')
} else {
  console.log('False :(')
}


/* Exercise 2:
  ============
  Write a JS program to get the extension of a filename
*/

const getExtension = (foo) => {
  return foo.slice(foo.lastIndexOf('.'))
}

console.log(getExtension('startrek.mp4'))


/* Exercise 3:
  ============
  Write a JS program to replace every character in a given string
  with the character following it in the alphabet
*/

const word = 'Awesome'


let charsArray = []
for (let i = 0; i < word.length; i++) {
  // convert letters to hexa code and plus 1
  const hexaChar = word.toLowerCase().charCodeAt(i)+1
  charsArray.push(String.fromCharCode(hexaChar))
}

console.log("Original text: ", word, " | Converted text: ", charsArray.join(""))


/* Exercise 4:
  ============
  Write a JS program to get the current date.
  Expected output: MM/DD/YYYY
*/

const date = new Date()
console.log(date.getMonth()+1,'/',date.getDate(),'/',date.getFullYear())


/* Exercise 5:
  ============
  Write a JS program to create a new string adding "New!" in front of the given string.
  If the given string begins with "New!" already then return original string
*/
const originalStr = "Ndsssdf!ssdfsdfds fds dsfds"

if (originalStr.slice(0,4) === "New!") {
  console.log(originalStr)
} else {
  const newWord = "New!"
  const finalWord = newWord.concat(originalStr)
  console.log(finalWord)
}