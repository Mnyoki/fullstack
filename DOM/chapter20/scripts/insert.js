let txtEl = document.getElementById('tbl1');

txtEl.innerHTML += "its been so long that you worked";
txtEl.style.color = "gray";
txtEl.style.textAlign = "center"
txtEl.style.wordSpacing = '24px';
txtEl.style.letterSpacing = '14px';
txtEl.style.lineHeight = "60px";

txtEl.innerText += "you have to be bold for you to take your throne. i know it seems that you are dissadvantage but trust me. believe you gat everything to get you out of your shitty situation";

txtEl.style.fontSize = '40px';
txtEl.textContent += 'you gotta be strong to constantly betting that wall that is preventing you from being great ';
S('tbl1').margin = '40px';
S('tbl1').columnCount = 3;
S('tbl1').columnGap = '1rem';
S('tbl1').columnRule = '1px solid #444'

S('table').color = 'black';
S('table').textAlign = 'center';
S('table').letterSpacing = '14px';
S('table').wordSpacing = '20px';
S('table').fontSize = "20px";
S('table').fontFamily = 'Arial';
S('table').fontWeight = '25px';
S('table').background = 'rgba(37, 37, 37, 0.2)';
S('table').margin = "0";
S('table').height = "700px";
S('table').display = "flex";
S('table').justifyContent = "center";
S('table').alignItems = "center";

O('h1').innerHTML = 'Grace'
O('h2').innerHTML = 'will'

O('table').innerHTML += "when you have nothing to fall back to, you cling to whats there";

document.title = "the dom"

newdiv = document.createElement('div');
newdiv.id = 'tbl2';
document.body.appendChild(newdiv);

S(newdiv).width = '100%';
S(newdiv).height = '700px';
S(newdiv).fontSize = '40px';
S(newdiv).position = 'relative';
S(newdiv).display = 'flex';
S(newdiv).justifyContent = 'center';
S(newdiv).textAlign = 'center';
S(newdiv).alignItems = 'center';
S(newdiv).background = 'gray';
S(newdiv).letterSpacing = '12px';
S(newdiv).wordSpacing = '18px';

newdiv.innerHTML = " Hunger can driver you to either being who you aught to or give in to some shitty.";
newdiv.innerHTML += 'have really tried to be consistent and learn as much as posible coz thats the only thing i am left with to start life as a web developer and a freelance.'

/*

alert('click to remove');
pnode = newdiv.parentNode;
pnode.removeChild(newdiv);
tmp = pnode.offsetTop;

*/

setTimeout(dothis, 5000)
function dothis()
{
    /*S('table').background = 'rgba(255, 255, 255, 0.2)';
    S('table').color = 'green';*/
    alert('wake up call');
}
//clearTimeout(setTimeout(dothis, 5000));

