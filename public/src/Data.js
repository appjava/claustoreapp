
let shopItemsData = [];
//Cuidado Personal
let nameCatA = "Armonía y Bienestar";
let catA = [
  {
    id: "a1",
    name: "Combo1",
    price: 45000,
    desc: "Crema Victoria's Secret 200ml + Splash Victoria's Secret 250ml",
    img: "images/productos/catA/a1/a1.jpg",
    img1: "images/productos/catA/a1/a2.jpg",
    img2: "images/productos/catA/a1/a3.jpg",
  },
  {
    id: "a2",
    name: "Combo2",
    price: 35000,
    desc: "Crema Victoria's Secret 200ml + Splash Victoria's Secret 250ml + Cosmetiquera",
    img: "images/productos/catA/a2/a1.jpg",
    img1: "images/productos/catA/a2/a2.jpg",
    img2: "images/productos/catA/a2/a3.jpg",
  },
  {
    id: "a3",
    name: "Combo3",
    price: 65000,
    desc: "Crema 250ml + Splash 250ml + Mini splash 30ml+ Cosmetiquera Plástica",
    img: "images/productos/catA/a3/a1.jpg",
    img1: "images/productos/catA/a3/a2.jpg",
    img2: "images/productos/catA/a3/a3.jpg",
  },
  {
    id: "a4",
    name: "Brllo labial",
    price: 8000,
    desc: "Brllo labial con efecto volumen",
    img: "images/productos/catA/a4/a1.jpg",
    img1: "images/productos/catA/a4/a2.jpg",
    img2: "images/productos/catA/a4/a3.jpg",
  },
  {
    id: "a5",
    name: "Mini Splash",
    price: 7000,
    desc: "Mini Splash dear body",
    img: "images/productos/catA/a5/a1.jpg",
  },
  {
    id: "a6",
    name: "Combito",
    price: 15000,
    desc: "Mini Splash + Brllo labialy",
    img: "images/productos/catA/a6/a1.jpg",
    img1: "images/productos/catA/a6/a2.jpg",
    img2: "images/productos/catA/a6/a3.jpg",
  },
  {
    id: "a7",
    name: "Splash Victoria's Secret",
    price: 20000,
    desc: "Splash Victoria's Secret 250ml",
    img: "images/productos/catA/a7/a1.jpg",
    img1: "images/productos/catA/a7/a2.jpg",
    img2: "images/productos/catA/a7/a3.jpg",
    img3: "images/productos/catA/a7/a4.jpg",
  },
  {
    id: "a8",
    name: "Crema Victoria's Secret",
    price: 25000,
    desc: "Crema Victoria's Secret 200ml",
    img: "images/productos/catA/a8/a1.jpg",
    img1: "images/productos/catA/a8/a2.jpg",
    img2: "images/productos/catA/a8/a3.jpg",
    img3: "images/productos/catA/a8/a4.jpg",
  },
];
//Ropero
let nameCatB = "Clau Fashion";
let catB = [];
//Segunda Oportunidad
let nameCatC = "Segunda Oportunidad";
let catC = [
  {
    id: "c1",
    name: "Bolso de mano tipo baúl",
    price: 60000,
    desc: "Bolso de mano tipo baúl con correa adicional. Poco uso. Estado 8/10",
    img: "images/productos/catC/c1/c1.jpg",
    img1: "images/productos/catC/c1/c2.jpg",
  },
  {
    id: "c2",
    name: "Blusa ELA",
    price: 60000,
    desc: "Blusa ELA talla M. Nueva sin etiqueta",
    img: "images/productos/catC/c2/c1.jpg",
    img1: "images/productos/catC/c2/c2.jpg",
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



