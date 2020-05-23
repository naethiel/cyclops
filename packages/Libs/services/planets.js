export function getPlanet(id) {
  return fetch(`https://swapi.dev/api/planets/${id}`).then((r) => r.json());
}
