canvas = $('#pad')[0];
context = canvas.getContext("2d");
pendown = false;

$('#pad').mousemove(function (event) {
    var xpos = event.pageX - canvas.offsetLeft;
    var ypos = event.pageY - canvas.offsetTop;

    if (pendown) {
        context.lineTo(xpos, ypos);
    }
    else {
        context.moveTo(xpos, ypos);
    }
    
    context.stroke();
});

$('#pad').mousedown(function () { pendown = true });
$('#pad').mouseup(function () { pendown = false });
//mouseenter && mouseleave === mouseover && mouseout

/*
$('.prep').mouseover(function ()
{
    $("#prepInfo").html("Its a fucking harsh world");
    $("#prepInfo").css('color', 'blue')
})

$('.prep').mouseout(function ()
{
    $('#prepInfo').html('A day to learn, a future to master')
    $("#prepInfo").css('color', 'blue')
})
*/

//chaining

$('.prep').mouseenter(function ()
{
    $("#prepInfo").html("Its a fucking harsh world");
    $("#prepInfo").css('color', 'black')
})

    $('html').css('font-size', '30px')
.mouseleave(function ()
{
    $('#prepInfo').html('A day to learn, a future to master')
    $("#prepInfo").css('color', 'blue')
})

$('.prep').hover(function () { $(this).css('color', 'blue') },
    function () { $(this).css('color', 'black') });

$('#form').submit(function ()
{
    if ($('#fname').val() == "" ||
        $('#lname').val() == "")
    {
        alert('Please enter both names');
        return true;
        }
})
    
$('#hide').hide(1000).show(1000);

$('#hideTxt').click(function ()
{
    $('#txt').hide('slow', 'linear');
})

$('#showTxt').click(function ()
{
    $('#txt').show('slow', 'linear');
})