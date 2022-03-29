function upper_case(str)
{
    regexp = /^[A-Z]/;
    if(regexp.test(str))
    {
        console.log("First charcter is upper case");
    }
    else
    {
      console.log("First charcter is not an upper case");
    }
 }
upper_case("Mujamil");
upper_case("mujamil");
