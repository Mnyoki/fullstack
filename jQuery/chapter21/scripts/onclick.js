'use strict'

/*
function klick()
{
    //document.write('am clicked');
    S('clickEv').background = '-webkit-radial-gradient(center, rgb(148, 140, 140), rgb(115, 173, 115)';
    
}

function reverse()
{
    //document.write('am clicked');
    S('clickEv').background = '-webkit-radial-gradient(center, rgb(115, 173, 115), gray';
    
}


let newdiv = createElement('div')
newdiv.id = 'test'
document.body.appendChild(newdiv);
S(newdiv).color = 'black';
newdiv.innerHTML += "hello world"
*/

$('#click1').click(function ()
{
    $('.container').css('background', '-webkit-radial-gradient(center, rgb(148, 140, 140), rgb(115, 173, 115)');
    $('.container').css('color', 'black');
    
    $('#text').css('font-size', '34px')
    $('#text').css('position', 'relative' )
})

$('#click2').click(function ()
{
    $('.container').css('background', '-webkit-radial-gradient(center, rgb(115, 173, 115), gray');
    $('.container').css('color', 'black');
    $('#text').css('font-size', '16px');
    $('#text').css('position', 'relative');
    
})

$('#click1').mouseover(function ()
{
    $('#click1').css('cursor', 'grab')
})


$('#first').mouseover(function ()
{
    $('#first').css('cursor', 'grab')
})

$('#first').focus(function ()
{
    $('#first').css('background', 'white')
})

$('#first').blur(function ()
{
    $('#first').css('background', 'gray')
});

$('#password').mouseover(function ()
{
    $('#password').css('cursor', 'grab')
})

$('#password').focus(function ()
{
    $('#password').css('background', 'white')
})

$('#password').blur(function ()
{
    $('#password').css('background', 'gray')
});