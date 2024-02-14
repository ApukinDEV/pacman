var z=0;
bounds = [];
pacmanpos = [];
key = 0;
let y=0,x=0;
function start(){
    box = document.getElementById('gamebox');
    bounds[0] = box.offsetTop;
    bounds[1] = box.offsetLeft;
    bounds[2] = box.offsetHeight;
    bounds[3] = box.offsetWidth;
}
function keypress(){
    if(event.key=="ArrowRight" && pacmanpos[1]+pacmanpos[3]<bounds[3]-10){
        key=event.key
    }else if(event.key=="ArrowLeft" && pacmanpos[1]>0){
        key=event.key
    }else if(event.key=="ArrowUp" && pacmanpos[0]>0){
        key=event.key
    }else if(event.key=="ArrowDown" && pacmanpos[0]+pacmanpos[2]<bounds[2]-10){
        key=event.key
    }
    console.log(key);
}
setInterval(move, 5)
function move(){
    pacman = document.getElementById('pacman');
    pacmanpos[0] = pacman.offsetTop;
    pacmanpos[1] = pacman.offsetLeft;
    pacmanpos[2] = pacman.offsetHeight;
    pacmanpos[3] = pacman.offsetWidth;
    console.log(bounds)
    if(key=="ArrowRight" && pacmanpos[1]+pacmanpos[3]<bounds[3]-10){
        x++;
    }else if(key=="ArrowLeft" && pacmanpos[1]>0){
        x--;
    }else if(key=="ArrowUp" && pacmanpos[0]>0){
        y--;
    }else if(key=="ArrowDown" && pacmanpos[0]+pacmanpos[2]<bounds[2]-10){
        y++;
    }
    pacman.style.top = y+'px';
    pacman.style.left = x+'px';
}