const menuDetailColdDrip = document.querySelector(".menu_detail_coldDrip");
let ListOfColdDrip = [
  {
    id: 0,
    price: "60K",
    name: "PURE COLD DRIP",
    imgUrl: "./sigImg/1.jpeg",
  },
  {
    id: 1,
    price: "55K",
    name: "FRUITY COLD DRIP",
    imgUrl: "./sigImg/1.jpeg",
  },
  {
    id: 2,
    price: "55K",
    name: "COCONUT COLD DRIP",
    imgUrl: "./sigImg/1.jpeg",
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

function addColdDripList(obj, gallery) {
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

addColdDripList(ListOfColdDrip, menuDetailColdDrip);
