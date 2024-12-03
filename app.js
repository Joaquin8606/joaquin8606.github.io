// Lista de productos
const products = [
  { name: "Sabrositos Gato", animal: 1, color: "#a6c7e2", priceBig: "10Kg: $19.900", priceSmall: "1Kg: $2.200", image: "https://ugc.production.linktr.ee/ee879bb4-3246-4148-819a-898a49a96e49_sabrositos-gato-pescado-21-69ae644818145047e416395826943671-1024-1024.jpeg?io=true&size=square-fit" },
  { name: "Crianza Felina", animal: 1, color: "#d9bde5", priceBig: "10Kg: $12.700", priceSmall: "1Kg: $1.400", image: "https://www.distriballester.com/wp-content/uploads/2019/08/CRIANZA-GATO-5425.jpg" },
  { name: "Biopet", animal: 0, color: "#b8e3bb", priceBig: "20Kg: $25.300", priceSmall: "1Kg: $1.360", image: "https://ugc.production.linktr.ee/02facfeb-ff69-46ea-a560-e2a5a1430f19_BIOPET-ADULTO.jpeg?io=true&size=square-fit" },
  { name: "Sabrositos Perro", animal: 0, color: "#a6c7e2", priceBig: "15Kg: $20.600", priceSmall: "1Kg: $1.430", image: "https://ugc.production.linktr.ee/c82d5f0a-41a1-4a2a-a15e-dc7f39f827c4_image.png?io=true&size=square-fit" },
  { name: "Can Active", animal: 0, color: "#cb857f", priceBig: "20Kg: $31.980", priceSmall: "1Kg: $1.700", image: "https://ugc.production.linktr.ee/c2e79e8a-5793-4b0a-b16c-276063dee263_diseno-sin-titulo-34-353e456b29d80cfada17258513344718-1024-1024.png?io=true&size=square-fit" },
  { name: "Crianza Canina", animal: 0, color: "#ddad7f", priceBig: "20Kg: $17.920", priceSmall: "1Kg: $930", image: "https://ugc.production.linktr.ee/0bafec9b-eb6b-438e-ad47-7106338de382_Crianza-Perro-592x592.png?io=true&size=square-fit" },
];

// Seleccionar el contenedor
const container = document.getElementById("products-container");

// Crear divs dinámicos
products.forEach(product => {
  // Crear el div del producto
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  productDiv.style.backgroundColor = product.color;

  if(product.animal == 0){
    var decorationImage = "images/bone.png"
  } else{
    var decorationImage = "images/fish.png"
  }

  // Contenido del producto
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.priceBig}</p>
    <p>${product.priceSmall}</p>
    <img src="${decorationImage}" class="decorationImage1">
    <img src="${decorationImage}" class="decorationImage2">
  `;

  // Agregar el div al contenedor
  container.appendChild(productDiv);
});