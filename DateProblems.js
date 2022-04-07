//1. Function the get the current date
function check_string()
{
  let text="m";
  if(text.length===0){
    console.log(text.length===0);}
   else
    {
      console.log(text.length===0);}
}
check_string();

//2.Function to get the day s of a month
function daysinMonth()
{
    var date= new Date();
    var month= prompt("Enter a month");
    var year= date.getFullYear();
    days= new Date(year, month,0).getDate();
    console.log(days+" days in the  " +month+"th" + " month");

}
daysinMonth();

//3.Funtion to get the month name from a particular date
function monthName()
{
    const months= ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"];

    var date= new Date(prompt("Enter a Date"));
    console.log(months[date.getMonth()]);
    // const date = new Date(prompt("Enter a Date")); 
    // const month = date.toLocaleString('default', { month: 'long' });
    // console.log(month);
}
monthName();
