document.addEventListener('DOMContentLoaded', () =>{
const bird=document.querySelector('.bird')
const gameDisplay= document.querySelector('.game-container')
const ground=document.querySelector('.ground')
let birdleft= 220
let birdbottom=100
let gravity =2;
function startGame()
{
    birdbottom-=gravity
    bird.style.bottom= birdbottom + 'px';
    bird.style.left=birdleft + 'px';
}
let TimerId=setInterval(startGame,20)
function control(e)
{
    if(e.keyCode===32)
    {
        jump()
    }
}
function jump()
{
    if(birdbottom<500) birdbottom+=50
    bird.style.bottom=birdBottom + 'px'
}
document.addEventListener('keyup',control)
function generateObstacle()
{
    const obstacle =document.createElement('div')
    obstacle.classlist.add('obstacle')
    gameDisplay.appendChild(obstacle)

}
generateObstacle()
})