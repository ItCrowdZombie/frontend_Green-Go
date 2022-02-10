import axios from "axios";

const cards = [
  {
    img: "http://localhost:3000/media/planta3.jpg",
    name: "cucharita",
    seller: { name: "PenguinShop", id: 1 },
    price: 15,
    description: "decorative",
  },
  {
    img: "http://localhost:3000/media/planta2.png",
    name: "tenedor",
    seller: { name: "PepeShop", id: 2 },
    price: 16,
    description: "decorative tambien",
  },
  {
    img: "http://localhost:3000/media/planta1.jpg",
    name: "cuchillo thc",
    seller: { name: "PenguinShop", id: 1 },
    price: 15,
    description: "decorative",
  },
  {
    img: "http://localhost:3000/media/planta1.jpg",
    name: "plato cbd",
    seller: { name: "PepeShop", id: 2 },
    price: 16,
    description: "decorative tambien",
  },
];

export async function getAllCards() {
  return axios.get("http//localhost:8080/products").then((res) => res.data);
}

export async function getAllCardsBySellerId() {
  return cards.filter((card) => card.seller.id === 1);
}

export async function getCardById() {
  return axios.get("http//localhost:8080/products/{id}").then((res)=>res.data);
}
