const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active'); //Whatever panel is clicked add add the active class
    })
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}