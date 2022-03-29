function daysinMonth()
{
    var date= new Date();
    var month= prompt("Enter a month");
    var year= date.getFullYear();
    days= new Date(year, month,0).getDate();
    console.log(days+" days in the  " +month+"th" + " month");

}
daysinMonth();

