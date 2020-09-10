const baseUrl = 'https://swapi.dev/api/';

export function getAllStarships() {
  return fetch(`${baseUrl}starships`)
    .then(res => res.json());
}
