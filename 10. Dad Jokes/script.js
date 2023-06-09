const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const container = document.getElementById('container');
var rotation = 360;

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


//Make fetch request
async function generateJoke()
{


    container.style = `transform: rotateY(${rotation}deg`;
    rotation += 360;

      const config = {
        headers: {
            'Accept': 'application/json',
        },
    }
    
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();

    jokeEl.innerHTML = data.joke
}


/*Make fetch request
function generateJoke()
{
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }
    
    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerHTML = data.joke
    })
}*/