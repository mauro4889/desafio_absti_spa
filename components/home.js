import { getRickAndMortyCharacters } from '../api.js';

export async function loadHome() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
    <h1>Personajes de Rick and Morty</h1>
    <ul id="character-list"></ul>
  `;

  const characters = await getRickAndMortyCharacters();
  const characterList = document.getElementById('character-list');
  
  characters.forEach(character => {
    const characterItem = document.createElement('li');
    characterItem.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <p>${character.name}</p>
      <p class="species">${character.species}</p>
    `;
    characterList.appendChild(characterItem);
  });
}
