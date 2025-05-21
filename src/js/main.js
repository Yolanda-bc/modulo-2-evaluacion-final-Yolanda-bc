"use strict";

const seriesList = document.querySelector(".js_seriesList");
const form = document.querySelector(".js_form");
const input = document.querySelector(".js_input");
const favouriteList = document.querySelector(".js_favouritesList");

const favourites = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchText = input.value.trim();
  if (searchText !== "") {
    searchSeries(searchText);
  }
});

function searchSeries(query) {
  const url = `https://api.jikan.moe/v4/anime?q=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      series = data.data;
      renderSeries();
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
  seriesList.innerHTML = "";

  series.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("series-card");
    li.innerHTML = `
      <img src="${item.images.jpg.image_url}" alt="${item.title}" class="series-image"/>
      <h3 class="series-title">${item.title}</h3>`;
    const isFavourite = favourites.some(
      (favourite) => favouriteTitle === item.title
    );
    if (isFavourite) {
      li.classList.add("is-favourite");
    }
    li.addEventListener("click", () => {
      toggleFavorite(index, li);
    });
    seriesList.appendChild(li);
  });
}

function toggleFavorite(index, listItem) {
  const item = series[index];
  const favIndex = favourites.findIndex((fav) => fav.title === item.title);

  if (favIndex === -1) {
    favourites.push(item);
    listItem.classList.add("is-favourite"); // Añades la clase cuando se agrega a favoritos
  } else {
    favourites.splice(favIndex, 1);
    listItem.classList.remove("is-favourite"); // La quitas cuando se elimina de favoritos
  }

  localStorage.setItem("favourites", JSON.stringify(favourites));

  renderFavorites();
}

renderFavorites();

function renderFavorites() {
  favouriteList.innerHTML = "";

  favourites.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("favourite-card");
    li.innerHTML = `
      <img src="${item.images.jpg.image_url}" alt="${item.title}" class="favourite-image"/>
      <h3 class="favourite-title">${item.title}</h3>
    `;
    favouriteList.appendChild(li);
  });
}

renderSeries();
renderFavorites();
