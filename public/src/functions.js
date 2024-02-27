//---------------------------- DATA

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

let shopItemsData = [];

let suculentas = [
  {
    id: "s1",
    name: "Suculenta Rosa",
    price: 15000,
    desc: "Plantas resistentes con encanto natural.",
    img: "images/productos/plantas/suculentas/rosa/rosa1.png",
  },
  {
    id: "s2",
    name: "Suculenta Bananito",
    price: 15000,
    desc: "Belleza botánica de bajo cuidado.",
    img: "images/productos/plantas/suculentas/banano/banano1.png",
  },
  {
    id: "s3",
    name: "Suculenta Cactus",
    price: 15000,
    desc: "Hojas exuberantes y colores cautivadores.",
    img: "images/productos/plantas/suculentas/cactus/cactus1.jpeg",
    img1: "images/productos/plantas/suculentas/cactus/cactus2.png",
    img2: "images/productos/plantas/suculentas/cactus/cactus3.png",
    img3: "images/productos/plantas/suculentas/cactus/cactus4.jpg",
  }
];
let bromelias = [
  {
    id: "b1",
    name: "Bromelia Pluma",
    price: 20000,
    desc: "Elegancia natural con toque exótico.",
    img: "images/productos/plantas/bromelias/indio/indio1.jpeg",
  },
  {
    id: "b2",
    name: "Bromelia Rosa",
    price: 20000,
    desc: "Toque de selva en tu espacio.",
    img: "images/productos/plantas/bromelias/rosa/rosa1.jpg",
  },
  {
    id: "b3",
    name: "Bromelia Estrella",
    price: 20000,
    desc: "Flores tropicales en vivos colores.",
    img: "images/productos/plantas/bromelias/estrella/estrella1.jpeg",
  },
];
let orquideas = [
  {
    id: "o1",
    name: "Orquidea Zapatico",
    price: 60000,
    desc: "Flores únicas de gran sofisticación.",
    img: "images/productos/plantas/orquideas/zapatico/zapatico1.jpg",
    img1: "images/productos/plantas/orquideas/zapatico/zapatico2.jpg",
    img2: "images/productos/plantas/orquideas/zapatico/zapatico3.png",
    img3: "images/productos/plantas/orquideas/zapatico/zapatico4.png",
  },
  {
    id: "o2",
    name: "Orquidea Crespa",
    price: 30000,
    desc: "Belleza etérea en tu hogar.",
    img: "images/productos/plantas/orquideas/crespa/crespa1.png",
  },
  {
    id: "o3",
    name: "Orquidea Petalo",
    price: 30000,
    desc: "Elegancia en cada pétalo.",
    img: "images/productos/plantas/orquideas/petalo/petalo1.jpeg",
  }
];
let anturios = [
  {
    id: "an1",
    name: "Anturio Rojo",
    price: 25000,
    desc: "Toque de color en hojas exóticas.",
    img: "images/productos/plantas/anturios/rojo/rojo1.jpeg",
  },
  {
    id: "an2",
    name: "Anturio Salmón",
    price: 25000,
    desc: "Exuberancia tropical en cada planta.",
    img: "images/productos/plantas/anturios/salmon/salmon1.jpeg",
  },
  {
    id: "an3",
    name: "Anturio Mini",
    price: 15000,
    desc: "Elegancia natural con acento de selva.",
    img: "images/productos/plantas/anturios/mini/mini2.jpg",
    img1: "images/productos/plantas/anturios/mini/mini.jpeg",
    img2: "images/productos/plantas/anturios/mini/mini3.png",
    img3: "images/productos/plantas/anturios/mini/mini1.png",
  }
];
let cartuchos = [
  {
    id: "ca1",
    name: "Cartucho Blanco",
    price: 25000,
    desc: "Toque floral exquisito y original.",
    img: "images/productos/plantas/cartuchos/blanco/blanco1.jpg",
  },
  {
    id: "ca2",
    name: "Cartucho Color",
    price: 25000,
    desc: "Inflorescencias de elegancia singular.",
    img: "images/productos/plantas/cartuchos/color/color1.png",
  },
  {
    id: "ca3",
    name: "Cartucho Mini",
    price: 10000,
    desc: "Flores con forma embellecedora.",
    img: "images/productos/plantas/cartuchos/mini/mini1.jpg",
  }
];
let platiceros = [
  {
    id: "p1",
    name: "Platicero Cuerno",
    price: 60000,
    desc: "Verdor vibrante y toque de selva.",
    img: "images/productos/plantas/platiceros/alce/alce1.jpeg",
    img1: "images/productos/plantas/platiceros/alce/alce2.jpg",
  },
  {
    id: "p2",
    name: "Platicero Oreja",
    price: 60000,
    desc: "Elegancia tropical en cada planta.",
    img: "images/productos/plantas/platiceros/elefante/elefante1.jpg",
  },
  {
    id: "p3",
    name: "Platicero Común",
    price: 45000,
    desc: "Hojas exóticas en forma de lanza.",
    img: "images/productos/plantas/platiceros/comun/comun1.jpg",
  }
];
let complementos = [
  {
    id: "c1",
    name: "Estantería Bambú",
    price: 90000,
    desc: "Ideal para exhibir tus plantas con estilo y armonía.",
    img: "images/productos/complementos/soportes/bamboo/estante/estante1.jpg",
  },
  {
    id: "c2",
    name: "Matera Concreto",
    price: 45000,
    desc: "Aspecto contemporáneo y duradero, un hogar sólido y elegante para tus plantas.",
    img: "images/productos/complementos/materas/concreto/concreto1.jpg",
  },
  {
    id: "c3",
    name: "Soporte Bambú",
    price: 30000,
    desc: "Para elevar tus plantas y crear una presentación atractiva, simplicidad y belleza.",
    img: "images/productos/complementos/soportes/bamboo/base/base1.jpg",
  },
  {
    id: "c4",
    name: "Canasta Bambú 30x30",
    price: 45000,
    desc: "Toque rústico y tropical, una forma única de presentar y proteger tus plantas.",
    img: "images/productos/complementos/materas/bamboo/30x30/30x30_1.png",
    img2: "images/productos/complementos/materas/bamboo/30x30/30x30_2.png",
  },
  {
    id: "c5",
    name: "Canasta Bambú 20x20",
    price: 30000,
    desc: "Fusión perfecta de funcionalidad y estilo para exhibir tus verdaderos tesoros verdes.",
    img: "images/productos/complementos/materas/bamboo/20x20/20x20_1.png",
    img1: "images/productos/complementos/materas/bamboo/20x20/20x20_2.png",
    img2: "images/productos/complementos/materas/bamboo/20x20/20x20_3.png",
    img3: "images/productos/complementos/materas/bamboo/20x20/20x20_4.png",
  },
  {
    id: "c6",
    name: "Canasta Bambú 40x20",
    price: 45000,
    desc: "Funcionalidad y estilo rústico.",
    img: "images/productos/complementos/materas/bamboo/40x20/40x20_1.png",
    img2: "images/productos/complementos/materas/bamboo/40x20/40x20_2.png",
  },
  {
    id: "c7",
    name: "Combo Bambú SixPack",
    price: 180000,
    desc1: "Set x6 Canasta Bambu: 20x20 (2und), 30x30 (2und), 40x20 (2und).)",
    desc: "Fusión perfecta de funcionalidad y estilo para exhibir tus verdaderos tesoros verdes.",
    img: "images/productos/complementos/materas/bamboo/sixPack/sixPack1.png",
    img1: "images/productos/complementos/materas/bamboo/20x20/20x20_1.png",
    img2: "images/productos/complementos/materas/bamboo/30x30/30x30_1.png",
    img3: "images/productos/complementos/materas/bamboo/40x20/40x20_1.png",
  },
  {
    id: "c8",
    name: "Abono Orgánico",
    price: 10000,
    desc: "Una forma natural de nutrir y asegurar su esplendor en cada temporada.",
    img: "images/productos/complementos/abonos/abono1.png",
  },
  {
    id: "c9",
    name: "Set x100 Ganchos Cadena",
    price: 30000,
    desc: "Ganchos en Acero galvanizado resistentes y duraderos.",
    img: "images/productos/complementos/accesorios/ganchos/ganchos100.png",
    img2: "images/productos/complementos/accesorios/ganchos/ganchos100_1.png",
  }
];


