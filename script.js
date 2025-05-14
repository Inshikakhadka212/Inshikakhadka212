
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


const projects = [
{
    Image: "./image/flower3.jpg",
    title : "Animated Navbar",
    description :"An animated navigation bar enhances user experience by providing smooth, visually appealing transitions and interactive elements as users explore a website. "

    },
    {
        Image:"./image/flower1.jpg",
        title:"HTML CSS",
        description:"HTML provides the structure and content of a webpage, while CSS styles and formats its appearance."
    },
    {
        Image:"./image/flower2.jpg",
        title:"Landing page",
        description:"Landing page is the first impression of a website a focused, visually engaging entry point designed to capture attention and drive affection."
    },
];

const container = document.getElementById("project-container");

   projects.forEach(project=> {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML= `
    <img src="${project.Image}" alt="${project.title}" class="project-img" / >
    <h2>${project.title}</h2>
    <p>${project.description}</p>
`;
container.appendChild(card);
   });

  