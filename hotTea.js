const menuDetailHotTea = document.querySelector(".menu_detail_hotTea");
let ListOfHotTea = [
  {
    id: 0,
    price: "55K",
    name: "BLACK TEA",
    imgUrl: "./sigImg/sig_sample.jpg",
  },
  {
    id: 1,
    price: "55K",
    name: "OOLONG GREEN TEA",
    imgUrl: "./sigImg/sig_sample.jpg",
  },
  {
    id: 2,
    price: "75K",
    name: "BAMBOO SHOOT TEA",
    imgUrl: "./sigImg/sig_sample.jpg",
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

function addHotTeaList(obj, gallery) {
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

addHotTeaList(ListOfHotTea, menuDetailHotTea);