suculentas.forEach((planta) => {
  shopItemsData.push(planta);
});
bromelias.forEach((planta) => {
  shopItemsData.push(planta);
});
orquideas.forEach((planta) => {
  shopItemsData.push(planta);
});
anturios.forEach((planta) => {
  shopItemsData.push(planta);
});
cartuchos.forEach((planta) => {
  shopItemsData.push(planta);
});
platiceros.forEach((planta) => {
  shopItemsData.push(planta);
});
complementos.forEach((planta) => {
  shopItemsData.push(planta);
});



//-------------------------------- MAIN

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
  suculentas.forEach((planta) => {
    standItemsData.push(planta);
  });
  bromelias.forEach((planta) => {
    standItemsData.push(planta);
  });
  orquideas.forEach((planta) => {
    standItemsData.push(planta);
  });
  anturios.forEach((planta) => {
    standItemsData.push(planta);
  });
  cartuchos.forEach((planta) => {
    standItemsData.push(planta);
  });
  platiceros.forEach((planta) => {
    standItemsData.push(planta);
  });
  complementos.forEach((planta) => {
    standItemsData.push(planta);
  });
 
  welco.innerHTML = "";
  onDet.innerHTML = "";
  welcome();
  generateShop();
};

function onlySuculentas(){
  standItemsData = [];
  suculentas.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailSuculentas();
  generateShop();
};
function onlyBromelias(){
  standItemsData = [];
  bromelias.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailBromelias();
  generateShop();
};
function onlyOrquideas(){
  standItemsData = [];
  orquideas.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailOrquideas();
  generateShop();
};
function onlyAnturios(){
  standItemsData = [];
  anturios.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailAnturios();
  generateShop();
};
function onlyCartuchos(){
  standItemsData = [];
  cartuchos.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailCartuchos();
  generateShop();
};
function onlyPlaticeros(){
  standItemsData = [];
  platiceros.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailPlaticeros();
  generateShop();
};
function onlyComplementos(){
  standItemsData = [];
  complementos.forEach((planta) => {
    standItemsData.push(planta);
  });
  welco.innerHTML = "";
  onDet.innerHTML = "";
  detailComplementos();
  generateShop();
};

