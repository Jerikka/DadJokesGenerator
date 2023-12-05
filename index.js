const btn = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apiKey = 'WbCTfTGrO+W3c+aogr0zcg==jXhREreel2JtL3Fk';

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey, 
    }
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit='


async function getJoke(){
    jokeEl.innerText = "Updating";
   const response = await fetch(apiURL, options);
   const data = await response.json();

   jokeEl.innerText = data[0].joke;
}

btn.addEventListener('click', getJoke)