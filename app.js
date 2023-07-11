// [1] 클래식 커피 메뉴 지정

const menuDetail = document.querySelector(".menu_detail");
let ListOfClassicCoffee = [
  { id: 0, price: "45K", name: "ESPRESSO", imgUrl: "./coffeeImg/0.png" },
  { id: 1, price: "45K", name: "CA PHE SUA", imgUrl: "./coffeeImg/0.png" },
  { id: 2, price: "45K", name: "BAC XIU", imgUrl: "./coffeeImg/0.png" },
  { id: 3, price: "49K", name: "AMERICANO", imgUrl: "./coffeeImg/0.png" },
  { id: 4, price: "55K", name: "LATTE", imgUrl: "./coffeeImg/0.png" },
  { id: 5, price: "55K", name: "CAPPUCCINO", imgUrl: "./coffeeImg/0.png" },
  { id: 6, price: "60K", name: "MOCHA", imgUrl: "./coffeeImg/0.png" },
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

function upnav() {
  document.addEventListener("scroll", onScroll, { passive: true }); //스크롤이벤트
  let last = 0; //최종 스크롤 위치 시작값은 0
  const gap = 1; // 마지막위치, 현재위치의 차이를 얼마로 둘 것인가
  const nav = document.querySelector("nav"); //네비게이션
  const headerheight = document.querySelector("header").clientHeight; //헤더 높이
  function onScroll() {
    const scrollposition = scrollY; //스크롤위치
    if (Math.abs(last - scrollposition) <= gap)
      return; //과거스크롤위치와 현재 스크롤위치의 절대값이 갭 이하이면 돌아가기
    else if (scrollposition > last || scrollposition <= headerheight) {
      // 스크롤이 내려가거나 헤더높이보다 낮거나 같다면
      nav.classList.remove("downdown"); // 네비에서 downdown 클래스를 제거
    } else if (scrollposition < last) {
      // 스크롤을 내리고 있다면
      nav.classList.add("downdown"); //네비에서 downdown 클래스를 추가
    }

    last = scrollposition; // 새롭게 마지막 스크롤위치를 업데이트
  }
}

upnav();