function welcome() {
	welco.innerHTML = `
	<div class="detail" id="detail">
	
	<p class="detalle">¡Bienvenido a nuestro maravilloso mundo! Aquí encontrarás una exquisita selección de plantas que llenarán tu vida de color, frescura y belleza natural. Explora nuestra colección y déjate cautivar por la magia de la naturaleza.</p>
	
	</div>
	
	`;
};
function detailBromelias() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Bromelias</h3>
	<p class="detalle">Explora el encanto tropical de las bromelias: hojas vibrantes, flores en espiral y versatilidad para interiores y exteriores. ¡Embellece con magia exótica!</p>
	
	</div>
	
	`;
};
function detailSuculentas() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Suculentas</h3>
	<p class="detalle">Descubre la elegancia y diversidad de las suculentas: hojas carnosas, colores cautivadores y bajo mantenimiento. ¡Decora con encanto natural y sofisticado!</p>
	
	</div>
	
	`;
};
function detailOrquideas() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Orquídeas</h3>
	<p class="detalle">Descubre la elegancia de las orquídeas: colores, formas y cuidado sencillo. ¡Flores espectaculares para tu hogar!</p>
	
	</div>
	
	`;
};
function detailAnturios() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Anturios</h3>
	<p class="detalle">Descubre los anturios: exuberantes inflorescencias, colores vibrantes y cuidado sencillo. ¡Tropicalidad y pasión para tu hogar!</p>
	
	</div>
	
	`;
};
function detailCartuchos() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Cartuchos</h3>
	<p class="detalle">Explora los cartuchos: flores singulares, colores vibrantes y cuidado sencillo. ¡Elegancia acuática para tu espacio!</p>
	
	</div>
	
	`;
};
function detailPlaticeros() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Platiceros</h3>
	<p class="detalle">Sumérgete en la belleza de los platiceros: hojas exóticas, colores cautivadores y facilidad de cuidado. ¡Fascinación tropical en tu hogar!</p>
	
	</div>
	
	`;
};
function detailComplementos() {
	onDet.innerHTML = `
	<div class="detail" id="detail">
	<h3 class="detalle">Complementos</h3>
	<p class="detalle">¡Embellece tu jardín con encantadores complementos! Materas elegantes, soportes prácticos y abonos nutritivos, todo en un solo lugar.</p>
	
	</div>
	
	`;
};

//----------------------------------- CART

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

