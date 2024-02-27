
let shopItemsData = [];
//Cuidado Personal
let nameCatA = "Personal Care";
let catA = [
  {
    id: "a1",
    name: "Crema Victoria's Secret",
    price: 30000,
    desc: "Crema hidratante",
    img: "images/productos/catA/a1/a1.jpg",
  },
  {
    id: "a2",
    name: "Splash Victorias Secret 250ml",
    price: 25000,
    desc: "Spray refrescante",
    img: "images/productos/catA/a2/a2.jpg",
  },
  {
    id: "a3",
    name: "Combo Crema y Splash",
    price: 45000,
    desc: "Combinación perfecta",
    img: "images/productos/catA/a3/a3.jpg",
    img1: "images/productos/catA/a1/a1.jpg",
    img2: "images/productos/catA/a2/a2.jpg",
  }
];

//Accesorios
let nameCatB = "Accesorios";
let catB = [];

//Ropero
let nameCatC = "Ropero";
let catC = [];

//Productos Aseo Personal
let nameCatD = "Aseo Personal";
let catD = [];

//Second Change
let nameCatE = "Second Change";
let catE = [
  {
    id: "e1",
    name: "Bolso de mano tipo baúl",
    price: 60000,
    desc: "Bolso de mano tipo baúl con correa adicional. Poco uso. Estado 8/10",
    img: "images/productos/catE/e1/e1.jpg",
    img1: "images/productos/catE/e1/e2.jpg",
  },
  {
    id: "e2",
    name: "Blusa",
    price: 30000,
    desc: "Casi Nueva",
    img: "images/productos/catE/e2/e2.jpg",
  },
];

catA.forEach((planta) => {
  shopItemsData.push(planta);
});
catB.forEach((planta) => {
  shopItemsData.push(planta);
});
catC.forEach((planta) => {
  shopItemsData.push(planta);
});
catD.forEach((planta) => {
  shopItemsData.push(planta);
});
catE.forEach((planta) => {
  shopItemsData.push(planta);
});


