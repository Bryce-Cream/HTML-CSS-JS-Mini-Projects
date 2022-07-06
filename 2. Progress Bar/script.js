//Variables we want from the DOM
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress_container = document.getElementById('progress-container');
let circles = document.querySelectorAll('.circle');


//Adding extra steps based on the input number field 

/*
 -> On blur? see what the number of steps is at? out or in of focus? 
 -> append until program_container.childElementCount (with circle class) is correct
 -> Update circles variables
 -> re-adujust max/min on blur 
 -> See if we can get removing to work
*/

const element = document.createElement("div");
element.classList.add('circle');
element.textContent = Number(progress_container.childElementCount); //Grab based on last child

progress_container.appendChild(element);

const circles = document.querySelectorAll('.circle');


let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length)
    {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1)
    {
        currentActive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive)
        {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (((actives.length-1) / (circles.length-1))*100)+'%';

    if(currentActive === 1)
    {
        prev.disabled = true;
    }
    else if(currentActive === circles.length)
    {
        next.disabled = true;
    }
    else
    {
        prev.disabled = false;
        next.disabled = false;
    }
}