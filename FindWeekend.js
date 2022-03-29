function find_weekend()
{
    var dt = new Date(prompt("Enter a Date"));
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
    {
        return "Weekend";
    } 
    else
    {
        return "Not a Weekend";
    }
}

console.log(weekend());
