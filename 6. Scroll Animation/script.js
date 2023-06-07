const boxes = document.querySelectorAll(".box");


window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const deathPlane = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //Gets top of each individual box

        //Check if boxtop crosses deathplane
        if(boxTop < deathPlane)
        {
            box.classList.add('show');
        }
        else
        {
            box.classList.remove('show');
        }
    })
}