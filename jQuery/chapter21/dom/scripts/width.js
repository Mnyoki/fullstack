$('#getDoc').click(function ()
{
    $('.results').html('Document Width: ' + $(document).width())
})

$('#getWin').click(function ()
{
    
    $('.results').html('Window Width: ' + $(window).width())
    //$('.results').html('Window outerWidth: ' + $(window).outerWidth(true))
})

$('#getDiv').click(function ()
{
    $('.results').html('Div Width: ' + $('#box').width())
})

$('#setDiv').click(function ()
{
    $('#box').width(150)
    $('.results').html('Div Width set to ' + $('#box').width())
})