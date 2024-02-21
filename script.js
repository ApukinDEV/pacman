var z=0;
bounds = [];
pacmanpos = [];
wallshor = [];
key = 0;
let y=0,x=0;
function start(){
    box = document.getElementById('gamebox');
    bounds[0] = box.offsetTop;
    bounds[1] = box.offsetLeft;
    bounds[2] = box.offsetHeight;
    bounds[3] = box.offsetWidth;
    for(i=0;i<1;i++){
        wall=document.getElementById('obstaclehor'+(i+1));
        wallshor[i*4] = wall.offsetTop;
        wallshor[(i*4)+1] = wall.offsetLeft;
        wallshor[(i*4)+2] = wall.offsetHeight+5;
        wallshor[(i*4)+3] = wall.offsetWidth;
    }
    MyInterval = setInterval(move, 1)
}
function inbounds(direction){
    pacman = document.getElementById('pacman');
    pacmanpos[0] = pacman.offsetTop;
    pacmanpos[1] = pacman.offsetLeft;
    pacmanpos[2] = pacman.offsetHeight;
    pacmanpos[3] = pacman.offsetWidth;
    if(direction == "ArrowRight"){
        return(pacmanpos[1]+pacmanpos[3]<bounds[3]-10);
    }else if(direction == "ArrowLeft"){
        return(pacmanpos[1]>0);
    }else if(direction == "ArrowUp"){
        return(pacmanpos[0]>0);
    }else if(direction == "ArrowDown"){
        return(pacmanpos[0]+pacmanpos[2]<=bounds[2]-10);
    }else{
        return false;
    }
}
function nearwall(direction){
    pacman = document.getElementById('pacman');
    pacmanpos[0] = pacman.offsetTop;
    pacmanpos[1] = pacman.offsetLeft;
    pacmanpos[2] = pacman.offsetHeight;
    pacmanpos[3] = pacman.offsetWidth;
    if(
        ((pacmanpos[1]+pacmanpos[3]<wallshor[1] && pacmanpos[1]<wallshor[1]) ||  (pacmanpos[1]>wallshor[3]+wallshor[1] && pacmanpos[1]+pacmanpos[3]>wallshor[3]+wallshor[1]))&&((pacmanpos[0]>wallshor[0] && pacmanpos[0]+pacmanpos[3]>wallshor[0]) || (pacmanpos[0]<wallshor[0]+wallshor[2] && pacmanpos[0]+pacmanpos[3]<wallshor[0]+wallshor[2]))
    )
    {
        console.log("jestes w scianie");
        return(pacmanpos[1]);
    }else if(direction == "ArrowLeft"){
        return(pacmanpos[1]>0);
    }else if(direction == "ArrowUp"){
        return(pacmanpos[0]>0);
    }else if(direction == "ArrowDown"){
        return(pacmanpos[0]+pacmanpos[2]<=bounds[2]-10);
    }else{
        return false;
    }
}
function blocked(){
    if(key=="ArrowRight" && inbounds(key)){
        pacman.style="transform:rotate(0deg)"
        x++;
    }else if(key=="ArrowLeft" && inbounds(key)){
        pacman.style="transform:rotate(180deg)"
        x--;
    }else if(key=="ArrowUp" && inbounds(key)){
        pacman.style="transform:rotate(270deg)"
        y--;
    }else if(key=="ArrowDown" && inbounds(key)){
        pacman.style="transform:rotate(90deg)"
        y++;
    }
}
function keypress(){
    if(inbounds(event.key)){
        key=event.key
    }
}
function move(){
    nearwall(key);
    pacman = document.getElementById('pacman');
    blocked();
    pacman.style.top = y+'px';
    pacman.style.left = x+'px';
}
