/*
if ("serviceWorker" in navigator) {
	  window.addEventListener("load", function() {
		navigator.serviceWorker
		  .register("/serviceWorker.js")
		  .then(res => console.log("service worker registered"))
		  .catch(err => console.log("service worker not registered", err))
	  })
	}
*/

document.getElementById("nameCatA").innerHTML = nameCatA;
document.getElementById("namCatA").innerHTML = nameCatA;
document.getElementById("nameCatB").innerHTML = nameCatB;
document.getElementById("namCatB").innerHTML = nameCatB;
document.getElementById("nameCatC").innerHTML = nameCatC;
document.getElementById("namCatC").innerHTML = nameCatC;

let shop = document.getElementById("shop");
let show = document.getElementById("show") || [];
let welco = document.getElementById("welcome");
let onDet = document.getElementById("onlyDetails");
let standItemsData = [];
let productShow = [];
let productSelect = JSON.parse(localStorage.getItem("producto")) || [];
  
let basket = JSON.parse(localStorage.getItem("data")) || [];
let subTot2 = document.getElementById("subTot2");

let selectionID = (id) => {
  productSelect = [];
  let selectedItem = id;
  let search = productSelect.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    productSelect.push({
      id: selectedItem.id,
      
    });}
  localStorage.setItem("producto", JSON.stringify(productSelect));
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

let generateShop = () => {
  return (shop.innerHTML = standItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
      <a href="product.html" onclick="selectionID(${id})"><img class="img-item" src=${img} alt=""></a>
        <div class="details">
          <h4 class="name-item">${name}</h4>
          <p class="desc-item">"${desc}"</p>
        </div>
        <div class="price-quantity">
          <h3 class="price-item">$ ${price} COP</h3>
          <div class="buttons">
            <i onclick="increment(${id})" class="bi bi-cart-plus-fill"></i>
            <div id=${id} class="quantity-item">
              ${search.item === undefined ? "" : search.item}
            </div>
          </div>
        </div> 
    </div>
    `;
    })
    .join(""));
};

allPlants();
generateShop();

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

let viewProduct = (id) => {
  selectProduct = [];
  let selected = id;
  let searchProduct = selectProduct.find((x) => x.id === selected.id);

  if (searchProduct === undefined) {
    selectProduct.push({id: selected.id});
  } else {
      pass;
  }

  // console.log(basket);
  TotalAmount();
  //showSelected(selected.id);
  localStorage.setItem("product", JSON.stringify(selectProduct));
  console.log(selectProduct);
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


let showProduct = () => {
  return (show.innerHTML = productShow.map((x) => {
      let { id, name, price, desc, img } = x;
      let search = selectProduct.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img class="img-item" src=${img} alt="">
        <div class="details">
          <h4 class="name-item">${name}</h4>
          <p class="desc-item">"${desc}"</p>
        </div>
        <div class="price-quantity">
          <h3 class="price-item">$ ${price} COP</h3>
          <div class="buttons">
            <i onclick="increment(${id})" class="bi bi-cart-plus-fill"></i>
            <div id=${id} class="quantity-item">
              ${search.item === undefined ? "" : search.item}
            </div>
          </div>
        </div> 
    </div>`;}).join(""));
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

function allPlants(){
  
  standItemsData = [];
  catA.forEach((planta) => {
    standItemsData.push(planta);
  });
  catB.forEach((planta) => {
    standItemsData.push(planta);
  });
  catC.forEach((planta) => {
    standItemsData.push(planta);
  });
 
  welco.innerHTML = "";
  onDet.innerHTML = "";
  welcome();
  generateShop();
};

function onlyCatA(){
  standItemsData = [];
  catA.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailCatA();
  generateShop();
};
function onlyCatB(){
  standItemsData = [];
  catB.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailCatB();
  generateShop();
};
function onlyCatC(){
  standItemsData = [];
  catC.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailCatC();
  generateShop();
};
function onlyCatD(){
  standItemsData = [];
  catD.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailCatD();
  generateShop();
};


function welcome() {
	welco.innerHTML = `
	<div class="detail" id="detail">
	
	<p class="detalle">¡Hola! Bienvenido a ClauStore, donde la belleza se encuentra con la sostenibilidad.

  Descubre una amplia selección de productos de cuidado personal, moda y artículos de segunda mano para darle una segunda vida a tu estilo.</p>
	
	</div>
	
	`;
};
function detailCatA() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">${nameCatA}</h3>
	<p class="detalle">Mímate y siente radiante. Descubre nuestra selección de productos para el cuidado personal.

  Cremas, maquillaje, perfumes, higiene y más.</p>
	
	</div>
	
	`;
};
function detailCatB() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">${nameCatB}</h3>
	<p class="detalle">Tu estilo, tu esencia. Encuentra ropa y accesorios que te harán sentir segura y radiante en cualquier ocasión.</p>
	
	</div>
	
	`;
};
function detailCatC() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">${nameCatC}</h3>
	<p class="detalle">Creemos en la moda sostenible y responsable. Ofrecemos ropa de segunda mano en excelentes condiciones, para que puedas renovar tu armario sin culpa. Encuentra piezas únicas y atemporales que te harán sentir especial.</p>
	
	</div>
	
	`;
};



