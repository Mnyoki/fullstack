import '/scripts/osc.js';
/*O('myobj').style.color = 'green';*/

S('myobj').background = 'rgba(12, 34, 56, 0.5';
S('myobj').opacity = 1;
S('myobj').color = 'white';



function O(myobj)
{
    return document.getElementById(myobj);
}

function S(myobj)
{
    return O(myobj).style;
}

function C(myclass)
{
    return document.getElementsByClassName(myclass);
}


let myarray = C('myclass');


for (i = 0; i < myarray.length; ++i)
{
    S(myarray[i]).textDecoration = "white";
    console.log(S(myarray[i]));

    function O(myarray)
{
    return (myarray[i]);
    }
    
    function S(myclass)
{
    return O(myarray).style;
}


}
    
