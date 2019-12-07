let time = new Date()
let mit = sit = 0;
mit  = 59 - time.getMinutes()
sit = 59 - time.getSeconds()
let id0 =setInterval(seckill,1000)

function seckill() {
    sit--
    if(sit == -1){
    sit = 59
    mit--} 
    if(mit == -1){mit = 59
    } 

    document.getElementById('mit').innerHTML=mit +'分'
    document.getElementById('sit').innerHTML = sit +'秒'
}