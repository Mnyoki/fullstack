/*
$('.myclass').click(function ()
{
    $(this).slideUp()
})

$('.myclass').dblclick(function ()
{
    $(this).hide()
})

$('.myclass').css('background', 'yellow');

$('.container h2').css('color', 'green');
*/

$(document).keypress(function (event)
{
    key = String.fromCharCode(event.which)

    if (key >= 'a' && key <= 'z' ||
        key >= 'A' && key <= 'Z' ||
        key >= '0' && key <= '9')
    {
        $('#result').html('you pressed: ' + key);
        event.preventDefault();
        }
})