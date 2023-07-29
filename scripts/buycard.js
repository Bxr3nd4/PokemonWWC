let url = "https://pokeapi.co/api/v2/pokemon";
let offset=0;


const getpokemon = async () => {
  let totalCards = document.querySelector(".showcard");
  let showMore = document.querySelector(".showmore");

  const res = await fetch(`${url}?offset=${offset}`);
  // console.log(res);
  // try {
  const data = await res.json();
  let nextLink;
  console.log(data.next)
  if (!res.ok) throw { status: res.status, statusText: res.statusText }
  data.results.forEach(async (pokemon) => {
    const respons = await fetch(pokemon.url);
    const dataPokemon = await respons.json();
    // console.log(respons)

    const [type1, type2] = dataPokemon.types.map(
      (typePokemon) => typePokemon.type.name
    );

    const container = document.querySelector('.container');

    let pokeCard = document.createElement('div');
    pokeCard.className = 'pokeCard';
    pokeCard.innerHTML = `
            <div class = "headerCard">
                <p>${dataPokemon.name}</p>
                <i class = "fa-sharp fa-regular fa-heart"></i>
            </div>

            <img class = "imgPoke" src = "${dataPokemon.sprites.other["home"].front_default}">
            <div class="buybtn">
                <p class="xp" >Exp ${dataPokemon.base_experience}</p>
                <button class="bcards">Buy</button>
            </div>

        `
    container.appendChild(pokeCard);

    pokeCard.setAttribute("type1", type1);
    pokeCard.setAttribute("type2", type2);

    let headerCard = document.querySelectorAll(".pokeCard");
    console.log(headerCard.length);
    console.log(data);
    console.log(data.next)
    nextLink = data.next ? `<a class="showcard" href="${data.next}"> Show more cards </a>` : "";

    showMore.innerHTML = nextLink;
  });

  console.log(data.next)

  //     }catch (error){
  //         console.log(error);
  //     }
}

getpokemon();

document.addEventListener("click", (e) => {
  if (e.target.matches(".showmore a")) {
    e.preventDefault();
    offset += 20;
    getpokemon(e.target.getAttribute("href"));
  }
}
)

const filter = document.querySelectorAll('.type');

filter.forEach((filterType) => {
  filterType.addEventListener("click", (event) => {
    event.preventDefault();
    const type = filterType.textContent.toLowerCase();
    filterByType(type);
  });
});

const filterByType = (type) => {
  const cards = document.querySelectorAll(".pokeCard");
  cards.forEach((card) => {
    const cardType1 = card.getAttribute("type1");
    const cardType2 = card.getAttribute("type2");

    if (type === "all" || cardType1 === type || cardType2 === type) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
};