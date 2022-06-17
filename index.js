function reverseString(word){
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reverseWord =  reversedWordArray.join("");
  return reverseWord;
}

function isPalindrome(word) {
  const reverseWord = reverseString(word);

  if(word === reverseWord) {
    return true;

  }
  else{
    return false;
  }
  
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
/*
if the word is the same as the one in reverse, then return true
reverse the input string
if the input string is same as the reverse input

return true

else

return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
