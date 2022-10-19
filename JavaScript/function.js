

function displayItems()
 {
    for (j = 0; j < displayItems.arguments.length; ++j)
     {
        console.log(j + " : " + displayItems.arguments[j] + "\n")
        continue;
    }
}
 
displayItems("Dog", "Cat", "Pony", "Hamster", "Tortoise");

console.log(fixNames("the", "dallas", "cowboy"));

let test = Array("its", 'a', 'harsh', 'world');
test.push('test');
console.log(test);

function fixNames()
{
var s = ""
for (j = 0 ; j < fixNames.arguments.length ; ++j)
s += fixNames.arguments[j].charAt(0).toUpperCase() + fixNames.arguments[j].substr(1).toLowerCase() + " "
return s.substr(0, s.length-1)
}
 

let words = namesFix("the", "dallas", "COWBOY");
for (j = 0; j < words.length; ++j)
{
    console.log(words[j] + "\n");
}

function namesFix()
{
    var s = new Array();
    for (j = 0; j < namesFix.arguments.length; ++j)
        s[j] = namesFix.arguments[j].charAt(0).toUpperCase() + namesFix.arguments[j].substr(1).toLowerCase();
    
    return s;
}