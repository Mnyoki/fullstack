$('#toggle').click(function ()
{
    $('#toggleInfo').toggle('slow', 'linear');
})

$('#fadeOut').click(function ()
{
    $('#toggleInfo').fadeOut('slow', 'linear');
})

$('#fadeIn').click(function ()
{
    $('#toggleInfo').fadeIn('slow', 'linear');
})

$('#fadeToggle').click(function ()
{
    $('#toggleInfo').fadeToggle('slow', 'linear');
})

$('#fadeTo').click(function ()
{
    $('#toggleInfo').fadeTo('slow', 0.5);
})


//slide
$('.para').css('background', 'yellow');

$('#slideUp').click(function () { $('.para').slideUp('slow') })

$('#slideDown').click(function () { $('.para').slideDown('slow') })

$('#slideToggle').click(function () { $('.para').slideToggle('slow') });


$('.diplay').hide();

$('#menu').click(function ()
{
    $('.dispaly').slideToggle( 'linear')
})