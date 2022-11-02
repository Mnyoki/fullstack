//bounce();

function bounce()
{
    $('#drag')
        .css('font-size', '34px')

        .animate({ left: '370', top: '80px' }, 'slow', 'linear')
    
        .animate({ left: '540', top: '90px' }, 'slow', 'linear')

        .animate({ left: '470', top: '50px' }, 'slow', 'linear')

        .animate({ left: '245', top: '80px' }, 'slow', 'linear')
        
        .animate({ left: '+=50px', top: '-=50px' }, 'slow', 'linear')
    
        //.animate( { height: 'hide', with: 'toggle' }, 'slow', 'linear' )
    bounce();
}

$('#bounceBtn').click(function ()
{
    
    $('#drag').css('color', 'white')
    $('#drag').show('slow', 'linear')
    bounce()
})

$('#bounceBtn, #stopBtn').hover(function ()
{
    $(this).css('background', 'green')
},
    function () 
    {
        $(this).css('background', 'white')
        })

$('#stopBtn').click(function ()
{
    
    $('#drag').clearQueue()
})
//$('#drag').show('slow', 'linear')