// [1] 클래식 커피 메뉴 지정

const menuDetail = document.querySelector(".menu_detail");
let ListOfClassicCoffee = [
  { id: 0, price: "45K", name: "ESPRESSO", imgUrl: "./sigImg/sig_sample.jpg" },
  {
    id: 1,
    price: "45K",
    name: "CA PHE SUA",
    imgUrl: "./sigImg/sig_sample.jpg",
  },
  { id: 2, price: "45K", name: "BAC XIU", imgUrl: "./sigImg/sig_sample.jpg" },
  { id: 3, price: "49K", name: "AMERICANO", imgUrl: "./sigImg/sig_sample.jpg" },
  { id: 4, price: "55K", name: "LATTE", imgUrl: "./sigImg/sig_sample.jpg" },
  {
    id: 5,
    price: "55K",
    name: "CAPPUCCINO",
    imgUrl: "./sigImg/sig_sample.jpg",
  },
  { id: 6, price: "60K", name: "MOCHA", imgUrl: "./sigImg/sig_sample.jpg" },
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

function addCoffeeList(obj, gallery) {
  let nameIndex = exportName(obj);
  let priceIndex = exportPrice(obj);
  let imgIndex = exportImg(obj);
  let tagArray = [];
  for (let i = 0; i < obj.length; i++) {
    let listTag = `
        <div class="each_menu">
          <div class="img_side">
            <img src="${imgIndex[i]}" />
          </div>
          <div class="desc_side">
            <h3>${nameIndex[i]}
            </h3>
            <span>${priceIndex[i]}
            </span>
            <p>Hot / Ice </p>
          </div>
        </div>`;
    tagArray.push(listTag);
  }

  let tagToString = tagArray.join("");
  gallery.innerHTML = tagToString;
}

addCoffeeList(ListOfClassicCoffee, menuDetail);

// [2] 메뉴 클릭시 스크롤 이동
$(function () {
  $("li > a").click(function () {
    $("html, body").animate({ scrollTop: $(this.hash).offset.top }, 300);
  });
});
