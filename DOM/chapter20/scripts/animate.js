SIZE = LEFT = 0
setInterval(animate, 100)
 function animate()
 {
 SIZE += 10
 LEFT += 3
 if (SIZE == 200) SIZE = 0
 if (LEFT == 600) LEFT = 0
 S('box').width = SIZE + 'px'
 S('box').height = SIZE + 'px'
 S('box').left = LEFT + 'px'
 }