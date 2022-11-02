$('#two').siblings('.new').css('font-weight', 'bold')

$('ul').find('*.new').css('list-style', 'none')

$('li').parent('ul').css('color', 'green')

$('li').parent('ul').css('font-size', '24px')
//$('#two2').siblings().css('list-style', 'none')
$('#two2').parent('.test ul').children('li').css('list-style', 'none')

$('.test').css('font-weight', 'bold')
$('.test ul').children().css('font-style', 'italic')

$('.new1').parent('.test ul ').css('background', 'pink')

//$('#new2').nextUntil('#old').css('font-weight', 'bold')
$('#new2').nextAll().css('font-weight', 'bold')

$('.txt2').next().css('color', 'black')
$('.txt3').prevAll().css('font-size', '30px')
$('.txt2').after('<div class="txt5"><p>Keep pressing. the light is after the turnell.</p></div>')

$('.txt2').nextUntil('').css('font-size', '30px')

$('.test2').prev().css('color', 'black')
$('.test2').next().css('background', 'lime')