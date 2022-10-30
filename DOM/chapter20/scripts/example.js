
S('test').opacity = 1;
S('test').fontWeight = 'bold';
S('test').fontSize = '34px';

S('test').color = 'black';
S('test').margin = '30px';
S('test').cursor = 'pointer'
console.log("consistency");

S('test1').color = 'blue';


myarray = C('info')

for (i = 0; i < myarray.length; ++i)
    {
    S(myarray[i]).fontSize = '34px'
    S(myarray[1]).color = 'gray'
    S(myarray[2]).letterSpacing = '24px'
    S(myarray[i]).position = 'relative'
    S(myarray[i]).alignItems = 'center'
    S(myarray[i]).justifyContent = 'center'
    S(myarray[i]).textAlign = 'center'
    

}

console.log(window.innerWidth);
console.log(window.sessionStorage);

 O('img1').onmouseover = function() { this.src = 'imgs/wireframe.jpg' }
 O('img1').onmouseout = function() { this.src = 'imgs/code.jpg' }
S('img1').position = 'relative';
S('img1').left = '400px';
S('img1').marginBottom = '40px'
