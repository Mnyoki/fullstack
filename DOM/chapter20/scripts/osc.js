/*
function O(test)
{
    return document.getElementById(test);
}

function S(test)
{
    return O(test).style;
} 
*/

function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }

function S(i) { return O(i).style }

function C(i) { return document.getElementsByClassName(i) }





