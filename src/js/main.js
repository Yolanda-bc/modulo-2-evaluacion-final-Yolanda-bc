'use strict';

console.log('>> Ready :)');

const seriesList = document.querySelector(".js_seriesList");

const series = [
  {
    title: "Naruto",
    image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg"
  },
  {
    title: "The Last: Naruto the Movie",
    image_url: "https://cdn.myanimelist.net/images/anime/1491/134498.jpg"
  },
  {
    title: "Boruto: Naruto the Movie",
    image_url: "https://cdn.myanimelist.net/images/anime/4/78280.jpg"
  },
  {
    title: "Naruto: Shippuuden Movie 6 - Road to Ninja",
    image_url: "https://cdn.myanimelist.net/images/anime/1620/94336.jpg"
  },
  {
    title: "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Ninpouchou Dattebayo!",
    image_url: "https://cdn.myanimelist.net/images/anime/1231/134484.jpg"
  },
  {
    title: "Naruto: Shippuuden Movie 1",
    image_url: "https://cdn.myanimelist.net/images/anime/1703/134493.jpg"
  },
  {
    title: "Naruto: Shippuuden Movie 2 - Kizuna",
    image_url: "https://cdn.myanimelist.net/images/anime/1484/134494.jpg"
  },
  {
    title: "Naruto: Shippuuden Movie 4 - The Lost Tower",
    image_url: "https://cdn.myanimelist.net/images/anime/1479/116734.jpg"
  },
  {
    title: "Naruto: Shippuuden Movie 5 - Blood Prison",
    image_url: "https://cdn.myanimelist.net/images/anime/1500/134496.jpg"
  },
  {
    title: "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
    image_url: "https://cdn.myanimelist.net/images/anime/1114/134485.jpg"
  },
  {
    title: "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panic Dattebayo!",
    image_url: "https://cdn.myanimelist.net/images/anime/1918/134487.jpg"
  },
  {
    title: "Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi",
    image_url: "https://cdn.myanimelist.net/images/anime/6/77678.jpg"
  },
  {
    title: "Naruto Narutimate Hero 3",
    image_url: "https://cdn.myanimelist.net/images/anime/10/11244.jpg"
  },
  {
    title: "Naruto: Shippuuden - Sunny Side Battle",
    image_url: "https://cdn.myanimelist.net/images/anime/1047/91638.jpg"
  },
  {
    title: "Naruto: Shippuuden - Shippuu! 'Konoha Gakuen' Den",
    image_url: "https://cdn.myanimelist.net/images/anime/5/51895.jpg"
  },
  {
    title: "Naruto Soyokazeden Movie",
    image_url: "https://cdn.myanimelist.net/images/anime/10/31573.jpg"
  },
  {
    title: "Road of Naruto",
    image_url: "https://cdn.myanimelist.net/images/anime/1731/128787.jpg"
  },
  {
    title: "Boruto: Naruto Next Generations",
    image_url: "https://cdn.myanimelist.net/images/anime/1091/99847.jpg"
  },
  {
    title: "Kamiusagi Rope x Boruto",
    image_url: "https://cdn.myanimelist.net/images/anime/3/88377.jpg"
  },
  {
    title: "Naruto x UT",
    image_url: "https://cdn.myanimelist.net/images/anime/3/30485.jpg"
  },
  {
    title: "Boruto: Naruto Next Generations Part 2",
    image_url: "https://cdn.myanimelist.net/images/anime/1604/134068.jpg"
  },
  {
    title: "Naruto: Shippuuden",
    image_url: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg"
  },
  {
    title: "Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono",
    image_url: "https://cdn.myanimelist.net/images/anime/1493/116732.jpg"
  },
  {
    title: "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
    image_url: "https://cdn.myanimelist.net/images/anime/13/36475.jpg"
  },
  {
    title: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
    image_url: "https://cdn.myanimelist.net/images/anime/11/20921.jpg"
  }
];
function renderSeries() {
  seriesList.innerHTML = ""; 
  series.forEach(item => {
    const html = `
      <li class="series-card">
        <img src="${item.image_url}" alt="${item.title}" class="series-image"/>
        <h3 class="series-title">${item.title}</h3>
      </li>
    `;
    seriesList.innerHTML += html;
  });
}

renderSeries();


