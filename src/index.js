// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. 
// You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

// 1.0 Create the bridge using <ul class="cards"></ul>

// 2.0 renderCard(pokemon)
// - create an <h2>
//    - text comes from pokemon.name
// - create an <img>
//    - src ???
// - run renderStatsList() and append
// input: an object that represents a pokemon
// output: <li> element that looks like the the card template

const listEl = document.querySelector(".cards");

// console.log("The BRIDGE: ", listEl);

function renderCard(pokemon){

   const cardEl = document.createElement("li"); 
   cardEl.setAttribute("class", "card");

   const nameEl = document.createElement("h2");
   const extractedName = pokemon.name;
   nameEl.innerText = extractedName.toUpperCase();

cardEl.append(nameEl);

   const imgEl = document.createElement("img");
   imgEl.setAttribute("width", "256");
   imgEl.setAttribute("class" , "card--img");
   const imgSrc = pokemon.sprites.other["official-artwork"].front_default;
   imgEl.setAttribute("src" , imgSrc);

cardEl.append(imgEl);
return cardEl;

}

// const test = renderCard(data[0]);
//  console.log(test);
// listEl.append(test);

// 2.1 renderStatsList(stats)
// - The list of stats
// - For loop to render each stat from a "stats" array
//
// input: an array of stats from a pokemon object
// output: <ul> element with various <li> elements

function renderList(array){
const ulEl = document.createElement("ul");
ulEl.className = "card--text";

for (let i = 0; i < array.length; i++) {
   const stat = array[i];
   const firstI = stat.stat.name.toUpperCase();
   const secondI = stat.base_stat;

   const liEl = document.createElement("li");
   liEl.innerText = `${firstI}: ${secondI}`;

   ulEl.append(liEl);
   
}
return ulEl;
}

// const testT = renderList(data[0].stats)
// listEl.append(testT);

// console.log(testT);


// 2.2 renderPokemonCards(data)
// - A for loop on the array of pokemon
// - run renderPokemon()
// - append to the element from Step 1.0
// - input: an array of objects that represent pokemon (data)
// - output: -


// const listEl = document.querySelector(".cards");

function renderPokemonCards(array) {

    for (let i = 0; i < array.length; i++) {
const card = renderCard(data[i]);
const list = renderList(data[i].stats)

console.log(card);
console.log(list);

card.append(list);
listEl.append(card);

}
  return listEl;
}

const pokemonCard = renderPokemonCards(data);

console.log("Pokemon Card: ", pokemonCard);

// listEl.append(pokemonCard);