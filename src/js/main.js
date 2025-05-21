"use strict";

const seriesList = document.querySelector(".js_seriesList");
const form = document.querySelector(".js_form");
const input = document.querySelector(".js_input");
const favouriteList = document.querySelector(".js_favouritesList");

const favourites = []; // ARRAY DONDE SE GUARDAN LAS MARCADAS COMO FAVORITAS

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchText = input.value.trim(); //RECOGE LA INF,LO LIMPIA,QUITA ESPACIOS Y SI NO ESTA VACIO LLAMA A LA FUNCION.
  if (searchText !== "") {
    searchSeries(searchText);
  }
});

function searchSeries(query) {
  const url = `https://api.jikan.moe/v4/anime?q=${query}`;

  fetch(url)
    .then((response) => response.json()) //BUSCA LAS SERIES EN LA API,HACE LA PETICION Y LA CONVIERTE EN JSON,AGREGA EL RESULTADO A LA VARIABLE SERIES.
    .then((data) => {
      series = data.data;
      renderSeries(); //ACTUALIZA LA LISTA
    });
}

let series = [
  {
    title: "Naruto",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
      },
    },
  },
  {
    title: "The Last: Naruto the Movie",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1491/134498.jpg",
      },
    },
  },
  {
    title: "Boruto: Naruto the Movie",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/4/78280.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden Movie 6 - Road to Ninja",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1620/94336.jpg",
      },
    },
  },
  {
    title: "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Ninpouchou Dattebayo!",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1231/134484.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden Movie 1",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1703/134493.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden Movie 2 - Kizuna",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1484/134494.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden Movie 4 - The Lost Tower",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1479/116734.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden Movie 5 - Blood Prison",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1500/134496.jpg",
      },
    },
  },
  {
    title: "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1114/134485.jpg",
      },
    },
  },
  {
    title:
      "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panic Dattebayo!",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1918/134487.jpg",
      },
    },
  },
  {
    title: "Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/6/77678.jpg",
      },
    },
  },
  {
    title: "Naruto Narutimate Hero 3",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/10/11244.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden - Sunny Side Battle",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1047/91638.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden - Shippuu! 'Konoha Gakuen' Den",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/5/51895.jpg",
      },
    },
  },
  {
    title: "Naruto Soyokazeden Movie",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/10/31573.jpg",
      },
    },
  },
  {
    title: "Road of Naruto",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1731/128787.jpg",
      },
    },
  },
  {
    title: "Boruto: Naruto Next Generations",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1091/99847.jpg",
      },
    },
  },
  {
    title: "Kamiusagi Rope x Boruto",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/3/88377.jpg",
      },
    },
  },
  {
    title: "Naruto x UT",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/3/30485.jpg",
      },
    },
  },
  {
    title: "Boruto: Naruto Next Generations Part 2",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1604/134068.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
      },
    },
  },
  {
    title: "Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1493/116732.jpg",
      },
    },
  },
  {
    title: "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/13/36475.jpg",
      },
    },
  },
  {
    title: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/11/20921.jpg",
      },
    },
  },
];

renderSeries();

function renderSeries() {
  seriesList.innerHTML = ""; //LIMPIA EL CONTENIDO

  series.forEach((item, index) => {
    //COGE LOS ELEMENTOS DEL ARRAY
    const li = document.createElement("li"); //CREA LA LISTA
    li.classList.add("series-card");
    li.innerHTML = `
      <img src="${item.images.jpg.image_url}" alt="${item.title}" class="series-image"/>
      <h3 class="series-title">${item.title}</h3>`;
    const isFavourite = favourites.some(
      //
      (favourite) => favourite.title === item.title
    );
    if (isFavourite) {
      li.classList.add("is-favourite");
    }
    li.addEventListener("click", () => {
      //AÑADIR O QUITAR LAS FAVORITAS
      toggleFavorite(index, li);
    });
    seriesList.appendChild(li);
  });
}

function toggleFavorite(index, listItem) {
  const item = series[index];
  const favIndex = favourites.findIndex((fav) => fav.title === item.title); //BUSCA SI LA SERIE ESTA EN FAVORITAS

  if (favIndex === -1) {
    //SI NO ESTA LA AÑADE Y LA PINTA
    favourites.push(item);
    listItem.classList.add("is-favourite");
  } else {
    favourites.splice(favIndex, 1); //SI ESTA LA ELIMINA Y QUITA EL ESTILO
    listItem.classList.remove("is-favourite");
  }

  localStorage.setItem("favourites", JSON.stringify(favourites)); //GUARDA EL ARRAY FAVOURITES EN EL LS

  renderFavorites(); //ACTUALIZA LA LISTA DE FAVORITAS
}

function renderFavorites() {
  //MUESTRA LAS SERIES QUE ESTAN EN FAVORITAS
  favouriteList.innerHTML = "";

  favourites.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("favourite-card");
    li.innerHTML = `
      <img src="${item.images.jpg.image_url}" alt="${item.title}" class="favourite-image"/>
      <h3 class="favourite-title">${item.title}</h3>
    `;
    favouriteList.appendChild(li); //AÑADE LA SERIE COMO HIJA DEL CONTENEDOR PRINCIPAL(UL)
  });
}

const favouriteFromLs = JSON.parse(localStorage.getItem("favourites")) || []; //SI EL VALOR QUE NOS DA ES NULL ENTONCES USA UN ARRAY VACÍO
favourites.push(...favouriteFromLs); //AGREGA MUCHOS ELEMENTOS A OTRO ARRAY SIN ANIDARLOS

renderSeries(); // MUESTRA LLA LISTA DE SERIES Y DE FAVORITAS AL CARGAR LA PAGINA
renderFavorites();
