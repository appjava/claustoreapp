
let shop = document.getElementById("shop") || [];
let show = document.getElementById("show");
let welco = document.getElementById("welcome") || [];
let nameShowcase = document.getElementById("nameShowcase");
let onDet = document.getElementById("onlyDetails") || [];

let productShow = [];

let basket = JSON.parse(localStorage.getItem("data")) || [];
let subTot2 = document.getElementById("subTot2");
let selectProduct = JSON.parse(localStorage.getItem("product")) || [];
let productSelect = JSON.parse(localStorage.getItem("producto")) || [];


let showWelco = () => {
  
  return (nameShowcase.innerHTML = productSelect.map((x) => {
    
    let { id } = x;
    let search = shopItemsData.find((x) => x.id === id) || [];
    
    return `
    <div class="detail">
      <h2 class="detail">${search.name}</h2>
    </div>
    `;}).join(""));

};

let showProduct = () => {
  showWelco();
  
  return (show.innerHTML = productSelect.map((x) => {
    
      let { id } = x;
      let search = shopItemsData.find((x) => x.id === id) || [];
      let search2 = basket.find((x) => x.id === id) || [];
      return `
      
      <!--<div class="showcase">
          <img class="" src=${search.img === undefined ? ["images/logos/logoClau.png"] : search.img} >
          <img class="" src=${search.img1 === undefined ? ["images/logos/logoClau.png"] : search.img1} >
          <img class="" src=${search.img2 === undefined ? ["images/logos/logoClau.png"] : search.img2} >
          <img class="" src=${search.img3 === undefined ? ["images/logos/logoClau.png"] : search.img3} >
      </div>-->
      <div class="showcase">
      <div class="pic-ctn">
          <img src=${search.img === undefined ? ["images/logos/logoClau.png"] : search.img} alt="" class="pic">
          <img src=${search.img1 === undefined ? ["images/logos/logoClau.png"] : search.img1} alt="" class="pic">
          <img src=${search.img2 === undefined ? ["images/logos/logoClau.png"] : search.img2} alt="" class="pic">
          <img src=${search.img3 === undefined ? ["images/logos/logoClau.png"] : search.img3} alt="" class="pic">
      </div>
      </div>
      <div>
      <div class="detail">
        <br>
        <h3 class="detail">"${search.desc}"</h3>
        <br>
      </div>

      <h3></h3>
      <br>
      <p class="desc-item-show">${search.desc1 === undefined ? "" : search.desc1}</p>
      <br>
      <div id=product-id-${search.id} class="item-show">
        <br>
        <div class="price-quantity">
          <div class="buttons-show">
            <h3 class="price-item-show" onclick="increment(${search.id})">$ ${search.price} COP</h3>
            <i onclick="increment(${search.id})" class="bi bi-cart-plus-fill"></i>
            <div id=${search.id} class="quantity-item-show">
              ${search2.item === undefined ? "" : search2.item}
            </div>
          </div>
        </div>
      </div>
      </div>
      <a href="index.html">
      <button class="HomeBtn">Volver a Estante</button>
      </a>
    `;}).join(""));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    
    var valorTotal = amount;
    
    subTot2.innerHTML = `
    <h5>$ ${amount}</h5>
    `;
    return valorTotal;
  } else return;
};

TotalAmount();

showProduct();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  TotalAmount();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

