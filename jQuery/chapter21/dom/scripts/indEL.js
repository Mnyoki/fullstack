$('.container ul>li').first().css('text-decoration', 'underline')
$('ul li').last().css('font-style', 'italic')
$('ul>li').eq(1).css('font-weight', 'bold')
$('ul>li').filter(':odd').css('color', 'cyan')
$('ul>li').not('#new').css('color', 'blue')
$('ol>li').css('font-size', '29px')
$('ul>li').has('ol').css('color', 'lime')

$('.result').html($('ol>li').length)


$('.submit').click(function () {

    var elem = ''

    let password = $('#password').val()
    let repassword = $('#repassword').val()
    if (password.length > 8) {
        if (password === repassword) {
            $('.res').html('congrants')
        }
        else
            $('.res').html('fail pass')
    }
    else {
        $('.res').html('fail')

    }
clic()

})






    let clic = function () {
    var elem = ''
    if ($(this).parent().is('div')) {
        elem = 'div'
    }
    else {
        elem = 'span'
    }
    $('#info').html('you clicked a ' + elem)
}
$('button').click(clic)