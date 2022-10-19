String.prototype.mytrim = function()
{
 return this.replace(/^\s+|\s+$/g, '')
}

console.log("helo world".mytrim());

balls = {"golf": "Golf balls, 6",
"tennis": "Tennis balls, 3",
"soccer": "Soccer ball, 1",
"ping": "Ping Pong balls, 1 doz"}
for (ball in balls)
    console.log(ball + " = " + balls[ball] + "<br>");

    checkerboard = Array(
        Array(' ', 'o', ' ', 'o', ' ', 'o', ' ', 'o'),
        Array('o', ' ', 'o', ' ', 'o', ' ', 'o', ' '),
        Array(' ', 'o', ' ', 'o', ' ', 'o', ' ', 'o'),
        Array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
        Array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
        Array('O', ' ', 'O', ' ', 'O', ' ', 'O', ' '),
        Array(' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O'),
        Array('O', ' ', 'O', ' ', 'O', ' ', 'O', ' '))
        document.write("<pre>")
        for (j = 0 ; j < 8 ; ++j)
        {
        for (k = 0 ; k < 8 ; ++k)
        document.write(checkerboard[j][k] + " ")
        document.write("<br>")
        }
document.write("</pre>");

function isBigger(element, index, array)
{
    let value = element > 10;

    return value;
}

result = [2, 4, 8, 1, 42].some(isBigger);

document.write(result);
       
let softSports = Array("football", "tennis", "baseball");
let physicalSport = Array("rugby", "hockey", "judo");

let sport = softSports.concat(physicalSport);
console.log(sport);
document.write(sport.join( " "))