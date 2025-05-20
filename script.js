
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
    description :"An animated navigation bar enhances user experience by providing smooth, visually appealing transitions and interactive elements as users explore a website. ",
    src:" https://inshikakhadka212.github.io/BMI/",

    },
    {
        Image:"./image/flower1.jpg",
        title:"HTML CSS",
        description:"HTML provides the structure and content of a webpage, while CSS styles and formats its appearance.",
        src:" https://inshikakhadka212.github.io/BMI/",
    },
    {
        Image:"./image/flower2.jpg",
        title:"Landing page",
        description:"Landing page is the first impression of a website a focused, visually engaging entry point designed to capture attention and drive affection.",
        src:" https://inshikakhadka212.github.io/BMI/",
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
    <a href="${project.src}">view project</a>
`;
container.appendChild(card);
   });




   document.getElementById("bmiForm").addEventListener("submit" ,
    function (e)
    {
        e.preventDefault();
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const result = document.getElementById("result");
        if(height || weight || height <=0) {
            result.textContent = "Only enter valid height annd weight !!";
            return;
        }
        const heightInMeter = height /100;
        const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
        let category = "";
        if (bmi < 18.5){
            category = " Underweight";
        }else if (bmi < 24.9) {
            category =" Normalweight";
        }else if (bmi < 29.9){
            category = " Overweight";
        }else{ 
            category =" Obesity";
        }
        result.textContent = `Your BMI is  ${bmi} ( ${category})`
    });

   

  