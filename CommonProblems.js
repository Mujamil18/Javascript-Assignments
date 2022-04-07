//1.print even numbers from 1 to 10
for(i=0; i<=10 ; i++)
{
  if(i%2===0)
  {
    console.log(i);
   }
}

//2.Table containing multiplication table
var number= prompt("Enter a number to display the multiplication table");
var limit=prompt("Enter the limit of multiplication table");
for(let i=1; i<=limit ; i++)
{
  console.log(number +" * " + i+" = " + (number * i));
}

//3.Length Converter function
function lengthConverter(km)
{
  var meter = km * 1000;
  return meter;
}
console.log(lengthConverter(km));

//4.Sum of numbers within array
const arr= [1, 2, 3, 4, 5];
let sum=0;
for(let i=0; i<arr.length; i++)
{
  sum= sum + arr[i];
}
// document.getElementById('demo').innerHTML= sum;
console.log(sum);

//5.Function to reverse the array
var array= [1, 2, 3, 4, 5].reverse();
document.write(array);
// document.getElementById('demo').innerHTML = array;
console.log(array);    

//6.Sort an array from lowest to highest
var array= [10, 4, 7, 9, 20];
console.log(array);
array.sort(function(a, b) { return a-b} );
console.log(array);

//7.Function that filters out negative numbers
var array=[2, -4, -5, 7, 4 -9, 1, -3 , 6, -7, -2];
console.log(array);
function filterNegative(array)
{
  for(let i=0; i<array.length; i++)
  {
    if(array[i] < 0)
      console.log(array[i]);
  }
  }
  filterNegative(array);
 array = array.filter(function(x) { return x > -1; })
 console.log(array);

//8.To remove the spaces in a string
let text1 ="     Hello World!    ";
let text2 = text1.trim();
//    document.getElementById("demo").innerHTML = text2;
console.log(text2);

//9.Return a boolean if a number is divisible by 10
var number;
function return_boolean(number)
{
number= prompt("Enter a number");
if(number%10===0)
{
  return true;
}
  else
  {
    return false;
  }
}
console.log(return_boolean(number));

//10.Return the number of vowels in a string
function countVowel(str)
{
 const vowels= str.match(/[aeiou]/g).length;
  return vowels;
}
const str=prompt("Enter a String");
console.log("Number of vowels in the String: " + countVowel(str));
document.getElementById("demo").innerHTML="Number of vowels in the string: "+
  countVowel(str);