let contact = document.getElementById("contact");
let label = document.getElementById("label");
let back = document.getElementById("back");
let ShoppingCart = document.getElementById("shopping-cart");
let cartIcon = document.getElementById("cartAmount");
let subTot = document.getElementById("subTot");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let productSelect = JSON.parse(localStorage.getItem("producto")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

function infoContact() {
	contact.innerHTML = `
	<div class="container">
      <form id="contacto">
          <fieldset class="datos">
              <h3 class="empty">Información de Contacto</h3>
              
                  <input type="text" id="name" placeholder="Nombre" required />
              
                  <input type="email" id="email" placeholder="Email" required />
              
                  <input type="tel" id="phone" placeholder="Teléfono" required />
     
          </fieldset>
      </form>
      <button id="submit" name="submit" onclick="sendEmail()">Realizar Pedido</button>
      <h6 class="note">* Confirmaremos los detalles del envío y el precio total de la compra, una vez realizado el pedido.</h6>
    </div>
	`;
};

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

let generateCartItems = () => {
  
  if (basket.length !== 0) {
    
    return (ShoppingCart.innerHTML = basket.map((x) => {
        
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
      <a href="product.html" onclick="selectionID(${id})"><img src=${search.img} alt="" /></a>
        <div class="details-cart">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <!--<p class="cart-item-price">$ ${search.price}</p>-->
              </h4>
          </div>
          <h3>$ ${item * search.price} COP</h3>
          <div class="title-price-x">
          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-square-fill"></i>
          </div>
          <i onclick="removeItem(${id})" class="bi bi-trash"></i>
          </div>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2 class="empty">Vacio</h2>
    <div class="cart">
    <a href="index.html"><i class="bi bi-stars"></i></a>
    </div>
    <h5 class="note">* Agrega productos del estante para hacer la compra</h5>
    <a href="index.html">
      <button class="HomeBtn">Volver a Estante</button>
    </a>
    `;
    back.innerHTML = ``;
  }
};

generateCartItems();

// Modificamos la función para generar la tabla de carrito
let generateCartTable = () => {
  if (basket.length !== 0) {
    // Creamos un nuevo arreglo con la información para la tabla
    const cartTableData = basket.map((item) => {
      const { id, item: quantity } = item;
      const { name, price } = shopItemsData.find((itemData) => itemData.id === id) || {};
      const total = quantity * price;
      let orden = name + " x " + quantity.toString();
      return orden;
      //return { Producto: name, Cantidad: quantity };
      //return { Cantidad: quantity, Producto: name, Precio: `$ ${price}`, Total: `$ ${total}` };
    });

    // Mostramos la tabla en la consola usando console.table()
    //console.table(cartTableData, ["Cantidad", "Producto", "Precio", "Total"]);
    //console.log(cartTableData.length);
    //console.log(JSON.stringify(cartTableData));
    return JSON.stringify(cartTableData);
  } else {
    console.log("El carrito está vacío.");
  }
};

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

  generateCartItems();
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
  generateCartItems();
  
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  update(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  TotalAmount();
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  cartIcon.innerHTML = 0;
  contact.innerHTML = ``;
  back.innerHTML = ``;
  subTot.innerHTML = ``;
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
    if (valorTotal >= 90000) {
      back.innerHTML = ``;
      infoContact();
      subTot.innerHTML = `
    <h6>*Envío Gratis*</h6>
    `;
    }else{
      subTot.innerHTML = ``;
      contact.innerHTML = ``;
      back.innerHTML = `
      <div class="container">
      <h5 class="note">* Compra mínima de $90.000 COP para hacer pedido, incluye envío gratuito en ciudades principales</h5>
      <!--<a href="index.html">
        <button class="HomeBtn">Volver a Estante</button>
      </a>-->
      </div>
      `;
    }
    
    label.innerHTML = `
    <h2 class="total" id="total">Total Estimado:</h2>
    <div class="clear">
    <h2 class="valor" id="valor">$ ${amount} COP</h2>
    <span class="bi bi-trash" onclick="clearCart()"></span>
    </div>
    <a href="index.html">
      <button class="HomeBtn">Seguir Comprando</button>
    </a>
    `;
    return valorTotal;
  } else{
    subTot.innerHTML = ``;
    contact.innerHTML = ``;
    return;
  }
};

TotalAmount();
total = TotalAmount();

function sendEmail(){

  //total = TotalAmount();
  Name = document.getElementById("name").value;
  Email = document.getElementById("email").value;
  Phone = document.getElementById("phone").value;
  
  var params = {
    userName: Name,
    userEmail: Email,
    userPhone: Phone,
    userMessage: generateCartTable(),
    userTotal: total
  };

const serviceID = "service_hpd8bdi";
const templateID = "template_b298aw9";

if (Name == "" || Email == "" ||  Phone == ""){
  alert("Por favor completa la información de contacto para hacer pedido, gracias.")
}else {
    emailjs.send(serviceID, templateID, params).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);});

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
      
    alert("Pedido enviado.\nEn breve nos comunicaremos para definir los detalles del envío y concretar la compra.\nGracias por visitarnos!!!")
    clearCart()
}


/*
userName = document.getElementById("name").value;
userEmail = document.getElementById("email").value;
userPhone =  document.getElementById("phone").value;

console.log("Datos de Contacto");
console.log("Nombre: " + userName);
console.log("Email: " + userEmail);
console.log("Teléfono: " + userPhone);
console.log("Pedido Solicitado: ");
console.log(generateCartTable());
console.log("Total Compra: " + total + " COP");
*/
//clearCart();

}


function gracias(){ 
  alert("Pedido enviado.\nEn breve nos comunicaremos para definir los detalles del envío y concretar la compra.\nGracias por visitarnos!!!")
  clearCart()
}


