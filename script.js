const explotionButton = document.getElementById('explotionButton');
const explotionContainer = document.getElementById('explotionContainer');

explotionButton.addEventListener('click', () => {
        createStarstWithDelay(60, 500);
        
});

function createStarstWithDelay(count, delay){
    createStars(count);
    setTimeout(() =>{
        createStars(count);
    
    }, delay);
}

function createStars(count){

    for(let i=0; i<count; i++){
        createStar();
    }
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    explotionContainer.appendChild(star);

    star.animate([{opacity: 1}, {opacity: 0}], 
        {duration: 2000, 
        //easing: 'ease-out',
        //fill: 'forwards'

        })
    
    ;

    //por si queremos que se elimine las "estrellitas" al final de la animacion
     star.addEventListener('animationend', () => {
     star.remove();
    });
}
