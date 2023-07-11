const menuDetailPourOver = document.querySelector(".menu_detail_pourOver");
let ListOfPourOver = [
  {
    id: 0,
    price: "65K",
    name: "KENYA",
    imgUrl: "/coffeeImg/1.png",
  },
  {
    id: 1,
    price: "65K",
    name: "ETHIOPIA",
    imgUrl: "/coffeeImg/1.png",
  },
  { id: 2, price: "60K", name: "YELLOW BOURBON", imgUrl: "/coffeeImg/1.png" },
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

function addPourOverList(obj, gallery) {
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

addPourOverList(ListOfPourOver, menuDetailPourOver);
