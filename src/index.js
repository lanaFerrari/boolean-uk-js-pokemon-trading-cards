// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. 
// You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

//Data given: array - objects - objects - array
// 1.0 Create the bridge using <ul class="cards"></ul>

// 2.0 renderPokemonCard(pokemon)
// - create an <h2>
//    - text comes from pokemon.name
// - create an <img>
//    - src ???
// - run renderStatsList() and append
// input: an object that represents a pokemon
// output: <li> element that looks like the the card template

const rootEl = document.querySelector(".cards");

function renderPokemonCard(array, object){
let title = document.createElement('h2');
let img = document.createElement("img")
let cardText = document.createElement("li")

title.innerText = array.name
img.src = array.sprites["official-artwork"].front_default
// cardText = renderStats[i]
}



// 2.1 renderStatsList(stats)
// - The list of stats
// - For loop to render each stat from a "stats" array
//
// input: an array of stats from a pokemon object
// output: <ul> element with various <li> elements


function renderStatsList(array){
let statsList =[];

for (let i = 0; i < array.length; i++) {
const values = array[i].base_stat

statsList += `${ values } `
}
return statsList;
}

const test = renderStatsList(data[0].stats)
console.log(test)




// 2.2 renderPokemonCards(data)
// - A for loop on the array of pokemon
// - run renderPokemon()
// - append to the element from Step 1.0
// - input: an array of objects that represent pokemon (data)
// - output: -