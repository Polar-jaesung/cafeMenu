const menuDetailCakeAndOthers = document.querySelector(
  ".menu_detail_cakeAndOthers"
);
let ListOfCakeAndOthers = [
  {
    id: 0,
    price: "55K",
    name: "ORANGE",
    imgUrl: "./sigImg/cake.jpeg",
  },
  {
    id: 1,
    price: "55K",
    name: "WATERMELON",
    imgUrl: "./sigImg/cake.jpeg",
  },
  {
    id: 2,
    price: "60K",
    name: "PINEAPPLE",
    imgUrl: "./sigImg/cake.jpeg",
  },
  {
    id: 3,
    price: "60K",
    name: "GINGER ALE",
    imgUrl: "./sigImg/cake.jpeg",
  },
  {
    id: 4,
    price: "60K",
    name: "ORANGE MATCH",
    imgUrl: "./sigImg/cake.jpeg",
  },
  {
    id: 5,
    price: "60K",
    name: "CACAO OAT LATTE",
    imgUrl: "./sigImg/cake.jpeg",
  },
  {
    id: 6,
    price: "60K",
    name: "MATCHA OAT LATTE",
    imgUrl: "./sigImg/cake.jpeg",
  },
];

function exportName(data) {
  let coffeeName = [];
  for (let key in data) {
    coffeeName.push(data[key]["name"]);
  }
  return coffeeName;
}

function exportPrice(data) {
  let coffeePrice = [];
  for (let key in data) {
    coffeePrice.push(data[key]["price"]);
  }
  return coffeePrice;
}

function exportImg(data) {
  let coffeeImg = [];
  for (let key in data) {
    coffeeImg.push(data[key]["imgUrl"]);
  }
  return coffeeImg;
}

function addCakeAndOthersList(obj, gallery) {
  let nameIndex = exportName(obj);
  let priceIndex = exportPrice(obj);
  let imgIndex = exportImg(obj);
  let tagArray = [];
  for (let i = 0; i < obj.length; i++) {
    let listTag = `
        <div class="each_menu">
        <div class="img_side"><img src="${imgIndex[i]}" /></div>
        <div class="desc_side">
        <h3>${nameIndex[i]}</h3>
        <span>${priceIndex[i]}</span></div></div>`;
    tagArray.push(listTag);
  }

  let tagToString = tagArray.join("");
  gallery.innerHTML = tagToString;
}

addCakeAndOthersList(ListOfCakeAndOthers, menuDetailCakeAndOthers);
