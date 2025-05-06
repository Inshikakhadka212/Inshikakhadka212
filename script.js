
const hamburger = document . getElementById ('hamburger');
const navlinks = document . getElementById ('navlinks');

hamburger.addEventListener('click', () => {
    navlinks.classList .toggle ('active');
});


const text = "Hi !! I'm  Ms.I";
const homepage =document.getElementById('homepage');
let index=0;

function type(){
    if(index < text.length){
        homepage.textContent +=  text.charAt(index);
        index++;
        setTimeout(type ,150);
    }
}

type();
