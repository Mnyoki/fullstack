

function convet() {

    let far = parseInt(document.getElementById('f'));
    let cess = parseInt(document.getElementById('c'));
    let result = far + cess;
    if (far > 0 || cess > 0) {
        document.write(`the results is ${result}`);
    } else {
        document.write('helo' + far + " " + cess)
    }

}

/*
if (far = 23)
{
    
    let conv = 5 / 9;
    console.log(conv);
    let change = far - 32;
    console.log(change);
    cess = change * conv;
    console.log (cess);
}
*/

