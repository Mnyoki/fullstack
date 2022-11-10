


$('#sum').click(function () {
    let num1 = parseInt(document.getElementById('first'));
    let num2 = parseInt(document.getElementById('scnd'));
    var add = num1 + num2;
    $('.res').html(`The sum of ${num1} and ${num2} is ${add}. `)
})

//$('.res').html('helo');
let num1 = parseInt(document.getElementById('first'));
console.log(num1 + 1);
