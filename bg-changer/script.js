const btn = document.getElementById("btn")

btn.addEventListener('click',() => {
    btn.style.color = document.body.style.background = randomBg();
    
});

function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`
}