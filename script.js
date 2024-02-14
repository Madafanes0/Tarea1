import Math from 'mathjs';
const explotionButton = document.getElementById('explotionButton')
const explotionContainer = document.getElementById('explotionContainer')

explotionButton.addEventListener('click', () => {
    for(let i=0; i<30; i++){
        createStar();
    }
});

function createStar(){
    const star =document.createElement('div');
    star.className.add('star');
    star.style.left=Math.random()*100+'vw';
    star.style.top=Math.random()*100+'vh';
    explotionContainer.appendChild(star);
    
    star.addEventListener('animationes', () => {
        star.remove();
    });

}
