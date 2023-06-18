// const url = 'https://pokeapi.co/api/v2/pokemon'

// const character = fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         data.results.forEach(character => {
//             console.log(character.name)
//         });
//     })


// let url = "https://pokeapi.co/api/v2/pokemon";

// const getPokemons = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.results;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const pokemons = getPokemons().then((data) => {
//   console.log(data);
// });