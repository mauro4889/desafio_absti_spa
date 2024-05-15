export async function getRickAndMortyCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results.slice(0, 10);
  }
  