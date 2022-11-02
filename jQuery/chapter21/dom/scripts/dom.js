//$('.container').html($('.container') + 'its gonna be alright')
//alert($('.container').html())

$('#submit').click(function ()
{
    if ($('#num1').val() == '13' && $('#num2').val() == '14')
    {
        let sum = 13 + 14
        return $('#result').html('result: ' + sum)
    }
    else
    {
        return $('#result').html('result: Please input the correct credentials ')
        }

})

$('#link').text('Visit Yahoo')
$('#link').attr({ href: "http://yahoo.com", title: 'yahoo' })
//alert('The new HTMLis:\n' + $('#lynk').html())


$('.maniupTxt').prepend('You have to make it work. ')
$('.maniupTxt').css('color', 'blue')
$('.maniupTxt').append(' Thanks for never giving up. You have reall show some enomous courage. stay bold be bold. ')

$('.maniupTxt').before('<h1>Never limit yourself</h1><br/> <p>Tranquility - The ability to remain still when everything is fuckung falling apart</p>')
$('.maniupTxt').after('<hr>')

$('#remove').click(function ()
{
    $('#rmvTxt').remove()
})

$('#empty').click(function ()
{
    $('#emptTxt').empty()
})