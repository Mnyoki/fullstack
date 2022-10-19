//checking if a number is complimentary, even, odd, prime:

let number = parseInt(prompt("enter a number to test it taxa"));
if (number <= 0)
{
    document.write("complementary number!")
}
else if (number % 2 == 0)
{
    document.write(number + ": even number, " + "<br>" );
}
else
{
    document.write(number + ": Odd number, "
        + "<br>");
}
    
function prime(number)
{
    if (mode != 0)
    {
        for (value = 2; value < number; ++value)
        {
            var mode = number % value;
            
        }
        document.write("prime");
      }
}
let funcfeed = prime(number);
document.write(funcfeed);