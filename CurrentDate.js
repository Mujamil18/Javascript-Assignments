function displayDate()
{
    var date= new Date();
    console.log("Curren Date is: " + date.getDate()+"."+ (date.getMonth()+1)+ "." + 
                  date.getFullYear());
}
displayDate();
