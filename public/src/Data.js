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



