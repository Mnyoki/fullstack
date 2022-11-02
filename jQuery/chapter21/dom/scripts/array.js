pets = 
{
    Scratchy: 'Guinea Pig',
    Squeeky: 'Guinea Pig',
    Fluffy: 'Rabbit',
    Thumper: 'Rabbit',
    Snoopy: 'Dog',
    Tiddles: 'cat'
}

pet = ['sheep', 'dog']
pet.push('cow')
pet.push('pets')


//$('.results').html('array of pets: ' + pet.join(' '))

guineapig = []

$.each(pets, function (name, type)
{
    if (type == 'Guinea Pig')
    {
        guineapig.push(name)
        }
})

$('.info').html('The guinea gid names are: ' + guineapig.join(' ')) 





let myarray = new Array()

myarray.push('cow')

$('.submit').click(function ()
{
    if ($('#inp').val().length > 0)
    {
        var ty = $('#inp').val()
        var res = myarray.push(ty)
        $('.feed').html(res)

        //$('.feed').html('helo')
    }
    else
    {
        $('.feed').html('myarray <br>' + myarray)
    }
    
})
