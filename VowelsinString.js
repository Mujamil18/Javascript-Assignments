function countVowel(str)
{
  const vowels= str.match(/[aeiou]/g).length;
  return vowels;
}
const str=prompt("Enter a String");
console.log("Number of vowels in the String: " + countVowel(str));
// document.getElementById("demo").innerHTML="Number of vowels in the string: "+
countVowel(str);
