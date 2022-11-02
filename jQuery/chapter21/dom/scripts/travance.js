$('li').parent().css('font-size', '30px')

$('#qoute1').parent('.qoutes').css('color', 'tomato')

$('.qoutes').parent('.container').css('margin', '0 200px 0 200px')
$('.qoutes').parent('').css('color', 'lime')

$('li').parent('ul').css('background', 'gray')
//$('li').parent('').css('list-style', 'none')

$('li').parent('.me1').css('list-style', 'none')
$('li').parent('#me2').css('list-style', 'none')

$('li').parent('.me3').after('<ul> <h1>Inseting elements after the parent</h1> <blockqoute> <p>Nothing worthwhile is given free</p> </blockqoute > <li>header</li> <li>body</li>  </ul > ')
    ('.me3').after().css('fontSize', '30px')
$('.me2').children('li').css('color', 'yellow')

$('#country').css('color', 'black')

//$(x).css('fontSize', '30px')

//$('#elem').css('color', "white")

//$('div').css('background', 'pink')

//$('#elem').parent().css('background', 'green')

$('.section1').parent('div').css('background', 'green')

$('h2').parent('').css('font-size', '28px')

$('#elem').parent($('')).after('<h1>Lots question that need some clarity.</h1><p>Studing is all about curiousity. You have to ask important question along the way. Who is there to ask. <em>Time is everything</em></p > ')
//$('#two').siblings('.new').css('color', 'lime')