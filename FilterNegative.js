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
