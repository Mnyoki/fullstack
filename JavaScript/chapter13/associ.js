erroHandler;
console.log("heolo " +
typeof (erroHandler));
a = 12;
b = 3;

console.log(a && b);

string = "the quick brown fox jumps over the lazy dog.";

with (string)
{
    console.log("the string is: " + length + " characters.");
    console.log("in upper case its: " + toUpperCase());
}

function erroHandler(message, url, line)
{
    out = "Sorry, an error was encountered .\n\n";
    out += "Error: " + message + "\n";
    out += "URL: " + url + "\n";
    out += "Line: " + line + "\n\n";
    out += "Click ok to continue.\n\n";
    console.log(out);
    return true;
}

let set = new Array();
for (number = 0; number <= 30; ++number)
{
    set.push(number);
}

set[23] = "munyoki"
se = Array("for", "a", "good", "life", "work", "smart");
set.push(se);
se.push("always");

console.log(set);
for (value = 1; value < 50; value++) {
    if (set[value] == 'smart')
    {
        console.log("found at location : " + value);
        break;
        
    } 
    else
    {
        console.log("value not found");
        break;
    }    
}
//console.log(st);

function test()
{
    for (j = 0; j < se.length; ++j) {
        console.log(se.length[3] + "\n");
        break;
    }
}
console.log(se.length);
console.log(test(se));
