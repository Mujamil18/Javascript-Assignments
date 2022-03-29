function date_diff()
{
    var date1= new Date(prompt("Enter a First Date"));
    var date2= new Date(prompt("Enter a Second Date"));
    const result = Math.abs(date2 - date1);
    console.log(result);
}
date_diff();
