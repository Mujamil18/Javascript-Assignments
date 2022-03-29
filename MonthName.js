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
