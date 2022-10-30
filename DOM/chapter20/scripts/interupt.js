//setInterval("showtime(O('time'))", 1000)
handle = setInterval("showtime(O('time'))", 1000)

function showtime(object)
{
    var date = new Date();
    object.innerHTML = date.toTimeString().substr(0, 8);
    
    
}
//clearInterval(handle);
//setting intervals
setTimeout("clearInterval(handle)", 5000)

S('tim').fontSize = '34px';
S('time').color = 'tomato';


setInterval("showday(O('day'))", 1000);



function showday(object)
{
    let day = new Date();
    object.innerHTML = day.toDateString();

}

S('dy').fontSize = '34px';
S('day').color = 'tomato';

let trillEl = document.getElementById('trill');
let trallEl = document.getElementById('trall');
let day = new Date();
trillEl.innerHTML = day.toDateString();
trallEl.innerHTML = day.toTimeString()

