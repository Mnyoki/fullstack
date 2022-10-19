let num1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let num2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
let cities = ['nairobi', 'nigeria', 'johaness bag', 'kingstone town', 'shashamane', 'tokyo', 'los angelos'];
let foods = new Array('shawarma', 'biriahni', 'pilau', 'mokimo');
let myarray = Array(num1, num2, cities, foods);
//console.log(foods);

// pushing elements into an array
let arrayResult = Array();
num2.forEach((value, index, array) => {
    let odd = value % 2;
    if (odd != 0)
    {
        console.log("index of: " + index + " is odd.");
        //arrayResult.push(odd);
    }

    else
    {
        //console.log("value of: " + value + " is even.")
        //arrayResult.push(odd);
    }
    console.log(arrayResult);
        
    
    //console.log(array);
    //console.log(index);
    //console.log(value);
});

//let count = 0;
let saveArray = new Array()
for (let count = 0; count <= 10; ++count)
{
    saveArray.push(count);
}
//console.log(saveArray);

mappedValue = saveArray.map((value, index, array) => {
    return value * 10;
});

reducedValue = saveArray.reduce((value, currentValue, currentIndex, array) => {
    return value + currentValue;
});

console.log("mapped values: " + mappedValue);
console.log("reduced values: " + reducedValue);
