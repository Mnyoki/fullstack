/*let helleEl = document.getElementById("hello");
let text = "Hello world";
helleEl.textContent = text;
console.log(helleEl.innerText);*/
//document.write("Hello World")-->
let hi;
let name = "Munyoki!"
let helo = "\"helo\"";
console.warn(helo);
helo = hi;
hi = "pall!";
console.log("hi there : " + name + " hi there: " + hi);

//renaming of variables seems a hasle in javascript
//console.log(helo);
//console.warn(helo);

let fruits = ['oranges', 'bananas', 'pineapple', 'watermelon'];
console.log(fruits);
let vegetables = ['kales', 'cabbage', 'spinach'];
let numbers = ['2', '3', '4', '9', '78'];
let balanced = [fruits, vegetables, numbers];
console.log(balanced);
let j = "81";
j *= 1;
console.log(typeof (j))
t = 9 * 9;
t += j
console.log(typeof(t))
console.log(j + t);

if (name === j) console.log('equal');
else console.log("not equal");

if ((name != j) || (balanced == numbers))
{
    console.log("combination \n succesful");
}
else {
    console.log("you screwed");
    }

let num = 45;
num += 25;
console.log(num + " " + name);

console.log("you have " + num + " NEW messages.");

function sum(a)
{
    let add = a + num;
    add = num * a;
    return add;
}
console.log(sum(9));
//console.log(add); variable scope in a fuction can't be called any other place
 
function test()
{
    a = 124;  // Global variable
    let b = 345; //local variable
    var c = 876;  //local variable
    const d = 234; //local variable
    
   
}


test();
console.log('a: ' + a);

let urlEl = document.getElementById('mylink')
//console.log(typeof(urlEl))
let word = "The url is " + urlEl + "<br>";
document.write(word);
numlinks = document.links.length
//console.log(typeof (numlinks))
let histo = history.go(-3);
console.log(histo);