//alert('take care')
O('alert').style.fontSize = '23px'
S('alert').color = 'green'


let txt = document.getElementById('alert')
txt.style.lineHeight = '56px', wordSpacing = '30px'
S(txt).margin = '50px'
txt.innerText += ' take'
str = ' For all is vanity, that man is enslaves by the power of money '

 txt.innerHTML = str + txt.innerHTML 
let txtcls = document.getElementsByClassName('box')
txtcls[0].style.color = 'blue' 
txtcls[2].innerHTML += '<br> <p>never worry about anything coz if its bound to happen, it will definetly .</p>'
txtcls[2].style.color = 'green'

for (i = 0; i < txtcls.length; i++)
{
    txtcls[i].style.fontSize = '25px'
    txtcls[1].style.color = 'lime'
}
    
function ms1()
{
    btn.style.background = 'green'
}
function ms2()
{
    btn.style.background = 'white'
}


let btn = document.getElementById('btn1');
/*btn.onmouseover(function ()
{
    btn.style.background = 'green'
})

btn.onmouseout(function ()
{
    btn.style.background = 'blue'
})*/

function clic()
{
    let inf = O('info')
    inf.innerHTML = 'you clicked a button'
}

function heyy()
{
    let inf1 = O('info1')
    inf1.innerHTML = 'form submitted'
}

/*let sub = O('submit')
 let klik = function onclick()
{
    let inf1 = O('info1')
    inf1.innerHTML = 'form submitted'
}

klik(sub)*/
