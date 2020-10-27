const data = [
  { name: "adidas", image: "http://62.210.247.201:9000/adidas.png", weight: 5 },
  {
    name: "bhfitness",
    image: "http://62.210.247.201:9000/bhfitness.png",
    weight: 3,
  },
  { name: "domyos", image: "http://62.210.247.201:9000/domyos.png", weight: 5 },
  {
    name: "kettler",
    image: "http://62.210.247.201:9000/kettler.png",
    weight: 2,
  },
  { name: "reebok", image: "http://62.210.247.201:9000/reebok.png", weight: 3 },
  {
    name: "tunturi",
    image: "http://62.210.247.201:9000/tunturi.png",
    weight: 3,
  },
  { name: "zycle", image: "http://62.210.247.201:9000/zycle.png", weight: 1 },
  { name: "BKOOL", image: "http://62.210.247.201:9000/BKOOL.png", weight: 3 },
  { name: "BTWIN", image: "http://62.210.247.201:9000/BTWIN.png", weight: 5 },
  {
    name: "fitshow",
    image: "http://62.210.247.201:9000/fitshow.png",
    weight: 2,
  },
  { name: "Tacx", image: "http://62.210.247.201:9000/Tacx.png", weight: 2 },
  {
    name: "klarfit",
    image: "http://62.210.247.201:9000/klarfit.png",
    weight: 3,
  },
  { name: "Hammer", image: "http://62.210.247.201:9000/Hammer.png", weight: 2 },
];

// let dataApi = [];

// async function fetchDatas() {
//   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   const url = "http://62.210.247.201:9000/test";
//   const response = await fetch(proxyUrl + url);
//   data = await response.json();
//   return data;
// }

// dataApi = fetchDatas();

const numberOfImages = 7;
const indexes = [];
for (let i = 0; i <= numberOfImages - 1; i++) {
  indexes.push(i);
}
const time = 1200;

function checkAndIncrement(index) {
  if (index < data.length - 1) {
    // remplacer data par dataApi si fetch ok
    return index + 1;
  } else {
    return 0;
  }
}

function changeImg() {
  for (let i = 0; i <= indexes.length - 1; i++) {
    document.getElementById("slide" + i).src = data[indexes[i]].image; // remplacer data par dataApi si fetch ok
  }
  for (let i = 0; i <= indexes.length - 1; i++) {
    indexes[i] = checkAndIncrement(indexes[i]);
  }
  setTimeout("changeImg()", time);
}

window.onload = setTimeout(function () {
  changeImg();
}, 500);
